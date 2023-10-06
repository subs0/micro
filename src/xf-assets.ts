import { TerraformProviderAws } from '../registry/index'

const lambda: TerraformProviderAws = {
    resource: {
        lambda_function: {
            function_name: 'something',
            role: 'another thing',
        },
    },
}

const testout = lambda.resource?.lambda_function?.arn

const api: TerraformProviderAws = {
    resource: {
        apigatewayv2_api: {
            name: 'my-api',
            protocol_type: 'HTTP',
            route_selection_expression: '$request.method $request.path',
            target: () => lambda.resource?.lambda_function?.arn,
        },
    },
}

console.log(api)
/*

Next steps:
- consider how to handle nested duplicate keys (if any - inspect)
- develop `conformer` function:
    - reformat output payloads to conform to terraform JSON spec
        - from { name: { resource: { aws_lambda_function: { ... } } } } (ensures unique names)
        - to { resource: { aws_lambda_function: { name: { ... } } } }
        - or { resource: { aws_lambda_function: [ { name: { ... } } ] } }
        - while preserving the order of the keys (test both approaches)
    - generates the '${data.lambda_function.name.function_arn}' paths on call
- prepend '(Output only)' to all attrs value strings (tb comments)


 * { resource: { lambda_function: { logan: { arn: "${resource.lambda_function.logan.arn}" } } } }
 */

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
type NestedObject = { [key: string]: NestedObject | string }

/**
 * recursively stringifies any thunks
 */
const thunkStringifier = (obj: object) => {
    const recurse = (target: object): NestedObject =>
        Object.entries(target).reduce((a, c) => {
            const [k, v] = c
            if (typeof v === 'function') {
                console.log('function found:', k)
                return { ...a, [k]: v + '' }
            } else if (typeof v === 'object') {
                return { ...a, [k]: recurse(v) }
            } else {
                return { ...a, [k]: v }
            }
        }, {})
    return recurse(obj)
}

const test = thunkStringifier(api) //?
console.log(test)
/* run with bun =>
{
  resource: {
    apigatewayv2_api: {
      name: "my-api",
      protocol_type: "HTTP",
      route_selection_expression: "$request.method $request.path",
      target: "() => lambda.resource?.lambda_function?.arn"
    }
  }
}
*/
