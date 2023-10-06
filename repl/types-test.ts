import { TerraformProviderAws } from '../registry'

const test: TerraformProviderAws = {
    resource: {
        lambda_function: {
            function_name: 'something',
            role: 'another thing',
        },
    },
}

const testout = test.resource?.lambda_function?.arn
