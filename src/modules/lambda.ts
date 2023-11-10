import { modulate } from '../config'
import { AWS, Statement, flag, Omit } from '../constants'
import { s3BucketPolicy, s3BucketCors, s3bucket } from './s3'
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

const bucketPolicyStatement = ({ bucket_name, role_arn = '' }): Statement => ({
    ...(role_arn ? { principals: { identifiers: [role_arn], type: 'AWS' } } : {}),
    effect: 'Allow',
    actions: [
        's3:AbortMultipartUpload',
        's3:ListMultipartUploadParts',
        's3:ListBucketMultipartUploads',
        's3:PutObject',
        's3:GetObject',
        's3:DeleteObject',
    ],
    resources: [`arn:aws:s3:::${bucket_name}`, `arn:aws:s3:::${bucket_name}/*`],
})

const multiStatementIamPolicyDoc = ({
    bucket_name = '',
    topic_arn = '',
    cloudwatch_arn = '',
    role_arn = '',
}): AWS => ({
    data: {
        iam_policy_document: {
            statement: [
                ...(bucket_name
                    ? ([bucketPolicyStatement({ bucket_name, role_arn })] as Statement[])
                    : []),
                ...(topic_arn
                    ? ([
                          {
                              effect: 'Allow',
                              actions: ['sns:Publish', 'sns:Subscribe'],
                              resources: [topic_arn],
                          },
                      ] as Statement[])
                    : []),
                ...(cloudwatch_arn
                    ? ([
                          {
                              effect: 'Allow',
                              actions: [
                                  'logs:CreateLogGroup',
                                  'logs:CreateLogStream',
                                  'logs:PutLogEvents',
                              ],
                              resources: [`${cloudwatch_arn}:*`, `${cloudwatch_arn}:*:*`],
                          },
                      ] as Statement[])
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
            name: `/aws/function/${name}-log-group`,
            retention_in_days,
            tags: {
                ...flag,
                ...tags,
            },
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
            ...((tmp_storage && {
                ephemeral_storage: {
                    size: tmp_storage,
                },
            }) ||
                {}),
            role: role_arn,
            environment: {
                variables: env_vars,
            },
            tags: {
                ...flag,
                ...tags,
            },
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
/**
 * Lambda module
 */
export const lambda = (
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
    my: Output
): Output => {
    // TODO: consider triggering @-0/build-function-py here
    // - would have to make this async...
    //const ext = file_path.split('.').pop()
    //const isZip = ext === 'zip'
    return {
        function: lambdaFunction({
            name,
            role_arn: my?.role?.resource?.iam_role?.arn,
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
            env_vars: {
                ...(bucket ? { S3_BUCKET_NAME: my?.bucket?.resource?.s3_bucket?.bucket } : {}),
                ...(sns?.downstream
                    ? {
                          SNS_TOPIC_ARN: sns.downstream?.topic_arn,
                          SNS_MESSAGE_ATTRS: JSON.stringify(sns.downstream.message_attrs),
                      }
                    : {}),
                ...env_vars,
            },
        }),
        policy_doc,
        role: iamRole({
            name,
            policy_json: my?.policy_doc?.data?.iam_policy_document?.json,
            tags,
        }),
        cloudwatch: cloudwatch({ name, tags }),
        access_creds: multiStatementIamPolicyDoc({
            bucket_name: my?.bucket?.resource?.s3_bucket?.bucket,
            cloudwatch_arn: my?.cloudwatch?.resource?.cloudwatch_log_group?.arn,
            topic_arn: sns?.downstream?.topic_arn,
        }),
        policy: iamPolicy({
            name: `${name}-policy`,
            policy_json: my?.access_creds?.data?.iam_policy_document?.json,
            tags,
        }),
        policy_attachment: iamRolePolicyAttachment({
            policy_arn: my?.policy?.resource?.iam_policy?.arn,
            role_name: my?.role?.resource?.iam_role?.name,
        }),
        ...(bucket
            ? {
                  pet: {
                      resource: {
                          random_pet: {
                              id: '-->',
                          },
                      },
                  },
                  bucket: s3bucket({
                      name: `${name}-${my?.pet?.resource?.random_pet?.id}`,
                      tags,
                  }),
                  bucket_access_creds: multiStatementIamPolicyDoc({
                      bucket_name: my?.bucket?.resource?.s3_bucket?.bucket,
                      role_arn: my?.role?.resource?.iam_role?.arn,
                  }),
                  bucket_cors: s3BucketCors({
                      bucket_name: my?.bucket?.resource?.s3_bucket?.bucket,
                  }),
                  bucket_policy: s3BucketPolicy({
                      bucket_name: my?.bucket?.resource?.s3_bucket?.bucket,
                      policy_json: my?.bucket_access_creds?.data?.iam_policy_document?.json,
                  }),
              }
            : {}),
        ...(sns?.upstream
            ? {
                  sns_invoke_cred: lambdaInvokeCred({
                      function_name: my?.function?.resource?.lambda_function?.function_name,
                      source_arn: sns.upstream?.topic_arn,
                      principal: 'sns.amazonaws.com',
                      statement_id: 'AllowExecutionFromSNS',
                  }),
                  subscription: subscription({
                      topic_arn: sns.upstream.topic_arn,
                      lambda_arn: my?.function?.resource?.lambda_function?.arn,
                      filter: sns.upstream.filter_policy,
                  }),
              }
            : {}),
    } as Output
}

export const lambdaModule = modulate({ lambda })
