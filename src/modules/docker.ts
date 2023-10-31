import { AWS, flag } from '../types'
import { isFile, isEmpty, cleanNullEntries } from '../utils'

export const caller_id: AWS = {
    data: {
        region: {
            name: '-->',
        },
        caller_identity: {
            account_id: '-->',
        },
    },
}

const docker_img = ({ img_name, src_path, dockerfile_path, build_args, platform }) => ({
    resource: {
        docker_image: {
            name: img_name,
            build: {
                context: src_path,
                dockerfile: dockerfile_path,
                args: build_args,
                platform: platform,
            },
        },
    },
})

const docker_registry_img = ({ name, keep_remotely = false }) => ({
    resource: {
        docker_registry_image: {
            name,
            keep_remotely,
        },
    },
})

/*

# Generates a filename for the zip archive based on the content of the files
# in source_path. The filename will change when the source code changes.
data "external" "archive_prepare" {
  count = var.create && var.create_package ? 1 : 0

  program = [local.python, "${path.module}/package.py", "prepare"]

  query = {
    paths = jsonencode({
      module = path.module
      root   = path.root
      cwd    = path.cwd
    })

    docker = var.build_in_docker ? jsonencode({
      docker_pip_cache          = var.docker_pip_cache
      docker_build_root         = var.docker_build_root
      docker_file               = var.docker_file
      docker_image              = var.docker_image
      with_ssh_agent            = var.docker_with_ssh_agent
      docker_additional_options = var.docker_additional_options
      docker_entrypoint         = var.docker_entrypoint
    }) : null

    artifacts_dir = var.artifacts_dir
    runtime       = var.runtime
    source_path   = jsonencode(var.source_path)
    hash_extra    = var.hash_extra
    hash_extra_paths = jsonencode(
      [
        # Temporary fix when building from multiple locations
        # We should take into account content of package.py when counting hash
        # Related issue: https://github.com/terraform-aws-modules/terraform-aws-lambda/issues/63
        # "${path.module}/package.py"
      ]
    )

    recreate_missing_package = var.recreate_missing_package
  }
}
*/
/**
 * @param {string} runtime - runtime for lambda
 * @param {string} source_path - path to source code
 * @param {string} artifacts_dir - path where artifacts should be stored
 * @param {string} builder - path to package.py
 * @param {object} docker_config - docker configuration
 * @param {string} docker_config.docker_pip_cache - path to pip cache
 * @param {string} docker_config.docker_build_root - path to build root
 * @param {string} docker_config.docker_file - path to dockerfile
 * @param {string} docker_config.docker_image - docker image
 * @param {boolean} docker_config.with_ssh_agent - whether to use ssh agent
 * @param {string} docker_config.docker_additional_options - additional docker options
 * @param {string} docker_config.docker_entrypoint - docker entrypoint
 */

interface Build {
    runtime: string
    source_path: string
    artifacts_dir: string
    builder?: string
    docker_config?: {
        /** path to pip cache */
        docker_pip_cache?: string
        /** Root dir where to build in Docker */
        docker_build_root?: string
        /** Path to a Dockerfile when building in Docker */
        docker_file?: string
        docker_image?: string
        with_ssh_agent?: boolean
        docker_additional_options?: string
        docker_entrypoint?: string
    }
}

