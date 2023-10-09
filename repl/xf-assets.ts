import { test } from 'quicktype-core/dist/MarkovChain'
import { TerraformProviderAws } from '../registry/index'
import { flattenPreservingKeyPaths } from 'src/xf-assets'

const lambda1: TerraformProviderAws = {
    resource: {
        lambda_function: {
            function_name: 'something',
            role: 'another thing',
        },
    },
}

const lambda2: TerraformProviderAws = {
    resource: {
        lambda_function: {
            function_name: 'yet-another-thing',
            role: 'arn:aws:iam::123456789012:role/lambda-role',
        },
    },
}

const apigw1: TerraformProviderAws = {
    resource: {
        apigatewayv2_api: {
            name: 'my-api',
            protocol_type: 'HTTP',
            route_selection_expression: '$request.method $request.path',
            target: () => test_data.data?.lambda_function?.arn,
        },
    },
}

const test_data: TerraformProviderAws = {
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
    lambda1,
    lambda2,
    apigw1,
    test_data,
}

console.log({ out })

console.log('flattenPreservingKeyPaths({out}):', flattenPreservingKeyPaths({ out, lambda1 }))

const test = flattenPreservingKeyPaths({ out, lambda1 })

const lambda1arn = test

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
