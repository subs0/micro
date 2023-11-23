import { modulate } from '../config'
import { AWS, flag, Omit, SharedResource } from '../constants'
import { subscription } from './sns'
import { isPlainObject } from '@thi.ng/checks'

//  888                         888             888
//  888   /~~~8e  888-~88e-~88e 888-~88e   e88~\888   /~~~8e
//  888       88b 888  888  888 888  888b d888  888       88b
//  888  e88~-888 888  888  888 888  8888 8888  888  e88~-888
//  888 C888  888 888  888  888 888  888P Y888  888 C888  888
//  888  "88_-888 888  888  888 888-_88"   "88_/888  "88_-888

export const lambdaInvokeCred = ({
   function_name,
   source_arn,
   principal = 'sns.amazonaws.com',
   statement_id = 'AllowExecutionFromSNS',
}): AWS => ({
   resource: {
      lambda_permission: {
         statement_id,
         action: 'lambda:InvokeFunction',
         function_name,
         principal,
         source_arn,
      },
   },
})

interface LambdaFunction {
   name: string
   /** can either be a path to a file or a reference to a docker image */
   file_path: string
   /** environment variables to be added to lambda */
   env_vars?: object
   /** Between 512 MB and 10,240 MB, in 1-MB increments */
   tmp_storage?: number
   /** (<filename>.<function_name> of handler) if using Docker (container) Image, this should not be set */
   handler?: string
   /** (e.g., 'python3.x' 'node18.x') if using Docker (container) Image, this should not be set */
   runtime?: string
   /** lambda role ARN */
   role_arn?: string
   /** name of cloudwatch log group */
   log_group_name?: string
   /** available [x86_64, arm64] */
   architectures?: string[]
   /**
    * Lambda functions with memory configuration greater than 3GB are currently
    * unavailable for first time use in some regions... If you urgently
    * require to use your function with memory greater than 3GB, please provide
    * your account and region details so we can expedite access internally.
    *
    * Maximum = 10GB (available in major/select regions)
    *
    * Maximum = 3GB (available in all regions)
    *
    * [Reference](https://stackoverflow.com/questions/70943739/aws-lambda-memorysize-value-failed-to-satisfy-constraint)
    */
   memory_size?: number
   /** max timeout = 900 seconds */
   timeout?: number
   package_type?: string
   tags?: object
   depends_on?: string[]
}

/**
 * TODO:
 * - build functions JIT
 *   - for zipped functions
 *     - python: use @-0/build-function-py
 *   - for container functions
 *     - use @-0/build-function-container
 */
const lambdaFunction = ({
   name,
   role_arn,
   file_path,
   env_vars = {},
   handler,
   runtime,
   package_type = 'Zip',
   tmp_storage,
   architectures = ['x86_64'],
   timeout = 60,
   memory_size = 128,
   depends_on = [],
   tags = {},
}: LambdaFunction): AWS => ({
   resource: {
      lambda_function: {
         package_type,
         ...(package_type === 'Image'
            ? { image_uri: file_path, architectures }
            : { filename: file_path, handler, runtime }),
         function_name: `-->function-${name}`,
         memory_size,
         timeout,
         ...(tmp_storage ? { ephemeral_storage: { size: tmp_storage } } : {}),
         role: role_arn,
         environment: { variables: env_vars },
         tags: { ...flag, ...tags },
         // @ts-ignore
         depends_on,
         arn: '-->',
         invoke_arn: '-->',
      },
   },
})

interface MessageAttributes {
   /** key (name) can contain the following characters: A-Z, a-z, 0-9, underscore(_), hyphen(-), and period (.) */
   [key: string]: {
      /** Can be: 'String', 'Number', 'Binary', or 'String.Array' (which can contain strings, numbers, true, false, and null) */
      DataType: string
      StringValue?: any[] | any
   }
}

interface SNSTopic {
   /** name of topic */
   name: string
   /** SNS Topic ARN */
   ref: string
   /** Message Attribute keys (names) cannot start with `AWS.` or `Amazon.` See [Docs](https://docs.aws.amazon.com/sns/latest/dg/sns-publishing.html) for more info. */
   message_attrs?: MessageAttributes
   /** See [Examples in Docs](https://docs.aws.amazon.com/sns/latest/dg/example-filter-policies.html) */
   filter_policy?: { [key: string]: any[] }
}

