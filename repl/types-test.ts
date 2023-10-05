import { TerraformProviderAws } from '../registry/types/terraform-provider-aws/types'

const test: TerraformProviderAws = {
    resource: {
        lambda_function: {
            function_name: 'something',
            role: 'another thing',
        },
    },
}
