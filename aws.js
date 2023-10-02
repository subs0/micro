/*
the state will be held in a single @thi.ng/atom

if the key is a string, it will be used as the resource name
if the value is a string, it will be matched against a variety of cases
    - 'string' = take the value as-is
    - 'number' = take the value as-is
    - 'boolean' = take the value as-is
    - 'object' = take the value as-is
    - 'array' = take the value as-is
if the value is a function, it will be called with the root atom value and the return value will be wrapped in '${...}'

*/
export const schema = {
    resource: {
        aws_lambda_function: {
            NAME: {
                function_name: 'string',
                handler: 'string',
                runtime: 'string',
                memory_size: 'number',
                timeout: 'number',
                role: 'string',
                environment: 'object',
                vpc_config: 'object',
                layers: 'array',
            },
        },
    },
    data: {
        aws_iam_policy_document: {
            NAME: {},
        },
    },
}

schema.resource.aws_lambda_function.NAME.environment = { hello: 'world' }

console.log(schema)
