import { AWS, flag } from '../types'
import { isFile, isEmpty, cleanNullEntries } from '../utils/index'
import { isString } from '@thi.ng/checks'
import fs from 'fs'

interface SourcePathObj {
    // can either be a string, an array of strings or an object with these keys
    path: string
    patterns?: string | string[]
    commands?: string | string[]
    prefix_in_zip?: string
    pip_requirements?: boolean | string[]
    poetry_install?: boolean
    npm_package_json?: boolean | string[]
    pip_tmp_dir?: string
    npm_tmp_dir?: string
}

interface DockerOpts {
    /** Whether to mount a shared pip cache dir into docker env */
    pip_cache?: string
    /** A docker build root folder */
    root?: string
    /** Path to a Dockerfile when building in Docker */
    dockerfile?: string
    /** Docker image (name w/qualifiers) to use for the build */
    image?: string
    /** Whether to pass SSH_AUTH_SOCK into docker env */
    with_ssh_agent?: boolean
    /** Additional options to pass to the docker run command (e.g. to set environment variables, volumes, etc.) */
    additional_options?: string[]
    /** Path to a Docker --entrypoint to use */
    entrypoint?: string
}

interface Prepare {
    /**
     * The  path to a local file or directory containing your Lambda source code
     *
     * when paired with `docker` options, `src_path` also feeds
     * `resource` > `docker_image` > `build` > `context`
     *
     * Currently, only a PATH context is supported. You can use the helper function
     * '${path.cwd}/context-dir'. Please see
     * https://docs.docker.com/build/building/context/ for more information about
     * build contexts.
     */
    src_path: string // TODO: | string[] | SourcePathObj[]
    /** python3.x, nodejs18.x, etc. */
    runtime?: string
    /** Directory name where artifacts should be stored */
    artifacts_dir?: string
    /** path to packager (package.py) */
    builder?: string
    /** Whether to recreate Lambda package if it is missing locally or not */
    recreate?: boolean
    docker?: DockerOpts
}

/**
 * Generates a filename for the zip archive based on the content of the files in
 * src_path. The filename will change when the source code changes.
 */

const python = '${(substr(pathexpand("~"), 0, 1) == "/") ? "python3" : "python.exe"}'

/**
 *
 * Generates a filename for the zip archive based on the content of the files
 * in source_path. The filename will change when the source code changes.
 *
 */
const prepare = ({
    src_path,
    runtime = 'python3.8',
    artifacts_dir = 'builds',
    docker = {},
    builder = '${path.root}/src/utils/package.py',
    recreate = true,
}: Prepare): AWS => {
    const {
        pip_cache = null,
        root,
        dockerfile = 'Dockerfile',
        image,
        with_ssh_agent = false,
        /**
         * Additional options to pass to the docker run command (e.g. to set
         * environment variables, volumes, etc.)
         */
        additional_options = [],
        entrypoint = null,
    } = docker

    //const run = 'python3'
    /**
     *
     * hash extra paths should be an array of objects that are formatted w/ the
     * [doc string](./src/utils/package.py#L1438)
     *
     */
    const hash_extra_paths =
        isString(src_path) && isFile(src_path)
            ? `\${md5(file(${src_path}))}`
            : `\${sha1(join("", [for f in fileset(\"${src_path}\", "**"): filesha1(f)]))}`

    return {
        data: {
            external: {
                program: [python, builder, 'prepare'],
                query: {
                    paths: JSON.stringify({
                        module: '${path.module}',
                        root: '${path.root}',
                        cwd: '${path.cwd}',
                    }),
                    docker: isEmpty(docker)
                        ? null
                        : JSON.stringify({
                              docker_pip_cache: pip_cache,
                              docker_build_root: root,
                              docker_file: dockerfile,
                              docker_image: image,
                              with_ssh_agent,
                              docker_additional_options: additional_options,
                              docker_entrypoint: entrypoint,
                          }),
                    artifacts_dir,
                    runtime,
                    source_path: src_path,
                    /**
                     * The string to add into hashing function.
                     * Useful when building same source path for different functions.
                     */
                    hash_extra: '', // FIXME
                    /**
                     *
                     * Temporary fix when building from multiple locations. We should
                     * take into account content of package.py when counting hash
                     * Related issue:
                     * https://github.com/terraform-aws-modules/terraform-aws-lambda/issues/63
                     * "${path.module}/package.py"
                     */
                    hash_extra_paths: JSON.stringify([]),
                    recreate_missing_package: recreate,
                },
                result: {
                    build_plan: '-->',
                    build_plan_filename: '-->',
                    filename: '-->',
                    timestamp: '-->',
                },
            },
        },
    }
}

/**
 * This transitive resource used as a bridge between a state stored in a
 * Terraform plan and a call of a build command on the apply stage to transfer a
 * noticeable amount of data
 */
const archive_plan = ({ build_plan, build_plan_filename }): AWS => {
    return {
        resource: {
            local_file: {
                content: build_plan,
                filename: build_plan_filename,
                directory_permission: '0755',
                file_permission: '0644',
            },
            export: '-->local_file',
        },
    }
}

/**
 * Build the zip archive whenever the filename changes.
 *
 * FIXME: this shouldn't be used for dockerized lambdas
 *
 */
