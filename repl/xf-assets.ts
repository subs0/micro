import { AWS } from '../registry/index'
import { compile, aws_$ } from '../src/xf-assets'

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

const bucket: AWS = {
    resource: {
        s3_bucket: {
            bucket: 'throwaway-bucket-pqewur',
        },
    },
}

const policy_doc: AWS = {
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

enum ArgsAttrs {
    args = 'args',
    attrs = 'attrs',
}

type Module = {
    args: { [key: string]: AWS }
    arn: () => () => { [key: string]: AWS }
}

const roleNamer = (name: string) => `${name}_role`
const gen_role = (name: string): { [key: string]: AWS } => ({
    [roleNamer(name)]: {
        resource: {
            iam_role: {
                name: `${name}-role`,
                assume_role_policy: () => policy_doc.data?.iam_policy_document?.json,
                arn: roleNamer(name), // -> export
            },
        },
    },
})

//const pack =

const lambda = ({
    name = 'throwaway',
    handler = 'handler.handler',
    path = 'lambdas/template/zipped/handler.py.zip',
    runtime = 'python3.8',
}): { [key: string]: AWS } => ({
    policy_doc,
    ...gen_role(name),
    [`${name}_lambda`]: {
        resource: {
            lambda_function: {
                function_name: name,
                role: (_: any) => gen_role(name)[roleNamer(name)].resource?.iam_role?.arn,
                description: `A ${name.split('_').join(' ')} lambda`,
                filename: path, // 📦 must be a zip: do this in a script before JIT
                handler,
                runtime,
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
                assume_role_policy: () => policy_doc.data?.iam_policy_document?.json,
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
            region: 'us-east-1',
        },
    },
}
