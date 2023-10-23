import { modulate, config, Provider, Terraform } from '../src/config'
import { AWS05200 as AWS } from '../registry/index'

// https://dev.to/madflanderz/how-to-get-parts-of-an-typescript-interface-3mko
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

const lambda_policy_doc = (bucket) =>
    ({
        data: {
            iam_policy_document: {
                statement: [
                    {
                        effect: 'Allow',
                        actions: ['sts:AssumeRole'],
                        principals: {
                            identifiers: ['lambda.amazonaws.com'],
                            type: 'Service',
                        },
                    },
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
                        resources: [`arn:aws:s3:::${bucket}`, `arn:aws:s3:::${bucket}/*`],
                    },
                ],
                json: '-->',
            },
        },
    } as AWSColl)

const lambda_role = ({ name, policy_json }) =>
    ({
        resource: {
            iam_role: {
                name: `${name}-role`,
                assume_role_policy: policy_json,
                arn: '-->',
            },
        },
    } as AWS)

const sns_topic = (name) =>
    ({
        resource: {
            sns_topic: {
                name: `${name}-topic`,
                arn: '-->',
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
                arn: '-->',
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

const efs_access_point = ({ name, efs_arn }) =>
    ({
        resource: {
            efs_access_point: {
                file_system_id: 'TODO',
            },
        },
    } as AWS)

const s3 = (name) =>
    ({
        resource: {
            s3_bucket: {
                'bucket-->': `${name}-bucket-123`,
            },
        },
    } as AWS)

const lambda_efs = ({
    name,
    //efs_arn,
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
                //file_system_config: {
                //    arn: efs_arn,
                //    local_mount_path: '/mnt/efs',
                //},
                environment: {
                    variables: env_vars,
                },
                arn: '-->',
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
    lambda_policy_doc: lambda_policy_doc(my?.s3.resource?.s3_bucket?.bucket),
    topic: sns_topic(name),
    //efs,
    s3: s3(name),
    lambda_role: lambda_role({
        name,
        policy_json: my?.lambda_policy_doc?.data?.iam_policy_document?.json,
    }),
    lambda: lambda_efs({
        name,
        //efs_arn: my?.efs?.resource?.efs_file_system?.arn,
        role_arn: my?.lambda_role?.resource?.iam_role?.arn,
        file_path,
        handler,
        env_vars: {
            S3_BUCKET_NAME: my?.s3.resource?.s3_bucket?.bucket,
            SNS_TOPIC_ARN: my?.topic?.resource?.sns_topic?.arn,
            ...env_vars,
        },
    }),
    subscription: sns_sub_lambda({
        topic_arn: my?.topic?.resource?.sns_topic?.arn,
        lambda_arn: my?.lambda?.resource?.lambda_function?.arn,
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

const module = modulate({ ms: microServiceModule })
const output = module({ name: 'throwaway-test' })
const compiler = config(provider, terraform, 'main.tf.json')
const compiled = compiler(output)

JSON.stringify(compiled, null, 4) //?
