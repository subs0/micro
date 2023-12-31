import { AWS05200 as AWS } from '../registry/index'
import { config, Provider, Terraform } from '../src/micro'

/** TODOs:
 * - [x]: recurse through object and find thunks (TB stringified and xfd)
 * - [x]: transform objects to inject the asset name into their path at the right place
 * - [x]: test with `terraform plan`
 * - [x]: add "(Output)" to attributes before documenting
 * - [ ]: Ask Adam about the importance of order and design considerations
 * - [ ]: migrate some modules from terraform aws modules library
 *      - lambda
 *          - efs
 *          - env vars
 *      - api gw v2
 *      - s3
 *      - sns
 * - [ ]: test with bundler (@-0/build-lambda-py)
 */

enum ArgsAttrs {
    args = 'args',
    attrs = 'attrs',
}

type Module = {
    args: { [key: string]: AWS }
    arn: () => () => { [key: string]: AWS }
}

const bucket: Partial<AWS> = {
    resource: {
        s3_bucket: {
            bucket: 'throwaway-bucket-pqewur',
        },
    },
}

const gen_topic = (name) => ({
    [name]: {
        resource: {
            sns_topic: {
                display_name: `${name}-topic`,
            },
        },
    } as AWS,
})

const ddb: AWS = {
    resource: {
        dynamodb_table: {
            attribute: {
                name: 'hello',
                type: 'S',
            },
        },
    },
}

const my_policy: AWS = {
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
        },
    },
}

const role = (name: string) => `${name}_role`
const gen_role = (name: string): { [key: string]: AWS } => ({
    [role(name)]: {
        resource: {
            iam_role: {
                name: `${name}-role`,
                assume_role_policy: () => my_policy.data?.iam_policy_document?.json,
                arn: role(name), // -> export
            },
        },
    },
})

const efs = (name: string) => `${name}_efs`
const gen_efs = (name: string, id: string = '001'): { [key: string]: AWS } => ({
    [efs(name)]: {
        resource: {
            efs_file_system: {
                creation_token: `${name}-${id}`,
                arn: efs(name), // -> export
                tags: {
                    Source: 'Micro',
                },
            },
        },
    },
})

const micro_vpc: AWS = {
    resource: {
        vpc: {},
    },
}

const lambda = ({
    name = 'throwaway',
    handler = 'handler.handler',
    path = 'lambdas/template/zipped/handler.py.zip',
    runtime = 'python3.8',
}): { [key: string]: { [key: string]: AWS } } | { [key: string]: AWS } => ({
    //ddb,
    //...gen_efs(name),
    my_policy,
    ...gen_role(name),
    [`${name}_lambda`]: {
        resource: {
            lambda_function: {
                function_name: name,
                role: (_) => gen_role(name)[role(name)].resource?.iam_role?.arn,
                description: `A ${name.split('_').join(' ')} lambda`,
                filename: path, // 📦 must be a zip: do this in a script before JIT
                handler,
                runtime,
                ephemeral_storage: {
                    size: 512,
                },
                //file_system_config: {},
                environment: {
                    variables: {
                        FOO: 'bar',
                    },
                },
            },
        },
    },
})

//const out = {
//    policy_doc,
//    role,
//    bucket,
//    lambda,
//}

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

const compile = config(provider, terraform)
const out = compile(lambda({ name: 'pig' }), 'main.tf.json')
console.log(out)

/**design
 * any module should return an array with two values:
 * 1: an object which contains data/resources
 * 2: the output thunks for the values needed by other modules
 */
const exampleModule = (name): { [key: string]: AWS } => ({
    [`${name}-lambda`]: {
        resource: {
            iam_role: {
                assume_role_policy: () => my_policy.data?.iam_policy_document?.json,
            },
        },
    },
})

const sage: AWS = {
    resource: {
        sagemaker_user_profile: {
            domain_id: 'd-1234567890',
            single_sign_on_user_value: '1234567890',
            user_profile_name: 'throwaway-user-profile',
            user_settings: {
                // this section is one of 28 properties that is not currently captured by the registry
                canvas_app_settings: {
                    model_register_settings: {
                        //cross_account_model_register_role_arn: () => role.resource?.iam_role?.arn,
                    },
                },
            },
        },
    },
}

const secret: AWS = {
    resource: {
        secretsmanager_secret: {
            arn: '',
        },
    },
}
