import { Omit } from '../constants';
import { IApi } from '../modules/api';
import { ILambdaFn } from '../modules/lambda';
interface ApiOmissions {
    subdomainRoutes: object;
    tags: string;
}
interface IApiRoute extends Omit<IApi, keyof ApiOmissions> {
    subdomain: string;
    routes: {
        [key: string]: {
            invoke_arn: string;
            function_arn: string;
        };
    };
}
interface LambdaOmissions {
    file_path: string;
    role_arn: string;
    log_group_name: string;
    depends_on: string[];
}
export interface INode extends Omit<ILambdaFn, keyof LambdaOmissions> {
    /** creds that grants lambda permissions to s3, sns, api */
    creds: object;
    /** path to source code directory (default: '${path.root}/src') */
    src_path?: string;
    /** path to package.py (default: '${path.root}package.py') */
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
    /** IAM role ARN */
    role_arn: string;
    s3?: any;
}
export declare const Node: ({ name, tags, api, architectures, src_path, artifacts_dir, package_py, memory_size, env_vars, handler, runtime, tmp_storage, timeout, role_arn, bucket_env, sns, docker, }: INode) => any;
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