const archive = ({
    filename,
    build_plan_filename,
    builder = '${path.root}/src/utils/package.py',
    depends_on,
    timestamp,
}): AWS => {
    return {
        resource: {
            null_resource: {
                triggers: {
                    filename,
                    timestamp,
                },
                provisioner: {
                    'local-exec': {
                        interpreter: [
                            python,
                            builder,
                            'build',
                            ...(timestamp ? ['--timestamp', timestamp] : []),
                        ],
                        command: build_plan_filename,
                    },
                },
                ...(depends_on ? { depends_on } : {}),
                //depends_on: ['local_file.$SCOPE_archive_plan'],
            },
            export: '-->null_resource',
        },
    }
}

/**
 *
 * Pulls a Docker image to a given Docker host from a Docker Registry. This
 * resource will not pull new layers of the image automatically unless used in
 * conjunction with docker_registry_image data source to update the
 * pull_triggers field.
 *
 */
const image = ({
    img_name,
    platform,
    src_path = '${path.root}/src/docker',
    dockerfile = 'Dockerfile',
    build_args = {},
}) => {
    return {
        resource: {
            docker_image: {
                name: `-->${img_name}`,
                build: {
                    dockerfile,
                    context: src_path,
                    build_args,
                    ...(platform ? { platform } : {}),
                },
            },
        },
    }
}

/**
 *
 * Manages the lifecycle of docker image in a registry. You can upload images to
 * a registry (= docker push) and also delete them again
 *
 */
const registry_image = ({ img_name, keep_remotely = false }) => ({
    resource: {
        docker_registry_image: {
            name: `-->${img_name}`,
            keep_remotely,
        },
    },
})

interface DockerOptOmissions {
    root: string
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface DockerOptions extends Omit<DockerOpts, keyof DockerOptOmissions> {
    /** A map of Docker build arguments. */
    build_args?: object
    /** Set platform if server is multi-platform capable */
    platform?: string
    /** ECR repository for image */
    repo?: string
}
interface Dockerize extends Prepare {
    name: string
    /** Needed for building containerized lambdas. */
    docker?: DockerOptions
}

interface Output {
    auth?: AWS
    prepare?: AWS
    archive?: AWS
    archive_plan?: AWS
    image?: any
    registry_image?: any
    provider?: any
}

const addressEcr = ({ account_id, region }) => {
    const address = `${account_id}.dkr.ecr.${region}.amazonaws.com`
    //console.log('addressEcr:', address)
    return address
}

const nameEcrImage = ({ address, repo, tag }) => {
    const image = `${address}/${repo}:${tag}`
    //console.log('nameEcrImage:', image)
    return image
}

const auth: AWS = {
    data: {
        region: {
            name: '-->',
        },
        caller_identity: {
            account_id: '-->',
        },
        ecr_authorization_token: {
            user_name: '-->',
            password: '-->',
        },
    },
}

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
export const build = (
    {
        name,
        src_path,
        runtime = 'python3.8',
        artifacts_dir = 'builds',
        docker = {},
        builder = '${path.root}/src/utils/package.py',
        recreate = true,
    }: Dockerize,
    my: Output
): Output => {
    const address = !isEmpty(docker)
        ? addressEcr({
              account_id: my?.auth?.data?.caller_identity?.account_id,
              region: my?.auth?.data?.region?.name,
          })
        : null
    const { build_args, platform, repo, ...rest } = docker
    const img_name = address
        ? nameEcrImage({
              address,
              repo,
              tag: name,
          })
        : null

    const docker_config = {
        ...rest,
        ...(img_name ? { image: img_name } : {}),
        root: src_path,
    } as DockerOpts

    return {
        prepare: prepare({
            src_path,
            runtime,
            artifacts_dir,
            docker: !isEmpty(docker) ? docker_config : undefined,
            builder,
            recreate,
        }),
        archive_plan: archive_plan({
            build_plan: my?.prepare?.data?.external?.result?.build_plan,
            build_plan_filename: my?.prepare?.data?.external?.result?.build_plan_filename,
        }),
        archive: archive({
            build_plan_filename: my?.prepare?.data?.external?.result?.build_plan_filename,
            timestamp: my?.prepare?.data?.external?.result?.timestamp,
            filename: my?.prepare?.data?.external?.result?.filename,
            depends_on: [my?.archive_plan?.resource?.export],
            builder,
        }),
        ...(isEmpty(docker)
            ? {}
            : {
                  auth,
                  image: image({
                      img_name,
                      src_path,
                      dockerfile: docker.dockerfile,
                      build_args,
                      platform,
                  }),
                  registry_image: registry_image({
                      // creates an explicit dependency on the docker image
                      img_name: my?.image?.resource?.docker_image?.name,
                      keep_remotely: false,
                  }),
                  provider: [
                      {
                          docker: {
                              registry_auth: {
                                  address,
                                  username: my?.auth?.data?.ecr_authorization_token?.user_name,
                                  password: my?.auth?.data?.ecr_authorization_token?.password,
                              },
                          },
                      },
                  ],
              }),
    }
}

//    d8                  888
//  _d88__  e88~-_   e88~\888  e88~-_
//   888   d888   i d888  888 d888   i
//   888   8888   | 8888  888 8888   |
//   888   Y888   ' Y888  888 Y888   '
//   "88_/  "88_-~   "88_/888  "88_-~

/**
 * recursive directory walker that returns an array of files
 */
const getFileInDirectory = (path: string) => {
    const files = fs.readdirSync(path)
    const allFiles: string[] = []
    for (const file of files) {
        const fullPath = `${path}/${file}`
        if (fs.lstatSync(fullPath).isDirectory()) {
            allFiles.push(...getFileInDirectory(fullPath))
        } else {
            allFiles.push(fullPath)
        }
    }
    return allFiles
}

// requires null provider
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
