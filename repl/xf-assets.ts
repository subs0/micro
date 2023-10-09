import { test } from 'quicktype-core/dist/MarkovChain'
import { TerraformProviderAwsLatest } from '../registry/index'
import { flattenPreservingKeyPaths, compile } from 'src/xf-assets'

const test_policy: TerraformProviderAwsLatest = {
    data: {
        iam_policy: {
            policy: JSON.stringify({
                Version: '2012-10-17',
                Statement: [
                    {
                        Effect: 'Allow',
                        Action: [
                            'logs:CreateLogGroup',
                            'logs:CreateLogStream',
                            'logs:PutLogEvents',
                        ],
                        Resource: 'arn:aws:logs:*:*:*',
                    },
                ],
            }),
        },
    },
}
const lambda1_role: TerraformProviderAwsLatest = {
    resource: {
        iam_role: {
            name: 'lambda-role',
            description: 'Role for lambda',
            assume_role_policy: () => test_policy.data?.iam_policy?.policy,
        },
    },
}
const lambda1: TerraformProviderAwsLatest = {
    resource: {
        lambda_function: {
            function_name: 'something',
            role: () => lambda1_role.resource?.iam_role?.arn,
        },
    },
}

const lambda2: TerraformProviderAwsLatest = {
    resource: {
        lambda_function: {
            function_name: 'yet-another-thing',
            role: 'arn:aws:iam::123456789012:role/lambda-role',
        },
    },
}

const apigw1: TerraformProviderAwsLatest = {
    resource: {
        apigatewayv2_api: {
            name: 'my-api',
            protocol_type: 'HTTP',
            route_selection_expression: '$request.method $request.path',
            target: () => test_data.data?.lambda_function?.arn,
        },
    },
}

const test_data: TerraformProviderAwsLatest = {
    data: {
        lambda_function: {
            function_name: () => lambda1.resource?.lambda_function?.function_name,
            arn: () => lambda1.resource?.lambda_function?.arn,
        },
    },
}

/**
 * modules are just objects (or factory functions - which can provide inputs to
 * nested resources) with unique keys representing the contents of the module.
 * module names are combined with the contents to produce unique keys for each resource.
 * order is preserved for string keys since es6/2015. However, arrays of objects
 * can also be used to force order.
 */
const out = {
    lambda1_role,
    lambda1,
    lambda2,
    apigw1,
    test_data,
}

console.log({ out })

console.log('flattenPreservingKeyPaths({out}):', flattenPreservingKeyPaths({ out }))

compile({ out }, '../main.tf.json')
/**
 * Step 1: recurse through object and find thunks (TB stringified and xfd)
 * Step 2: transform objects to inject the asset name into their path at the right place
 * Step 3: test with `terraform plan`
 * Step 4: migrate some modules from terraform aws modules library
 *  - lambda
 *      - efs
 *      - env vars
 *  - api gw v2
 *  - s3
 *  - sns
 * Step 5: test with bundler (@-0/build-lambda-py)
 */
