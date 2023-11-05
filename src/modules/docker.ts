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
    /** Additional options to pass to the docker run command */
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
const archive_prepare = ({
    src_path,
    runtime = 'python3.8',
    artifacts_dir = 'builds',
    docker = {},
    builder = '${path.root}/src/utils/package.py',
    recreate = true,
}: Prepare): AWS => {
    const {
        pip_cache = null,
        root = '',
        dockerfile = 'Dockerfile',
        image = '',
        with_ssh_agent = false,
        additional_options = [],
        entrypoint = null,
    } = docker

    const run = '${(substr(pathexpand("~"), 0, 1) == "/") ? "python3" : "python.exe"}'
    /**
     * FIXME hash_extra filesha1 errors...
     *
     * Error: Error in function call
     *
     * on micro.tf.json line 30, in
     * data.external.micro_docker_archive_prepare.query: 30:
     * "hash_extra": "${sha1(join(\"\", [for f in fileset(\"./src/docker\",
     * \"**\"): filesha1(f)]))}",
     *
     * Call to function "filesha1" failed: open Dockerfile: no such file or
     * directory.
     *
     *
     * Error: Error in function call
     *
     * on micro.tf.json line 30, in
     * data.external.micro_docker_archive_prepare.query: 30:
     * "hash_extra": "${sha1(join(\"\", [for f in fileset(\"./src/docker\",
     * \"**\"): filesha1(f)]))}",
     *
     * Call to function "filesha1" failed: open app.py: no such file or
     * directory.
     *
     *
     * Error: Error in function call
     *
     * on micro.tf.json line 30, in
     * data.external.micro_docker_archive_prepare.query: 30:
     * "hash_extra": "${sha1(join(\"\", [for f in fileset(\"./src/docker\",
     * \"**\"): filesha1(f)]))}",
     *
     * Call to function "filesha1" failed: open requirements.txt: no such file
     * or directory.
     *
     */
    //const hash_extra =
    //    isString(src_path) && isFile(src_path)
    //        ? `\${md5(file(${src_path}))}`
    //        : `\${sha1(join("", [for f in fileset(\"${src_path}\", "**"): filesha1(f)]))}`

    return {
        data: {
            external: {
                program: [run, builder, 'prepare'],
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
                    //hash_extra, FIXME
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
const archive_plan = ({ build_plan, build_file_name }): AWS => {
    return {
        resource: {
            local_file: {
                content: build_plan,
                filename: build_file_name,
                directory_permission: '0755',
                file_permission: '0644',
            },
        },
    }
}

/**
 * Build the zip archive whenever the filename changes.
 *
 * requires the null provider
 * ```ts
 * { required_providers: {
 *     aws: {
 *       source: 'hashicorp/aws',
 *       version: '>= 5.20',
 *     },
 *     null: {
 *       source: 'hashicorp/null',
 *       version: '>= 2.0',
 *     }
 *   }
 * }
 * ```
 */
const archive = ({
    filename,
    build_plan_filename,
    builder = '${path.root}/src/utils/package.py',
    run = 'python',
    timestamp,
}) => {
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
                            run,
                            builder,
                            'build',
                            ...(timestamp ? ['--timestamp', timestamp] : []),
                        ],
                        command: build_plan_filename,
                    },
                },
            },
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
 * requires adding the kreuzwerker/docker provider
 * ```ts
 * { required_providers: {
 *     aws: {
 *       source: 'hashicorp/aws',
 *       version: '>= 5.20',
 *     },
 *     docker: {
 *       source: 'kreuzwerker/docker',
 *       version: '>= 3.0',
 *     }
 *   }
 * }
 * ```
 *
 * @param { string } img_name - name of the image
 * @param { string } src_path - path to the source code
 * @param { string } dockerfile - path to the Dockerfile within the source path
 * @param { object } build_args - build arguments to pass to the Docker build
 * @param { string } platform - target arch platform to build for
 *
 */
const docker_img = ({
    img_name,
    platform,
    src_path = '${path.root}/src/docker',
    dockerfile = './Dockerfile',
    build_args = {},
}) => ({
    resource: {
        docker_image: {
            name: img_name,
            build: {
                dockerfile,
                context: src_path,
                build_args,
                ...(platform ? { platform } : {}),
            },
        },
    },
})

/**
 * Manages the lifecycle of docker image in a registry. You can upload images to
 * a registry (= docker push) and also delete them again
 *
 * requires adding the kreuzwerker/docker provider
 * ```ts
 * { required_providers: {
 *     aws: {
 *       source: 'hashicorp/aws',
 *       version: '>= 5.20',
 *    },
 *    docker: {
 *      source: 'kreuzwerker/docker',
 *      version: '>= 3.0',
 *    }
 *  }
 * }
 * ```
 *
 * @param { string } name - name of the image
 * @param { boolean } keep_remotely - if Docker image is kept/deleted (true/false)
 *    on `terraform destroy`
 */
const registry_img = ({ img_name, keep_remotely = false }) => ({
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
    auth: AWS
    archive_prepare: AWS
    archive_plan: AWS
    archive: AWS
    docker_img?: any
    registry_img?: any
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
export const dockerize = (
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
    const address = addressEcr({
        account_id: my?.auth?.data?.caller_identity?.account_id,
        region: my?.auth?.data?.region?.name,
    })
    const { build_args, platform, repo, ...rest } = docker
    const img_name = nameEcrImage({
        address,
        repo,
        tag: name,
    })
    const build = { ...rest, root: src_path, image: img_name } as DockerOpts
    return {
        auth,
        archive_prepare: archive_prepare({
            src_path,
            runtime,
            artifacts_dir,
            docker: build,
            builder,
            recreate,
        }),
        archive_plan: archive_plan({
            build_plan: my?.archive_prepare?.data?.external?.result?.build_plan,
            build_file_name: my?.archive_prepare?.data?.external?.result?.build_plan_filename,
        }),
        archive: archive({
            build_plan_filename: my?.archive_prepare?.data?.external?.result?.build_plan_filename,
            timestamp: my?.archive_prepare?.data?.external?.result?.timestamp,
            filename: my?.archive_prepare?.data?.external?.result?.filename,
            builder,
        }),
        ...(isEmpty(docker)
            ? {}
            : {
                  docker_img: docker_img({
                      img_name,
                      src_path,
                      dockerfile: docker.dockerfile,
                      build_args,
                      platform,
                  }),
                  registry_img: registry_img({
                      img_name,
                      keep_remotely: false,
                  }),
                  provider: [
                      // TODO: confirm application (merged with aws provider)
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
