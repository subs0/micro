import {
    Data,
    Resource,
    TerraformProviderAws,
} from '../registry/types/terraform-provider-aws/types'

const test: TerraformProviderAws = {
    resource: {
        lambda_function: {
            function_name: 'something',
            role: 'another thing',
        },
    },
}

const resource: Resource = {
    lambda_function: {
        function_name: 'something',
        role: 'TODO: add comments to QT lines and change type to any',
    },
}

const data: Data = {
    lambda_function: {
        function_name: 'something',
    },
}
