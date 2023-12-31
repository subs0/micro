import { AWS05200, AWS05210 } from '../registry'

type AwsVersion = AWS05200

export const PIVOT_POINTS = ['resource', 'data', 'locals']
export const ROOT_MEMBERS = ['provider', 'terraform']
export const GLOBALS = ['null_resource', 'external', 'local_file', 'random_pet']


interface MessageAttributes {
   /** key (name) can contain the following characters: A-Z, a-z, 0-9, underscore(_), hyphen(-), and period (.) */
   [key: string]: {
      /** Can be: 'String', 'Number', 'Binary', or 'String.Array' (which can contain strings, numbers, true, false, and null) */
      DataType: string
      StringValue?: any[] | any
   }
}

export interface SharedResource {
   /** the name of the resource */
   name: string
   /** the lambda to which the configuration applies */
   lambda: string
   /** any reference value ("${resource...}") */
   ref: string
   /** "sns", "s3", "cloudwatch" currently supported */
   type: string
   /** actions allowed by the policy */
   actions: string[]
   role_arn?: string
   /** See [Examples in Docs](https://docs.aws.amazon.com/sns/latest/dg/example-filter-policies.html) */
   filter_policy?: { [key: string]: any[] }
   /** Message Attribute keys (names) cannot start with `AWS.` or `Amazon.` See [Docs](https://docs.aws.amazon.com/sns/latest/dg/sns-publishing.html) for more info. */
   message_attrs?: MessageAttributes
   retention_in_days?: number
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type RecursivePartial<T> = {
   [P in keyof T]?: T[P] extends (infer U)[]
      ? RecursivePartial<U>[]
      : T[P] extends object | undefined
      ? RecursivePartial<T[P]>
      : T[P]
}

export const flag = { BroughtToYouBy: '@-0/micro' }

export type NestedObject = { [key: string]: NestedObject }

export interface IProvider {
   provider: {
      [key: string]: {
         region: string
         profile?: string
         alias?: string
      }
   }
}

export interface ITerraform {
   terraform: {
      required_providers: {
         [key: string]: {
            source: string
            version: string
         }
      }
   }
}

//       e      Y88b         / ,d88~~\
//      d8b      Y88b       /  8888
//     /Y88b      Y88b  e  /   `Y88b
//    /  Y88b      Y88bd8b/     `Y88b,
//   /____Y88b      Y88Y8Y        8888
//  /      Y88b      Y  Y      \__88P'

export interface AWS extends AwsVersion {
   data?: Datums
   resource?: Resources
}

//        888             d8
//   e88~\888   /~~~8e  _d88__   /~~~8e
//  d888  888       88b  888         88b
//  8888  888  e88~-888  888    e88~-888
//  Y888  888 C888  888  888   C888  888
//   "88_/888  "88_-888  "88_/  "88_-888

/**
 * The following type customizations provide an example of how to modify a block
 * to allow for Array values in addition to default interfaces...
 *
 * reference blog [1]
 */
type Data = NonNullable<AwsVersion['data']>

// Allow IAM Policy Document to be an array of statements
type IamPolicyDoc = NonNullable<Data['iam_policy_document']>

export type Statement = NonNullable<IamPolicyDoc['statement']>

export interface Statements extends Statement {
   [index: number]: Statement
}

interface IamPolicyDocs extends IamPolicyDoc {
   statement?: Statement | Statements
}

export interface Datums extends Data {
   iam_policy_document?: IamPolicyDocs
   external?: RecursivePartial<typeof externalEx>
   // for depends_on --><resource type>
   export?: string
}

//  888-~\  e88~~8e   d88~\  e88~-_  888  888 888-~\  e88~~\  e88~~8e
//  888    d888  88b C888   d888   i 888  888 888    d888    d888  88b
//  888    8888__888  Y88b  8888   | 888  888 888    8888    8888__888
//  888    Y888    ,   888D Y888   ' 888  888 888    Y888    Y888    ,
//  888     "88___/  \_88P   "88_-~  "88_-888 888     "88__/  "88___/

type Resource = NonNullable<AwsVersion['resource']>

// Convert ACM Certificate Domain Validation Options from a Set (tf) to an array of one member
type AcmCertificate = NonNullable<Resource['acm_certificate']>

type DomainValidationOptions = NonNullable<AcmCertificate['domain_validation_options']>

interface ValidationOptions extends DomainValidationOptions {
   [index: number]: DomainValidationOptions
}

interface AcmCertificates extends AcmCertificate {
   domain_validation_options?: DomainValidationOptions | ValidationOptions
}

type ApiGw2DomainName = NonNullable<Resource['apigatewayv2_domain_name']>

type DomainNameConfiguration = NonNullable<ApiGw2DomainName['domain_name_configuration']>

// Allows API Gateway Domain Name Configuration to an array of one member
interface DomainNameConfigurations extends DomainNameConfiguration {
   [index: number]: DomainNameConfiguration
}

interface ApiGw2DomainNames extends ApiGw2DomainName {
   domain_name_configuration: DomainNameConfigurations | DomainNameConfiguration
}

export interface Resources extends Resource {
   acm_certificate?: AcmCertificates
   apigatewayv2_domain_name?: ApiGw2DomainNames
   local_file?: Partial<typeof localFileEx>
   null_resource?: RecursivePartial<typeof nullResourceEx>
   export?: string
   random_pet?: {
      id: string
   }
}

//        888                                      ,e,
//   e88~\888 888  888 888-~88e-~88e 888-~88e-~88e  "   e88~~8e   d88~\
//  d888  888 888  888 888  888  888 888  888  888 888 d888  88b C888
//  8888  888 888  888 888  888  888 888  888  888 888 8888__888  Y88b
//  Y888  888 888  888 888  888  888 888  888  888 888 Y888    ,   888D
//   "88_/888 "88_-888 888  888  888 888  888  888 888  "88___/  \_88P

const dumtest = !!''
const externalEx = {
   program: ['prepare'],
   query: {
      paths: JSON.stringify({
         module: '${path.module}',
         root: '${path.root}',
         cwd: '${path.cwd}',
      }),
      docker: dumtest
         ? JSON.stringify({
              docker_pip_cache: 'pip_cache',
              docker_build_root: 'build_root',
              docker_file: 'filepath',
              docker_image: 'image',
              with_ssh_agent: true,
              docker_additional_options: ['additional_options'],
              docker_entrypoint: 'entrypoint',
           })
         : null,
      artifacts_dir: '',
      runtime: '',
      source_path: '' ? [{ poetry_install: true ? true : undefined }, {}] : '',
      hash_extra: '',
      hash_extra_paths: JSON.stringify([]),
      recreate_missing_package: true,
   },
   result: {
      build_plan: '-->',
      build_plan_filename: '-->',
      filename: '-->',
      timestamp: '-->',
   },
}

const localFileEx = {
   content: 'build_plan',
   filename: 'build_file_name',
   directory_permission: '0755',
   file_permission: '0644',
}

const nullResourceEx = {
   triggers: {
      filename: 'file_path',
      timestamp: 'timestamp',
   },
   provisioner: {
      'local-exec': {
         interpreter: ['python', './src/package.py', 'build', '--timestamp', ''],
         command: 'build_plan_filename',
      },
   },
   depends_on: ['local_file.build_plan'],
}
