import { Omit } from 'src/types';
import { IApi, ILambda } from '../modules/index';
interface ApiOmissions {
    subdomainRoutes: object;
    zone_id: string;
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
interface INode extends Omit<ILambda, keyof LambdaOmissions> {
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
export declare const node: ({ name, tags, api, src_path, artifacts_dir, package_py, memory_size, env_vars, handler, runtime, tmp_storage, timeout, sns, docker, }: INode) => any;
export {};
/**
 * [reference]: https://stackoverflow.com/questions/70943739/aws-lambda-memorysize-value-failed-to-satisfy-constraint
 */
//# sourceMappingURL=node.d.ts.map