interface Output {
   policy_doc?: AWS
   role?: AWS
   bucket?: AWS
   bucket_access_creds?: AWS
   cloudwatch?: AWS
   access_creds?: AWS
   policy?: AWS
   policy_attachment?: AWS
   function?: AWS
   sns_invoke_cred?: AWS
   subscription?: AWS
   pet?: AWS
}

interface LambdaOmissions {
   package_type: string
}

export interface ILambdaFn extends Omit<LambdaFunction, keyof LambdaOmissions> {
   /** IAM role arn for the lambda function */
   //role_arn: string
   /** settings to attach lambda to SNS Topic */
   sns?: SharedResource[]
   /** sig: { "${resource.bucket..bucket}": [ "PutObject", "GetObject, ..." ] } */
   s3?: SharedResource[]
}

export const Lambda = (
   {
      name,
      runtime = 'python3.8',
      handler,
      file_path,
      architectures = ['x86_64'], // options are: x86_64, arm64
      memory_size = 128,
      timeout = 60,
      env_vars = {},
      tags = {},
      depends_on = [],
      tmp_storage,
      s3,
      role_arn,
      sns,
   }: //role_arn,
   ILambdaFn,
   my: Output,
): Output => {
   //const kabob_name = name.replace(/_/g, '-')
   //const my_bucket = my?.bucket?.resource?.s3_bucket?.bucket
   //const my_role_arn = my?.role?.resource?.iam_role?.arn

   //console.log(`\nlambdaModule SNS: ${name}:\n`, sns, '\n')

   const buckets = s3?.map(({ name, ref, actions }) => ({
      name,
      ref: `<--${ref}`,
      actions,
   }))

   //console.log(`\nlambdaModule BUCKET_ENV: ${name}:\n`, buckets, '\n')

   const someIncludes = (array, key) =>
      array && array.some((x) => isPlainObject(x) && Object.keys(x).includes(key))

   const has_msg_attrs = someIncludes(sns, 'message_attrs') ? true : false
   if (!has_msg_attrs) console.log(name, 'lambda not publishing')

   const is_subscribed = someIncludes(sns, 'filter_policy') ? true : false
   if (!is_subscribed) console.log(name, 'lambda not subscribed')

   const sns_config = has_msg_attrs
      ? sns?.reduce((acc, { message_attrs, name, ref }) => {
           return [...acc, { name, ref: `<--${ref}`, attributes: message_attrs }]
        }, [] as object[])
      : null

   const my_env_vars = {
      ...(s3?.length ? { S3_BUCKETS: JSON.stringify(buckets) } : {}),
      ...(has_msg_attrs
         ? {
              SNS_CONFIG: JSON.stringify(sns_config),
           }
         : {}),
      ...env_vars,
   }

   return {
      //cloudwatch: cloudwatch({ name, tags }),

      function: lambdaFunction({
         name,
         role_arn, //: my_role_arn,
         file_path,
         package_type: runtime && handler ? 'Zip' : 'Image',
         handler,
         runtime,
         architectures,
         memory_size,
         timeout,
         tmp_storage,
         tags,
         depends_on,
         env_vars: my_env_vars,
      }),

      ...(sns && is_subscribed
         ? sns.reduce(
              (acc, { filter_policy, ref, topic_key }) => ({
                 ...acc,
                 [`${topic_key}_sns_invoke_cred`]: lambdaInvokeCred({
                    function_name: my?.function?.resource?.lambda_function?.function_name,
                    source_arn: `<--${ref}`,
                    principal: 'sns.amazonaws.com',
                    statement_id: `AllowExecutionFromSNS-${name}-${topic_key}`,
                 }),
                 [`${topic_key}_subscription`]: subscription({
                    topic_arn: `<--${ref}`,
                    lambda_arn: my?.function?.resource?.lambda_function?.arn,
                    filter: filter_policy,
                 }),
              }),
              {},
           )
         : {}),
   }
}

export const lambdaModule = modulate({ lambda: Lambda })
