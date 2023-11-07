import { AWS, Statement, flag } from '../types'
import { bucket_policy, bucket_cors, bucket } from './s3'
import { subscription } from './sns'
import { iam_role, iam_role_policy_attachment, iam_policy } from './iam'
//import { ecr_repo, ecr_image, isFile } from './ecr'

const policy_doc: AWS = {
    data: {
        iam_policy_document: {
            statement: {
                effect: 'Allow',
                actions: ['sts:AssumeRole'],
                principals: {
                    identifiers: ['function.amazonaws.com', 'apigateway.amazonaws.com'],
                    type: 'Service',
                },
            },
            json: '-->',
        },
    },
}

const bucket_policy_statement = ({ bucket_name, role_arn = '' }): Statement => ({
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

const multi_stmt_policy_doc = ({
    bucket_name = '',
    topic_arn = '',
    cloudwatch_arn = '',
    role_arn = '',
}): AWS => ({
    data: {
        iam_policy_document: {
            statement: [
                ...(bucket_name
                    ? ([bucket_policy_statement({ bucket_name, role_arn })] as Statement[])
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

export const lambda_invoke_cred = ({
    function_name,
    source_arn,
    principal = 'sns.amazonaws.com',
    statement_id = 'AllowExecutionFromSNS',
}): AWS => ({
    resource: {
        lambda_permission: {
            statement_id,
            action: 'function:InvokeFunction',
            function_name,
            principal,
            source_arn,
        },
    },
})

//          888                         888                            d8           888
//   e88~~\ 888  e88~-_  888  888  e88~\888 Y88b    e    /   /~~~8e  _d88__  e88~~\ 888-~88e
//  d888    888 d888   i 888  888 d888  888  Y88b  d8b  /        88b  888   d888    888  888
//  8888    888 8888   | 888  888 8888  888   Y888/Y88b/    e88~-888  888   8888    888  888
//  Y888    888 Y888   ' 888  888 Y888  888    Y8/  Y8/    C888  888  888   Y888    888  888
//   "88__/ 888  "88_-~  "88_-888  "88_/888     Y    Y      "88_-888  "88_/  "88__/ 888  888

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

//  888                         888             888
//  888   /~~~8e  888-~88e-~88e 888-~88e   e88~\888   /~~~8e
//  888       88b 888  888  888 888  888b d888  888       88b
//  888  e88~-888 888  888  888 888  8888 8888  888  e88~-888
//  888 C888  888 888  888  888 888  888P Y888  888 C888  888
//  888  "88_-888 888  888  888 888-_88"   "88_/888  "88_-888

interface LambdaFunction {
    name: string
    file_path: string
    handler?: string
    env_vars?: object
    tags?: object
    runtime?: string
    package_type?: string
    role_arn?: string
    log_group_name?: string
}

/**
 * TODO:
 * - build functions JIT
 *   - for zipped functions
 *     - python: use @-0/build-function-py
 *   - for container functions
 *     - use @-0/build-function-container
 */
const lambda_fn = ({
    name,
    role_arn,
    file_path,
    env_vars = {},
    handler = 'handler.handler',
    package_type = 'Zip',
    runtime = 'python3.8',
    tags = {},
    log_group_name = '', // TODO
}: LambdaFunction): AWS => ({
    resource: {
        lambda_function: {
            runtime,
            package_type,
            function_name: `-->function-${name}`,
            role: role_arn,
            environment: {
                variables: env_vars,
            },
            ...(package_type === 'Image'
                ? { image_uri: file_path, architectures: ['x86_64'] }
                : { filename: file_path, handler }),
            tags: {
                ...flag,
                ...tags,
            },
            // @ts-ignore
            //depends_on: [`aws_cloudwatch_log_group.$SCOPE_${log_group_name}`],
            arn: '-->',
            invoke_arn: '-->',
        },
    },
})

//                               888          888
//  888-~88e-~88e  e88~-_   e88~\888 888  888 888  e88~~8e
//  888  888  888 d888   i d888  888 888  888 888 d888  88b
//  888  888  888 8888   | 8888  888 888  888 888 8888__888
//  888  888  888 Y888   ' Y888  888 888  888 888 Y888    ,
//  888  888  888  "88_-~   "88_/888 "88_-888 888  "88___/

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

interface Lambda {
    name: string
    file_path: string
    runtime: string
    handler?: string
    env_vars?: object
    sns?: SNSTopicFlow
    tags?: object
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
}

/**
 * micro service module
 *
 * @example
 * ```ts
 * const module = modulate({ function })
 * const output = module({
 *     name: 'bloop-test-123',
 *     subdomain: 'bloop'
 *     handler: 'handler.handler',
 *     file_path: '${path.root}/functions/template/zipped/handler.py.zip',
 * })
 * const compiler = config(provider, terraform, 'main.tf.json')
 * const compiled = compiler(output)
 * ```
 */
export const lambda = (
    {
        name = 'microservice',
        file_path = '${path.root}/functions/template/zipped/handler.py.zip',
        handler = 'handler.handler',
        runtime = 'python3.8',
        env_vars = {},
        tags = {},
        sns,
    }: Lambda,
    my: Output
): Output => {
    // TODO: consider triggering @-0/build-function-py here
    // - would have to make this async...
    const ext = file_path.split('.').pop()
    const isZip = ext === 'zip'
    return {
        policy_doc,
        role: iam_role({
            name,
            policy_json: my?.policy_doc?.data?.iam_policy_document?.json,
            tags,
        }),
        bucket: bucket({ name, tags }),
        bucket_access_creds: multi_stmt_policy_doc({
            bucket_name: my?.bucket?.resource?.s3_bucket?.bucket,
            role_arn: my?.role?.resource?.iam_role?.arn,
        }),
        bucket_cors: bucket_cors({ bucket_name: my?.bucket?.resource?.s3_bucket?.bucket }),
        bucket_policy: bucket_policy({
            bucket_name: my?.bucket?.resource?.s3_bucket?.bucket,
            policy_json: my?.bucket_access_creds?.data?.iam_policy_document?.json,
        }),
        cloudwatch: cloudwatch({ name, tags }),
        access_creds: multi_stmt_policy_doc({
            bucket_name: my?.bucket?.resource?.s3_bucket?.bucket,
            cloudwatch_arn: my?.cloudwatch?.resource?.cloudwatch_log_group?.arn,
            topic_arn: sns?.downstream?.topic_arn,
        }),
        policy: iam_policy({
            name: `${name}-policy`,
            policy_json: my?.access_creds?.data?.iam_policy_document?.json,
            tags,
        }),
        policy_attachment: iam_role_policy_attachment({
            policy_arn: my?.policy?.resource?.iam_policy?.arn,
            role_name: my?.role?.resource?.iam_role?.name,
        }),
        function: lambda_fn({
            name,
            role_arn: my?.role?.resource?.iam_role?.arn,
            file_path,
            package_type: isZip ? 'Zip' : 'Image',
            handler,
            runtime,
            tags,
            log_group_name: 'cloudwatch',
            env_vars: {
                S3_BUCKET_NAME: my?.bucket?.resource?.s3_bucket?.bucket,
                ...(sns?.downstream
                    ? {
                          SNS_TOPIC_ARN: sns.downstream.topic_arn,
                          SNS_MESSAGE_ATTRS: JSON.stringify(sns.downstream.message_attrs),
                      }
                    : {}),
                ...env_vars,
            },
        }),
        ...(sns?.upstream
            ? {
                  sns_invoke_cred: lambda_invoke_cred({
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
