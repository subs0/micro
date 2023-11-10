import { namespace } from '../config'
import { isPlainObject } from '@thi.ng/checks'
import { Omit } from 'src/constants'
import {
    IApi,
    ILambdaFn,
    apiModule,
    ecrRepoModule,
    lambdaModule,
    buildModule,
} from '../modules/index'

interface ApiOmissions {
    subdomainRoutes: object
    tags: string
}

interface IApiRoute extends Omit<IApi, keyof ApiOmissions> {
    subdomain: string
    methods: string[]
}

interface LambdaOmissions {
    file_path: string
    role_arn: string
    log_group_name: string
    depends_on: string[]
    architectures: string[]
}

interface INode extends Omit<ILambdaFn, keyof LambdaOmissions> {
    /** path to source code directory (default: '${path.root}/src') */
    src_path?: string
    /** path to package.py (default: '${path.root}/src/utils/package.py') */
    package_py?: string
    /** path to build artifacts directory (default: '${path.root}/builds') */
    artifacts_dir?: string
    /** if provided, will create an api gateway */
    api?: IApiRoute
    docker?:
        | {
              /** name of ecr repo */
              repo?: string
              /** default: 'Dockerfile' (root): location of Dockerfile within src_path dir */
              dockerfile?: string
              /** options: linux/amd64 (default) linux/arm64 */
              platform?: string
          }
        | boolean
}

export const Node = ({
    name,
    tags,
    api,
    src_path = '${path.root}/src',
    artifacts_dir = '${path.root}/builds',
    package_py = '${path.root}/src/utils/package.py',
    memory_size = 512,
    env_vars = {},
    handler = 'index.handler',
    runtime = 'python3.11',
    tmp_storage = 1024,
    timeout = 60,
    bucket = true,
    sns,
    docker,
}: INode) => {
    const [ECR_REPO, ECR_REPO_REFS] = ecrRepoModule({ name, tags })
    const repo_name = ECR_REPO_REFS?.ecr_repo?.resource?.ecr_repository?.name

    let file_path = ''
    let archive = ''
    let build = {}

    if (docker) {
        const docker_defaults = {
            platform: 'linux/arm64',
            dockerfile: 'Dockerfile',
            repo: repo_name,
        }

        const docker_opts = isPlainObject(docker)
            ? {
                  ...docker_defaults,
                  ...docker,
              }
            : docker_defaults
        const [BUILD, BUILD_REFS] = buildModule({
            name,
            src_path,
            runtime,
            artifacts_dir,
            builder: package_py,
            docker: docker_opts,
        })

        build = BUILD
        file_path = BUILD_REFS?.registry_image?.resource?.docker_registry_image?.name
        archive = BUILD_REFS?.archive?.resource?.export as string
    } else {
        const [BUILD, BUILD_REFS] = buildModule({
            name,
            src_path,
            runtime,
            artifacts_dir,
            builder: package_py,
        })

        build = BUILD
        file_path = BUILD_REFS?.prepare?.data?.external?.result?.filename as string
        archive = BUILD_REFS?.archive?.resource?.export as string
    }

    const [LAMBDA, LAMBDA_REFS] = lambdaModule({
        name,
        file_path,
        depends_on: [archive],
        memory_size,
        architectures: docker ? ['arm64'] : ['x86_64'],
        env_vars,
        timeout,
        bucket,
        tmp_storage,
        ...(!docker ? { handler, runtime } : {}),
        sns,
        tags,
    })

    const functionInvokeArn = LAMBDA_REFS?.function?.resource?.lambda_function?.invoke_arn
    const functionArn = LAMBDA_REFS?.function?.resource?.lambda_function?.arn
    //const functionName = LAMBDA_REFS?.function?.resource?.lambda_function?.function_name

    let endpoint = {}

    if (api) {
        const { apex, subdomain, methods, zone_id } = api

        const [API] = apiModule({
            apex: apex,
            zone_id,
            subdomainRoutes: {
                [subdomain]: methods.reduce(
                    (a, c) => ({
                        ...a,
                        [`${c} /`]: {
                            invoke_arn: functionInvokeArn,
                            function_arn: functionArn,
                        },
                    }),
                    {}
                ),
            },
            tags,
        })
        endpoint = API
    }

    const nodeNamespace = {
        ...(api ? { endpoint } : {}),
        ...(docker ? { ECR_REPO } : {}),
        build,
        LAMBDA,
    }

    return namespace({ [name]: nodeNamespace })
}

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
