import { namespace } from '../config';
import { isPlainObject } from '@thi.ng/checks';
import { apiModule, ecrRepoModule, lambdaModule, buildModule, } from '../modules/index';
export const Node = ({ name, tags, api, architectures = ['x86_64'], src_path = '${path.root}/src', artifacts_dir = '${path.root}/builds', package_py = '${path.root}package.py', memory_size = 512, env_vars = {}, handler = 'index.handler', runtime = 'python3.11', tmp_storage = 1024, timeout = 60, bucket = true, sns, docker, }) => {
    const [ECR_REPO, ECR_REPO_REFS] = ecrRepoModule({ name, tags });
    const repo_name = ECR_REPO_REFS?.ecr_repo?.resource?.ecr_repository?.name;
    let file_path = '';
    let archive = '';
    let build = {};
    if (docker) {
        const docker_defaults = {
            platform: 'linux/arm64',
            dockerfile: 'Dockerfile',
            repo: repo_name,
        };
        const docker_opts = isPlainObject(docker)
            ? {
                ...docker_defaults,
                ...docker,
            }
            : docker_defaults;
        const [BUILD, BUILD_REFS] = buildModule({
            name,
            src_path,
            runtime,
            artifacts_dir,
            builder: package_py,
            docker: docker_opts,
        });
        build = BUILD;
        file_path = BUILD_REFS?.registry_image?.resource?.docker_registry_image?.name;
        archive = BUILD_REFS?.archive?.resource?.export;
    }
    else {
        const [BUILD, BUILD_REFS] = buildModule({
            name,
            src_path,
            runtime,
            artifacts_dir,
            builder: package_py,
        });
        build = BUILD;
        file_path = BUILD_REFS?.prepare?.data?.external?.result?.filename;
        archive = BUILD_REFS?.archive?.resource?.export;
    }
    const [LAMBDA, LAMBDA_REFS] = lambdaModule({
        name,
        file_path,
        depends_on: [archive],
        memory_size,
        architectures,
        env_vars,
        timeout,
        bucket,
        tmp_storage,
        ...(!docker ? { handler, runtime } : {}),
        sns,
        tags,
    });
    //console.log({ LAMBDA, LAMBDA_REFS })
    const functionInvokeArn = LAMBDA_REFS?.function?.resource?.lambda_function?.invoke_arn;
    const functionArn = LAMBDA_REFS?.function?.resource?.lambda_function?.arn;
    //const functionName = LAMBDA_REFS?.function?.resource?.lambda_function?.function_name
    let endpoint = {};
    if (api) {
        const { apex, subdomain, routes, zone_id } = api;
        const [API] = apiModule({
            apex: apex,
            zone_id,
            subdomainRoutes: {
                [subdomain]: Object.entries(routes).reduce((a, c) => {
                    const [route, config] = c;
                    return {
                        ...a,
                        [route]: {
                            invoke_arn: functionInvokeArn,
                            function_arn: functionArn,
                        },
                    };
                }, {}),
            },
            tags,
        });
        endpoint = API;
    }
    //console.log({ endpoint, ECR_REPO, LAMBDA, build })
    const nodeNamespace = {
        ...(api ? { endpoint } : {}),
        ...(docker ? { ECR_REPO } : {}),
        build,
        LAMBDA,
    };
    return namespace({ [name]: nodeNamespace });
};
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
//# sourceMappingURL=node.js.map