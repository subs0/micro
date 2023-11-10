import { modulate } from '../config';
import { isFile, isEmpty } from '../utils/index';
import { isString } from '@thi.ng/checks';
import fs from 'fs';
/**
 * Generates a filename for the zip archive based on the content of the files in
 * src_path. The filename will change when the source code changes.
 */
const python = '${(substr(pathexpand("~"), 0, 1) == "/") ? "python3" : "python.exe"}';
/**
 *
 * Generates a filename for the zip archive based on the content of the files
 * in source_path. The filename will change when the source code changes.
 *
 */
const prepare = ({ src_path, runtime = 'python3.8', artifacts_dir = 'builds', docker = {}, builder = '${path.root}/src/utils/package.py', recreate = true, }) => {
    const { pip_cache = null, root, dockerfile = 'Dockerfile', image, with_ssh_agent = false, 
    /**
     * Additional options to pass to the docker run command (e.g. to set
     * environment variables, volumes, etc.)
     */
    additional_options = [], entrypoint = null, } = docker;
    //const run = 'python3'
    /**
     *
     * hash extra paths should be an array of objects that are formatted w/ the
     * [doc string](./src/utils/package.py#L1438)
     *
     */
    const hash_extra_paths = isString(src_path) && isFile(src_path)
        ? `\${md5(file(${src_path}))}`
        : `\${sha1(join("", [for f in fileset(\"${src_path}\", "**"): filesha1(f)]))}`;
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
                    hash_extra: '',
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
    };
};
/**
 * This transitive resource used as a bridge between a state stored in a
 * Terraform plan and a call of a build command on the apply stage to transfer a
 * noticeable amount of data
 */
const archive_plan = ({ build_plan, build_plan_filename }) => {
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
    };
};
/**
 * Build the zip archive whenever the filename changes.
 *
 * FIXME: this shouldn't be used for dockerized lambdas
 *
 */
const archive = ({ filename, build_plan_filename, builder = '${path.root}/src/utils/package.py', depends_on, timestamp, }) => {
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
            },
            export: '-->null_resource',
        },
    };
};
/**
 *
 * Pulls a Docker image to a given Docker host from a Docker Registry. This
 * resource will not pull new layers of the image automatically unless used in
 * conjunction with docker_registry_image data source to update the
 * pull_triggers field.
 *
 */
const image = ({ img_name, platform, src_path = '${path.root}/src/docker', dockerfile = 'Dockerfile', build_args, depends_on = null, }) => {
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
                ...(depends_on ? { depends_on } : {}),
            },
        },
    };
};
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
        export: '-->docker_registry_image',
    },
});
const sam_metadata = ({ src_path, dockerfile, build_args, img_tag, registry_image_name, depends_on = null, }) => ({
    resource: {
        null_resource: {
            triggers: {
                resource_type: 'IMAGE_LAMBDA_FUNCTION',
                docker_context: src_path,
                docker_file: dockerfile,
                docker_build_args: JSON.stringify(build_args),
                docker_tag: img_tag,
                built_image_uri: registry_image_name,
            },
            ...(depends_on ? { depends_on } : {}),
        },
    },
});
const addressEcr = ({ account_id, region }) => {
    const address = `${account_id}.dkr.ecr.${region}.amazonaws.com`;
    //console.log('addressEcr:', address)
    return address;
};
const nameEcrImage = ({ address, repo, tag }) => {
    const image = `${address}/${repo}:${tag}`;
    //console.log('nameEcrImage:', image)
    return image;
};
const auth = {
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
};
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
export const build = ({ name, src_path, runtime = 'python3.8', artifacts_dir = 'builds', docker = {}, builder = '${path.root}/src/utils/package.py', recreate = true, }, my) => {
    const address = !isEmpty(docker)
        ? addressEcr({
            account_id: my?.auth?.data?.caller_identity?.account_id,
            region: my?.auth?.data?.region?.name,
        })
        : null;
    const { build_args, platform, dockerfile, repo, ...rest } = docker;
    const img_name = address
        ? nameEcrImage({
            address,
            repo,
            tag: name,
        })
        : null;
    const docker_config = {
        dockerfile,
        ...rest,
        ...(img_name ? { image: img_name } : {}),
        root: src_path,
    };
    return {
        prepare: prepare({
            src_path,
            runtime,
            artifacts_dir,
            docker: !isEmpty(docker) ? docker_config : undefined,
            builder,
            recreate,
        }),
        ...(isEmpty(docker)
            ? {
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
            }
            : {
                auth,
                image: image({
                    img_name,
                    src_path,
                    dockerfile,
                    build_args,
                    platform,
                }),
                registry_image: registry_image({
                    // creates an explicit dependency on the docker image
                    img_name: my?.image?.resource?.docker_image?.name,
                    keep_remotely: false,
                }),
                sam_metadata: sam_metadata({
                    build_args,
                    dockerfile,
                    img_tag: name,
                    registry_image_name: my?.registry_image?.resource?.docker_registry_image?.name,
                    src_path,
                }),
                provider: {
                    docker: {
                        registry_auth: {
                            address,
                            username: my?.auth?.data?.ecr_authorization_token?.user_name,
                            password: my?.auth?.data?.ecr_authorization_token?.password,
                        },
                    },
                },
            }),
    };
};
export const buildModule = (opts) => modulate({ build }, ['docker_image', 'docker_registry_image'])(opts);
//    d8                  888
//  _d88__  e88~-_   e88~\888  e88~-_
//   888   d888   i d888  888 d888   i
//   888   8888   | 8888  888 8888   |
//   888   Y888   ' Y888  888 Y888   '
//   "88_/  "88_-~   "88_/888  "88_-~
/**
 * recursive directory walker that returns an array of files
 */
