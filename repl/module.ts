import { AWS05200 as AWS } from '../registry/index'
import { config, Provider, Terraform } from '../src/config'

const lambda_policy_doc: AWS = {
    data: {
        iam_policy_document: {
            statement: {
                effect: 'Allow',
                actions: ['sts:AssumeRole'],
                principals: {
                    identifiers: ['lambda.amazonaws.com'],
                    type: 'Service',
                },
            },
            json: '-->',
        },
    },
}

const lambda_role = ({ name, policy_json }) =>
    ({
        resource: {
            iam_role: {
                name: `${name}-role`,
                assume_role_policy: policy_json,
                arn: '-->', // '${aws_iam_role.iam_role.arn}',
            },
        },
    } as AWS)

const sns_topic = (name) =>
    ({
        resource: {
            sns_topic: {
                name: `${name}-topic`,
                arn: '-->', // '${aws_sns_topic.sns_topic.arn}',
            },
        },
    } as AWS)

const sns_sub_lambda = ({
    topic_arn,
    lambda_arn,
    filter_policy = {},
    filter_policy_scope = 'MessageAttributes',
}) =>
    ({
        resource: {
            sns_topic_subscription: {
                topic_arn,
                protocol: 'lambda',
                endpoint: lambda_arn,
                filter_policy: JSON.stringify(filter_policy, null, 2),
                filter_policy_scope,
                arn: '-->', // '${aws_sns_topic_subscription.sns_topic_subscription.arn}',
            },
        },
    } as AWS)

const efs: AWS = {
    resource: {
        efs_file_system: {
            arn: '-->',
            tags: {
                Source: 'Micro',
            },
        },
    },
}

const s3 = (name) =>
    ({
        resource: {
            s3_bucket: {
                bucket: name,
            },
        },
    } as AWS)

const lambda_efs = ({
    name,
    efs_arn,
    role_arn,
    file_path,
    env_vars = {},
    handler = 'handler.handler',
    runtime = 'python3.8',
}) =>
    ({
        resource: {
            lambda_function: {
                function_name: `lambda_efs-${name}`,
                role: role_arn,
                runtime,
                handler,
                filename: file_path,
                file_system_config: {
                    arn: efs_arn,
                    local_mount_path: '/mnt/efs',
                },
                environment: {
                    variables: env_vars,
                },
                arn: '-->', // '${aws_lambda_function.lambda_function.arn}',
            },
        },
    } as AWS)

export const microServiceModule = (
    {
        name = 'module',
        file_path = '${path.root}/lambdas/template/zipped/handler.py.zip',
        handler = 'handler.handler',
        env_vars = {},
        filter_policy = {},
    },
    my: { [key: string]: AWS }
) => ({
    lambda_policy_doc,
    topic: sns_topic(name),
    efs,
    s3: s3(name),
    lambda_role: lambda_role({
        name,
        policy_json: my?.lambda_policy_doc?.data?.iam_policy_document?.json,
    }),
    lambda: lambda_efs({
        name,
        efs_arn: my?.efs?.resource?.efs_file_system?.arn, //'${aws_efs_file_system.efs_file_system.arn}',
        role_arn: my?.lambda_role?.resource?.iam_role?.arn, //'TODO: ${aws_iam_role.iam_role.arn}',
        file_path,
        handler,
        env_vars: {
            S3_BUCKET_NAME: name,
            SNS_TOPIC_ARN: my?.topic?.resource?.sns_topic?.arn, //'${aws_sns_topic.sns_topic.arn}',
            ...env_vars,
        },
    }),
    subscription: sns_sub_lambda({
        topic_arn: my?.topic?.resource?.sns_topic?.arn, // '${aws_sns_topic.sns_topic.arn}',
        lambda_arn: my?.lambda?.resource?.lambda_function?.arn, // '${aws_lambda_function.lambda_function.arn}',
        filter_policy,
    }),
})

const provider: Provider = {
    aws: {
        region: 'us-east-2',
        profile: 'chopshop',
    },
}

const terraform: Terraform = {
    required_providers: {
        aws: {
            source: 'hashicorp/aws',
            version: '5.20.0',
        },
    },
}

const compile = config(provider, terraform, 'main.tf.json')
const module = compile({ my_module1: microServiceModule })
const output = module({ name: 'bloop' }) //?

/**
 * deep merges arbitrary number of objects into one
 */
const deepMerge = (...objs) => {
    const result = {}
    for (const obj of objs) {
        for (const key in obj) {
            const val = obj[key]
            if (key === 'provider' && result[key] && 'alias' in val) {
                continue
            }
            if (Array.isArray(val)) {
                result[key] = result[key] || []
                result[key].push(...val)
            } else if (typeof val === 'object') {
                result[key] = deepMerge(result[key] || {}, val)
            } else {
                result[key] = val
            }
        }
    }
    return result
}

