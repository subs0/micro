import { Omit } from 'src/constants';
import { IApi, ILambdaFn } from '../modules/index';
interface ApiOmissions {
    subdomainRoutes: object;
    tags: string;
}
interface IApiRoute extends Omit<IApi, keyof ApiOmissions> {
    subdomain: string;
    methods: string[];
}
interface LambdaOmissions {
    file_path: string;
    role_arn: string;
    log_group_name: string;
    depends_on: string[];
    architectures: string[];
}
interface INode extends Omit<ILambdaFn, keyof LambdaOmissions> {
    /** path to source code directory (default: '${path.root}/src') */
    src_path?: string;
    /** path to package.py (default: '${path.root}/src/utils/package.py') */
    package_py?: string;
    /** path to build artifacts directory (default: '${path.root}/builds') */
    artifacts_dir?: string;
    /** if provided, will create an api gateway */
    api?: IApiRoute;
    docker?: {
        /** name of ecr repo */
        repo?: string;
        /** default: 'Dockerfile' (root): location of Dockerfile within src_path dir */
        dockerfile?: string;
        /** options: linux/amd64 (default) linux/arm64 */
        platform?: string;
    } | boolean;
}
export declare const Node: ({ name, tags, api, src_path, artifacts_dir, package_py, memory_size, env_vars, handler, runtime, tmp_storage, timeout, bucket, sns, docker, }: INode) => any;
export {};
/**
 * TODO
 * - add compiler step to `namespace` to test reference paths into final output
 *   to warn for references that do not exist in the output terraform json
 *   payload, for example (string interpolation refs -> path -> check) error if
 *   path produces no output (use `warn`)
 *   - "did you forget to hoist this resource?"
 *   - "did you forget to add the resource to the module/namespace?"
 * - pull route53 zone out of lambda (shared)?
 */
//# sourceMappingURL=node.d.ts.map