const build = ({
    runtime,
    source_path,
    artifacts_dir,
    builder = '${path.root}/src/utils/package.py',
    docker_config = {},
}: Build) => {
    const {
        docker_pip_cache,
        docker_build_root,
        docker_file,
        docker_image,
        with_ssh_agent,
        docker_additional_options,
        docker_entrypoint,
    } = docker_config
    return {
        data: {
            external: {
                program: ['python', builder, 'prepare'],
                query: {
                    paths: JSON.stringify({
                        module: '${path.module}',
                        root: '${path.root}',
                        cwd: '${path.cwd}',
                    }),
                },
                ...(!isEmpty(docker_config)
                    ? {
                          docker: JSON.stringify(
                              cleanNullEntries({
                                  docker_pip_cache,
                                  docker_build_root,
                                  docker_file,
                                  docker_image,
                                  with_ssh_agent,
                                  docker_additional_options,
                                  docker_entrypoint,
                              })
                          ),
                      }
                    : {}),
            },
            artifacts_dir,
            runtime,
            source_path,
            /**
             *
             * Temporary fix when building from multiple locations. We should
             * take into account content of package.py when counting hash
             * Related issue:
             * https://github.com/terraform-aws-modules/terraform-aws-lambda/issues/63
             * "${path.module}/package.py"
             */
            hash_extra_paths: JSON.stringify([]),
        },
    }
}

const ecr_repo = ({
    name,
    image_tag_mutability = 'MUTABLE',
    force_delete = true,
    scan = false,
    tags = {},
}): AWS => ({
    resource: {
        // @ts-ignore: FIXME (src/types or regex)
        // image_scanning_configuration is qualified in place
        // instead of as separate section with heading
        ecr_repository: {
            name,
            image_tag_mutability,
            force_delete,
            image_scanning_configuration: {
                scan_on_push: scan,
            },
            tags: {
                ...flag,
                ...tags,
            },
        },
    },
})

const lifecycle_policy = ({ policy, repo }): AWS => ({
    resource: {
        ecr_lifecycle_policy: {
            repository: repo,
            policy,
        },
    },
})

const sam_metadata_image = ({ src_path, dockerfile_path, build_args, img_tag, img_uri }) => ({
    resource: {
        null_resource: {
            triggers: {
                resource_type: 'IMAGE_LAMBDA_FUNCTION',
                docker_context: src_path,
                docker_file: dockerfile_path,
                docker_tag: img_tag,
                docker_build_args: JSON.stringify(build_args),
                built_image_uri: img_uri,
            },
            depends_on: ['${docker_registry_image.$SCOPE}'],
        },
    },
})

const ecr_repo_fmt = (acct_id, region) => `${acct_id}.dkr.ecr.${region}.amazonaws.com`

const null_resource = ({ file_path }) => ({
    resource: {
        // TODO: add to types [1]
        null_resource: {
            triggers: isFile(file_path)
                ? { diff: `\${md5(file(${file_path}))}` }
                : {
                      diff: `\${sha1(join("", [for f in fileset(${file_path}, "**"): filesha1(f)]))}`,
                  },
        },
    },
})

/**
 * requires required providers to include kreuzwerker/docker and hashicorp/null
 * at root of compiler
 * ```ts
 * { required_providers: {
 *     aws: {
 *       source: 'hashicorp/aws',
 *       version: '>= 5.20',
 *     },
 *     docker: {
 *       source: 'kreuzwerker/docker',
 *       version: '>= 3.0',
 *     },
 *     null: {
 *       source: 'hashicorp/null',
 *       version: '>= 2.0',
 *     }
 *   }
 * }
 * ```
 */
//export const docked = ({ name, region, account_id }, my) => {
//    const ecr_address = ecr_repo_fmt(account_id, region)
//    const img_tag = `${ecr_address}/${name}:latest`
//    return {
//        image: docker_img({
//            img_name,
//            src_path,
//            dockerfile_path,
//            build_args,
//            platform,
//        }),
//        registry_img: docker_registry_img({
//            name,
//            keep_remotely,
//        }),
//        ecr_repo: ecr_repo({
//            name,
//            image_tag_mutability,
//            force_delete,
//            scan,
//            tags,
//        }),
//        lifecycle: lifecycle_policy({
//            policy,
//            repo: name,
//        }),
//        sam_image_meta: sam_metadata_image({
//            src_path,
//            dockerfile_path,
//            build_args,
//            img_tag,
//            img_uri,
//        }),
//    }
//}
