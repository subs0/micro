import {
    Data,
    Resource,
    TerraformProviderAws,
} from '../registry/types/terraform-provider-aws/types_augmented'

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
        role: 'arn:aws:iam::123456789012:role/lambda-role',
        snap_start: {
            apply_on: 'PublishedVersions',
        },
    },
}

const data: Data = {
    lambda_function: {
        function_name: 'something',
    },
}
