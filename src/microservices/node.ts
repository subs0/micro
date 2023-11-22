import { namespace } from '../config'
import { isPlainObject } from '@thi.ng/checks'
import { Omit } from '../constants'
import { IApi, apiModule } from '../modules/api'
import { ILambdaFn, lambdaModule } from '../modules/lambda'
import { ecrRepoModule } from '../modules/ecr'
import { buildModule } from '../modules/build'

//                          888
//  888-~88e  e88~-_   e88~\888  e88~~8e
//  888  888 d888   i d888  888 d888  88b
//  888  888 8888   | 8888  888 8888__888
//  888  888 Y888   ' Y888  888 Y888    ,
//  888  888  "88_-~   "88_/888  "88___/

interface ApiOmissions {
   subdomainRoutes: object
   tags: string
}

interface IApiRoute extends Omit<IApi, keyof ApiOmissions> {
   subdomain: string
   routes: {
      [key: string]: {
         invoke_arn: string
         function_arn: string
      }
   }
}

interface LambdaOmissions {
   file_path: string
   role_arn: string
   log_group_name: string
   depends_on: string[]
}

export interface INode extends Omit<ILambdaFn, keyof LambdaOmissions> {
   /** creds that grants lambda permissions to s3, sns, api */
   creds: object
   /** path to source code directory (default: '${path.root}/src') */
   src_path?: string
   /** path to package.py (default: '${path.root}package.py') */
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
   /** IAM role ARN */
   role_arn: string
   s3?: any
}

export const Node = ({
   name,
   tags,
   api,
   architectures = ['x86_64'],
   src_path = '${path.root}/src',
   artifacts_dir = '${path.root}/builds',
   package_py = '${path.root}package.py',
   memory_size = 512,
   env_vars = {},
   handler = 'index.handler',
   runtime = 'python3.11',
   tmp_storage = 1024,
   timeout = 60,
   role_arn,
   bucket_env,
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
      architectures,
      env_vars,
      timeout,
      role_arn: `<--${role_arn}`,
      bucket_env,
      tmp_storage,
      ...(!docker ? { handler, runtime } : {}),
      sns,
      tags,
   })

   //console.log(JSON.stringify({ LAMBDA, LAMBDA_REFS }, null, 3))

   const functionInvokeArn = LAMBDA_REFS?.function?.resource?.lambda_function?.invoke_arn
   const functionArn = LAMBDA_REFS?.function?.resource?.lambda_function?.arn
   //const functionName = LAMBDA_REFS?.function?.resource?.lambda_function?.function_name

   const endpoints = api
      ? Object.entries(api).reduce((acc, cur) => {
           const [subdomain, config] = cur
           const { apex, routes, zone_id } = config
           const [API] = apiModule({
              apex: apex,
              zone_id,
              subdomainRoutes: {
                 [subdomain]: Object.entries(routes).reduce((a, c) => {
                    const [route, currently_unused_route_config] = c
                    return {
                       ...a,
                       [route]: {
                          invoke_arn: functionInvokeArn,
                          function_arn: functionArn,
                       },
                    }
                 }, {}),
              },
              tags,
           })

           return {
              ...acc,
              [subdomain]: API,
           }
        }, {})
      : null

   //console.log({ endpoint, ECR_REPO, LAMBDA, build })
   const nodeNamespace = {
      ...(endpoints ? endpoints : {}),
      ...(docker ? { ECR_REPO } : {}),
      //ROLE,
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
