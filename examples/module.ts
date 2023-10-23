import { modulate, config, Provider, Terraform } from '../src/config'
import { AWS05200 as AWS } from '../registry/index'


/**
 * Outline of microservice module:
 * - s3
 *   - bucket
 * - sns
 *   - upstream topic (subscribed to by lambda)
 *   - downstream topic (published to by lambda)
 * - lambda
 *   - environment variables
 *     - S3_BUCKET_NAME (for functions that need to read/write to s3)
 *     - SNS_TOPIC_ARN (downstream topic to publish to sns)
 *   - sns subscription (upstream topic)
 *     - filter policy
 *   - elastic file system (optional)
 *     - access point
 *     - mount target
 * - api gateway (optional)
 *   - domain
 *     - subdomain
 *       - routes
 *         - methods
 * - required iam permissions
 *   - lambda
 *     - s3
 *       - read/write
 *     - sns
 *       - publish
 *       - subscribe
 *     - cloudwatch
 *       - logs 
 *       - metrics
 *   - sns
 *     - lambda (via AllowExecutionFromSNS)
 *   - api gateway (optional)
 *     - lambda (via AllowExecutionFromAPIGateway)
 */

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
 * ref:
 * https://dev.to/madflanderz/how-to-get-parts-of-an-typescript-interface-3mko
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
                    identifiers: ['lambda.amazonaws.com'],
                    type: 'Service',
                },
            },
            json: '-->',
        },
    },
}

const lambda_role = ({ name, policy_json }): AWS => ({
    resource: {
        iam_role: {
            name: `${name}-role`,
            assume_role_policy: policy_json,
            arn: '-->',
        },
    },
})

const lambda_policy = ({ name, policy_json }): AWS => ({
    resource: {
        iam_policy: {
            name,
            policy: policy_json,
        },
    },
})

const lambda_invoke_cred = ({
    function_name,
    principal = 'sns.amazonaws.com',
    statement_id = 'AllowExecutionFromSNS',
}): AWS => ({
    resource: {
        lambda_permission: {
            function_name,
            /**
             * TODO: add qualifier?
             * (Optional) Query parameter to specify function version or alias
             * name. The permission will then apply to the specific qualified
             * ARN
             * e.g...
             */
            //qualifier: "arn:aws:lambda:aws-region:acct-id:function:function-name:2",
            statement_id,
            principal,
            action: 'lambda:InvokeFunction',
        },
    },
})

const sns_invoke_cred = (function_name) =>
    lambda_invoke_cred({
        function_name,
        principal: 'sns.amazonaws.com',
        statement_id: 'AllowExecutionFromSNS',
    })

const apigw_invoke_cred = (function_name) =>
    lambda_invoke_cred({
        function_name,
        principal: 'apigateway.amazonaws.com',
        statement_id: 'AllowExecutionFromAPIGateway',
    })

const bucket_creds = (bucket): AWSColl => ({
    data: {
        iam_policy_document: {
            statement: [
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
})

//   d88~\ 888-~88e  d88~\
//  C888   888  888 C888
//   Y88b  888  888  Y88b
//    888D 888  888   888D
//  \_88P  888  888 \_88P

const sns_topic = (name): AWS => ({
    resource: {
        sns_topic: {
            name: `${name}-topic`,
            arn: '-->',
        },
    },
})
const subscription = ({
    topic_arn,
    lambda_arn,
    filter = {},
    scope = 'MessageAttributes',
}): AWS => ({
    resource: {
        sns_topic_subscription: {
            topic_arn,
            protocol: 'lambda',
            endpoint: lambda_arn,
            filter_policy: JSON.stringify(filter, null, 2),
            filter_policy_scope: scope,
            subscription_role_arn: undefined, // only needed if protocol == 'firehose'
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

const efs_access_point = ({ name, efs_arn }): AWS => ({
    resource: {
        efs_access_point: {
            file_system_id: 'TODO',
        },
    },
})

//         _-~88e
//   d88~\    888b
//  C888    __888"
//   Y88b     888e
//    888D    888P
//  \_88P  ~-_88"

const s3 = (name): AWS => ({
    resource: {
        s3_bucket: {
            bucket: `-->${name}-bucket`,
        },
    },
})

//  888                         888             888
//  888   /~~~8e  888-~88e-~88e 888-~88e   e88~\888   /~~~8e
//  888       88b 888  888  888 888  888b d888  888       88b
//  888  e88~-888 888  888  888 888  8888 8888  888  e88~-888
//  888 C888  888 888  888  888 888  888P Y888  888 C888  888
//  888  "88_-888 888  888  888 888-_88"   "88_/888  "88_-888

const lambda = ({
    name,
    //efs_arn,
    role_arn,
    file_path,
    env_vars = {},
    handler = 'handler.handler',
    runtime = 'python3.8',
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
            arn: '-->',
        },
    },
})

//                               888          888
//  888-~88e-~88e  e88~-_   e88~\888 888  888 888  e88~~8e
//  888  888  888 d888   i d888  888 888  888 888 d888  88b
//  888  888  888 8888   | 8888  888 888  888 888 8888__888
//  888  888  888 Y888   ' Y888  888 888  888 888 Y888    ,
//  888  888  888  "88_-~   "88_/888 "88_-888 888  "88___/

export const microServiceModule = (
    {
        name = 'module',
        file_path = '${path.root}/lambdas/template/zipped/handler.py.zip',
        handler = 'handler.handler',
        env_vars = {},
        filter = {},
    },
    my: { [key: string]: AWS }
) => ({
    //efs,
    lambda_creds,
    sns_invoke_cred: sns_invoke_cred(my?.lambda?.resource?.lambda_function?.function_name),
    apigw_invoke_cred: apigw_invoke_cred(my?.lambda?.resource?.lambda_function?.function_name),
    bucket_creds: bucket_creds(my?.s3.resource?.s3_bucket?.bucket),
    lambda_policy: lambda_policy({
        name: `${name}-policy`,
        policy_json: my?.bucket_creds?.data?.iam_policy_document?.json,
    }),
    topic: sns_topic(name),
    s3: s3(name),
    lambda_role: lambda_role({
        name,
        policy_json: my?.lambda_creds?.data?.iam_policy_document?.json,
    }),
    lambda: lambda({
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
    subscription: subscription({
        topic_arn: my?.topic?.resource?.sns_topic?.arn,
        lambda_arn: my?.lambda?.resource?.lambda_function?.arn,
        filter,
    }),
})

//                                           ,e, 888                 888
//   e88~~\  e88~-_  888-~88e-~88e 888-~88e   "  888  e88~~8e   e88~\888
//  d888    d888   i 888  888  888 888  888b 888 888 d888  88b d888  888
//  8888    8888   | 888  888  888 888  8888 888 888 8888__888 8888  888
//  Y888    Y888   ' 888  888  888 888  888P 888 888 Y888    , Y888  888
//   "88__/  "88_-~  888  888  888 888-_88"  888 888  "88___/   "88_/888
//                                 888
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

const module = modulate({ ms1: microServiceModule })
const output = module({ name: 'throwaway-test-123' })
const compiler = config(provider, terraform, 'main.tf.json')
const compiled = compiler(output)

JSON.stringify(compiled, null, 4) //?
