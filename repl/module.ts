import { AWS05200 as AWS } from '../registry/index'
import { config, Provider, Terraform } from '../src/micro'

const sns_topic = (name) =>
    ({
        resource: {
            sns_topic: {
                name: `${name}-topic`,
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
            },
        },
    } as AWS)

const efs = (name) =>
    ({
        resource: {
            efs_file_system: {},
        },
    } as AWS)

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
    env_vars = { hello: 'world' },
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
            },
        },
    } as AWS)

/**
 * TODOS:
 * - find a way to get the decendant path to an undefined object property in
 *   order to create the path for the resource
 *   https://stackoverflow.com/a/17923310
 */
