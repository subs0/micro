import { AWS, flag } from './constants'
//  ,e,
//   "    /~~~8e  888-~88e-~88e
//  888       88b 888  888  888
//  888  e88~-888 888  888  888
//  888 C888  888 888  888  888
//  888  "88_-888 888  888  888

/**
 * The following type customizations provide an example of how to modify a block
 * to allow for Array values in addition to default interfaces...
 *
 * reference blog [1]
 */
type AWSData = NonNullable<AWS['data']>
type IamPolicyDocument = NonNullable<AWSData['iam_policy_document']>
type Statement = NonNullable<IamPolicyDocument['statement']>
interface Statements extends Statement {
    [index: number]: Statement
}
interface IamPolicyDocs extends IamPolicyDocument {
    statement: Statement | Statements
}
interface AWSDataColls extends AWSData {
    iam_policy_document: IamPolicyDocs
}
interface AWSColl extends AWS {
    data: AWSDataColls
}

const lambda_creds: AWS = {
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

const lambda_role = ({ name, policy_json, tags = {} }): AWS => ({
    resource: {
        iam_role: {
            name: `-->${name}-role`,
            assume_role_policy: policy_json,
            tags: {
                ...flag,
                ...tags,
            },
            arn: '-->',
        },
    },
})

const lambda_access_creds = ({
    bucket_name = '',
    topic_arn = '',
    cloudwatch_arn = '',
}): AWSColl => ({
    data: {
        iam_policy_document: {
            statement: [
                ...(bucket_name
                    ? [
                          {
                              effect: 'Allow',
                              actions: [
                                  's3:AbortMultipartUpload',
                                  's3:ListMultipartUploadParts',
                                  's3:ListBucketMultipartUploads',
                                  's3:PutObject',
                                  's3:GetObject',
                                  's3:DeleteObject',
                              ],
                              resources: [
                                  `arn:aws:s3:::${bucket_name}`,
                                  `arn:aws:s3:::${bucket_name}/*`,
                              ],
                          },
                      ]
                    : []),
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

const lambda_policy_attachment = ({ role_name, policy_arn }): AWS => ({
    resource: {
        iam_role_policy_attachment: {
            role: role_name,
            policy_arn,
        },
    },
})

const lambda_policy = ({ name, policy_json, tags = {} }): AWS => ({
    resource: {
        iam_policy: {
            name: `-->${name}-policy`,
            policy: policy_json,
            tags: {
                ...flag,
                ...tags,
            },
            arn: '-->',
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
            action: 'lambda:InvokeFunction',
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
            name: `/aws/lambda/${name}-log-group`,
            retention_in_days,
            tags: {
                ...flag,
                ...tags,
            },
            arn: '-->',
        },
    },
})

//   d88~\ 888-~88e  d88~\
//  C888   888  888 C888
//   Y88b  888  888  Y88b
//    888D 888  888   888D
//  \_88P  888  888 \_88P

const subscription = ({
    topic_arn,
    lambda_arn,
    filter = {},
    scope = 'MessageAttributes',
}): AWS => ({
    resource: {
        // @ts-ignore: subscription_role_arn only needed if protocol == 'firehose'
        sns_topic_subscription: {
            topic_arn,
            protocol: 'lambda',
            endpoint: lambda_arn,
            filter_policy: JSON.stringify(filter),
            filter_policy_scope: scope,
            arn: '-->',
        },
    },
})

//              88~\
//   e88~~8e  _888__  d88~\
//  d888  88b  888   C888
//  8888__888  888    Y88b
//  Y888    ,  888     888D
//   "88___/   888   \_88P

// reference [4]

const efs: AWS = {
    resource: {
        efs_file_system: {
            arn: '-->',
            tags: {
                ...flag,
            },
        },
    },
}

const efs_access_point = ({ name, efs_arn }): AWS => ({
    resource: {
        efs_access_point: {
            file_system_id: 'TODO',
            tags: {
                ...flag,
            },
        },
    },
})

//         _-~88e
//   d88~\    888b
//  C888    __888"
//   Y88b     888e
//    888D    888P
//  \_88P  ~-_88"

const s3 = ({ name, tags = {} }): AWS => ({
    resource: {
        s3_bucket: {
            bucket: `-->${name}-bucket`,
            // @ts-ignore (docs 🐛)
            tags: {
                ...tags,
                ...flag,
            },
        },
    },
})

//  888                         888             888
//  888   /~~~8e  888-~88e-~88e 888-~88e   e88~\888   /~~~8e
//  888       88b 888  888  888 888  888b d888  888       88b
//  888  e88~-888 888  888  888 888  8888 8888  888  e88~-888
//  888 C888  888 888  888  888 888  888P Y888  888 C888  888
//  888  "88_-888 888  888  888 888-_88"   "88_/888  "88_-888

const lambda_fn = ({
    name,
    //efs_arn,
    role_arn,
    file_path,
    env_vars = {},
    handler = 'handler.handler',
    runtime = 'python3.8',
    tags = {},
}): AWS => ({
    resource: {
        lambda_function: {
            function_name: `-->lambda-${name}`,
            role: role_arn,
            runtime,
            handler,
            filename: file_path,
            //file_system_config: {
            //    arn: efs_arn,
            //    local_mount_path: '/mnt/efs',
            //},
            environment: {
                variables: env_vars,
            },
            tags: {
                ...flag,
                ...tags,
            },
            arn: '-->',
            invoke_arn: '-->',
        },
    },
})

//                               888          888                    ,d
//  888-~88e-~88e  e88~-_   e88~\888 888  888 888  e88~~8e        ,d888
//  888  888  888 d888   i d888  888 888  888 888 d888  88b         888
//  888  888  888 8888   | 8888  888 888  888 888 8888__888         888
//  888  888  888 Y888   ' Y888  888 888  888 888 Y888    ,         888
//  888  888  888  "88_-~   "88_/888 "88_-888 888  "88___/          888

interface SNSTopic {
    /** SNS Topic ARN */
    topic_arn: string
    /** The name cannot start with `AWS.` or `Amazon.` See [DOCS](https://docs.aws.amazon.com/sns/latest/dg/sns-publishing.html) for more... */
    message_attrs?: object
    filter_policy?: object
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
    handler: string
    env_vars?: object
    sns?: SNSTopicFlow
    tags?: object
}

/**
 * micro service module
 *
 * @param name - name of the micro service
 * @param subdomain - subdomain of the micro service
 * @param file_path - path to the lambda function zip file
 * @param handler - name of the lambda handler function
 * @param env_vars - environment variables for the lambda function
 * @param filter - filter policy for sns subscription
 * @param my - self reference for referencing other resources
 *
 * @returns - micro service module
 *
 * @example
 * ```ts
 * const module = modulate({ ms1: microServiceModule })
 * const output = module({ name: 'throwaway-test-123', subdomain: 'bloop' })
 * const compiler = config(provider, terraform, 'main.tf.json')
 * const compiled = compiler(output)
 * ```
 */
export const lambda = (
    {
        name = 'microservice',
        file_path = '${path.root}/lambdas/template/zipped/handler.py.zip',
        handler = 'handler.handler',
        env_vars = {},
        sns,
        tags = {},
    }: Lambda,
    my: { [key: string]: AWS }
) => ({
    //efs,
    lambda_creds,
    cloudwatch: cloudwatch({ name, tags }),
    lambda_policy: lambda_policy({
        name: `${name}-policy`,
        policy_json: my?.lambda_access_creds?.data?.iam_policy_document?.json,
        tags,
    }),
    lambda_role: lambda_role({
        name,
        policy_json: my?.lambda_creds?.data?.iam_policy_document?.json,
        tags,
    }),
    lambda_policy_attachment: lambda_policy_attachment({
        policy_arn: my?.lambda_policy?.resource?.iam_policy?.arn,
        role_name: my?.lambda_role?.resource?.iam_role?.name,
    }),
    s3: s3({ name, tags }),
    lambda: lambda_fn({
        name,
        //efs_arn: my?.efs?.resource?.efs_file_system?.arn,
        role_arn: my?.lambda_role?.resource?.iam_role?.arn,
        file_path,
        handler,
        tags,
        env_vars: {
            S3_BUCKET_NAME: my?.s3.resource?.s3_bucket?.bucket,
            ...(sns
                ? {
                      SNS_TOPIC_ARN: sns.downstream?.topic_arn,
                      SNS_MESSAGE_ATTRS: JSON.stringify(sns.downstream?.message_attrs),
                  }
                : {}),
            ...env_vars,
        },
    }),
    lambda_access_creds: lambda_access_creds({
        bucket_name: my?.s3.resource?.s3_bucket?.bucket,
        cloudwatch_arn: my?.cloudwatch.resource?.cloudwatch_log_group?.arn,
        topic_arn: sns?.downstream?.topic_arn,
    }),
    ...(sns?.downstream
        ? {
              sns_invoke_cred: lambda_invoke_cred({
                  function_name: my?.lambda?.resource?.lambda_function?.function_name,
                  source_arn: sns.downstream?.topic_arn,
                  principal: 'sns.amazonaws.com',
                  statement_id: 'AllowExecutionFromSNS',
              }),
              subscription: subscription({
                  topic_arn: sns.downstream?.topic_arn,
                  lambda_arn: my?.lambda?.resource?.lambda_function?.arn,
                  filter: sns.upstream?.filter_policy,
              }),
          }
        : {}),
})