const getFileInDirectory = (path) => {
    const files = fs.readdirSync(path);
    const allFiles = [];
    for (const file of files) {
        const fullPath = `${path}/${file}`;
        if (fs.lstatSync(fullPath).isDirectory()) {
            allFiles.push(...getFileInDirectory(fullPath));
        }
        else {
            allFiles.push(fullPath);
        }
    }
    return allFiles;
};
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
});
/*

 Error: local-exec provisioner error

   with null_resource.merged_test2_build_archive,
   on example.tf.json line 301, in resource.null_resource.merged_test2_build_archive.provisioner.local-exec:
  301:                     }

 Error running command './builds/cfd10697266685d3fe46f1512f9b434a866d1c3089ba6de29cf2adeb675970cc.plan.json': exit status 1.
 
 Output: zip: creating
 './builds/cfd10697266685d3fe46f1512f9b434a866d1c3089ba6de29cf2adeb675970cc.zip' archive
 
 > docker images '--format={{.ID}}' 477330550029.dkr.ecr.us-east-2.amazonaws.com/test2:test2
 > docker build --tag 477330550029.dkr.ecr.us-east-2.amazonaws.com/test2:test2 --file Dockerfile ./src/docker
 #0 building with "desktop-linux" instance using docker driver

 #1 [internal] load build definition from Dockerfile
 #1 transferring dockerfile: 2B done
 #1 DONE 0.0s

 #2 [internal] load .dockerignore
 #2 transferring context: 2B done
 #2 DONE 0.0s
 ERROR: failed to solve: failed to read dockerfile: open /var/lib/docker/tmp/buildkit-mount754224550/Dockerfile: no such file or directory
 zip: Error during zip archive creation
 Traceback (most recent call last):
   File "/Users/logan.powell/Documents/@-0/micro/./src/utils/package.py", line 1525, in build_command
     bpm.execute(build_plan, zs, query)
   File "/Users/logan.powell/Documents/@-0/micro/./src/utils/package.py", line 861, in execute
     with install_pip_requirements(query, pip_requirements, tmp_dir) as rd:
   File "/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/contextlib.py", line 137, in __enter__
     return next(self.gen)
            ^^^^^^^^^^^^^^
   File "/Users/logan.powell/Documents/@-0/micro/./src/utils/package.py", line 956, in install_pip_requirements
     check_call(docker_cmd)
   File "/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/subprocess.py", line 413, in check_call
     raise CalledProcessError(retcode, cmd)
 subprocess.CalledProcessError: Command '['docker', 'build', '--tag', '477330550029.dkr.ecr.us-east-2.amazonaws.com/test2:test2', '--file', 'Dockerfile', './src/docker']' returned
 non-zero exit status 1.


*/
//# sourceMappingURL=build.js.map