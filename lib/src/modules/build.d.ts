import { AWS } from '../constants';
interface DockerOpts {
    /** Whether to mount a shared pip cache dir into docker env */
    pip_cache?: string;
    /** A docker build root folder */
    root?: string;
    /** Path to a Dockerfile when building in Docker */
    dockerfile?: string;
    /** Docker image (name w/qualifiers) to use for the build */
    image?: string;
    /** Whether to pass SSH_AUTH_SOCK into docker env */
    with_ssh_agent?: boolean;
    /** Additional options to pass to the docker run command (e.g. to set environment variables, volumes, etc.) */
    additional_options?: string[];
    /** Path to a Docker --entrypoint to use */
    entrypoint?: string;
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
    src_path: string;
    /** python3.x, nodejs18.x, etc. */
    runtime?: string;
    /** Directory name where artifacts should be stored */
    artifacts_dir?: string;
    /** path to packager (package.py) */
    builder?: string;
    /** Whether to recreate Lambda package if it is missing locally or not */
    recreate?: boolean;
    docker?: DockerOpts;
}
interface DockerOptOmissions {
    root: string;
}
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
interface DockerOptions extends Omit<DockerOpts, keyof DockerOptOmissions> {
    /** A map of Docker build arguments. */
    build_args?: object;
    /** Set platform if server is multi-platform capable */
    platform?: string;
    /** ECR repository for image */
    repo?: string;
}
interface IBuilder extends Prepare {
    name: string;
    /** Needed for building containerized lambdas. */
    docker?: DockerOptions;
}
interface Output {
    auth?: AWS;
    prepare?: AWS;
    archive?: AWS;
    archive_plan?: AWS;
    image?: any;
    registry_image?: any;
    provider?: any;
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
export declare const build: ({ name, src_path, runtime, artifacts_dir, docker, builder, recreate, }: IBuilder, my: Output) => Output;
export declare const buildModule: (opts: IBuilder) => [Output, Output];
export {};
//# sourceMappingURL=build.d.ts.map