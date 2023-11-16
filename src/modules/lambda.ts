import { modulate } from '../config'
import { AWS, Statement, flag, Omit } from '../constants'
import {
   s3BucketPolicy,
   s3BucketCors,
   s3bucket,
   bucketPolicyStatement,
   s3BucketPolicyDocument,
} from './s3'
import { subscription } from './sns'
import { iamRole, iamRolePolicyAttachment, iamPolicy } from './iam'

const policy_doc: AWS = {
   data: {
      iam_policy_document: {
         statement: {
            effect: 'Allow',
            actions: ['sts:AssumeRole'],
            principals: {
               identifiers: ['lambda.amazonaws.com', 'apigateway.amazonaws.com'],
               type: 'Service',
            },
         },
         json: '-->',
      },
   },
}

const multiStatementIamPolicyDoc = ({
   bucket = '',
   topic_arn = '',
   cloudwatch_arn = '',
   role_arn = '',
}): AWS => ({
   data: {
      iam_policy_document: {
         statement: [
            ...(bucket ? [bucketPolicyStatement({ bucket, role_arn })] : []),
            ...(topic_arn
               ? [
                    {
                       effect: 'Allow',
                       actions: ['sns:Publish', 'sns:Subscribe'],
                       resources: [topic_arn],
                    },
                 ]
               : []),
            ...(cloudwatch_arn
               ? [
                    {
                       effect: 'Allow',
                       actions: [
                          'logs:CreateLogGroup',
                          'logs:CreateLogStream',
                          'logs:PutLogEvents',
                       ],
                       resources: [`${cloudwatch_arn}:*`, `${cloudwatch_arn}:*:*`],
                    },
                 ]
               : []),
         ],
         json: '-->',
      },
   },
})

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

const cloudwatch = ({ name, retention_in_days = 7, tags = {} }): AWS => ({
   resource: {
      cloudwatch_log_group: {
         name: `/aws/lambda/function-${name}`, // required name format for proper connection to lambda
         retention_in_days,
         tags: { ...flag, ...tags },
         arn: '-->',
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
   /** SNS Topic ARN */
   topic_arn: string
   /** Message Attribute keys (names) cannot start with `AWS.` or `Amazon.` See [Docs](https://docs.aws.amazon.com/sns/latest/dg/sns-publishing.html) for more info. */
   message_attrs?: MessageAttributes
   /** See [Examples in Docs](https://docs.aws.amazon.com/sns/latest/dg/example-filter-policies.html) */
   filter_policy?: { [key: string]: any[] }
}

interface SNSTopicFlow {
   /** SNS Topic subscribed to */
   upstream?: SNSTopic
   /** SNS Topic to publish to */
   downstream?: SNSTopic
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
   /** settings to attach lambda to SNS Topic */
   sns?: SNSTopicFlow
   /** whether or not to create dedicated s3 bucket for the lambda */
   bucket?: boolean
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
      bucket = true,
      sns,
   }: ILambdaFn,
   my: Output,
): Output => {
   const kabob_name = name.replace(/_/g, '-')
   const my_bucket = my?.bucket?.resource?.s3_bucket?.bucket
   const my_role_arn = my?.role?.resource?.iam_role?.arn
   const topicArn = (port) => (sns?.[port] ? `<--${sns?.[port]?.topic_arn}` : '')
   const my_env_vars = {
      ...(bucket ? { S3_BUCKET_NAME: my_bucket } : {}),
      ...(sns?.downstream
         ? {
              SNS_TOPIC_ARN: topicArn('downstream'),
              SNS_MESSAGE_ATTRS: JSON.stringify(sns.downstream.message_attrs),
           }
         : {}),
      ...env_vars,
   }

   return {
      policy_doc,
      role: iamRole({
         name,
         policy_json: my?.policy_doc?.data?.iam_policy_document?.json,
         tags,
      }),
      cloudwatch: cloudwatch({ name, tags }),
      access_creds: multiStatementIamPolicyDoc({
         cloudwatch_arn: my?.cloudwatch?.resource?.cloudwatch_log_group?.arn,
         topic_arn: topicArn('downstream'),
         bucket: my_bucket,
      }),
      policy: iamPolicy({
         name,
         policy_json: my?.access_creds?.data?.iam_policy_document?.json,
         tags,
      }),
      policy_attachment: iamRolePolicyAttachment({
         policy_arn: my?.policy?.resource?.iam_policy?.arn,
         role_name: my?.role?.resource?.iam_role?.name,
      }),
      function: lambdaFunction({
         name,
         role_arn: my_role_arn,
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
      ...(bucket
         ? {
              pet: { resource: { random_pet: { id: '-->' } } },
              bucket: s3bucket({
                 name: `${kabob_name}-${my?.pet?.resource?.random_pet?.id}`,
                 tags,
              }),
              bucket_cors: s3BucketCors({
                 bucket: my_bucket,
              }),
              bucket_access_creds: s3BucketPolicyDocument({
                 bucket: my_bucket,
                 role_arn: my_role_arn,
              }),
              bucket_policy: s3BucketPolicy({
                 bucket: my_bucket,
                 policy_json: my?.bucket_access_creds?.data?.iam_policy_document?.json,
              }),
           }
         : {}),
      ...(sns?.upstream?.topic_arn
         ? {
              sns_invoke_cred: lambdaInvokeCred({
                 function_name: my?.function?.resource?.lambda_function?.function_name,
                 source_arn: topicArn('upstream'),
                 principal: 'sns.amazonaws.com',
                 statement_id: 'AllowExecutionFromSNS-' + name,
              }),
              subscription: subscription({
                 topic_arn: topicArn('upstream'),
                 lambda_arn: my?.function?.resource?.lambda_function?.arn,
                 filter: sns.upstream.filter_policy,
              }),
           }
         : {}),
   }
}

export const lambdaModule = modulate({ lambda: Lambda })
