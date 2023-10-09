import { test } from 'quicktype-core/dist/MarkovChain'
import { TerraformProviderAwsLatest } from '../registry/index'
import { flattenPreservingKeyPaths, compile } from 'src/xf-assets'

const policy_doc: TerraformProviderAwsLatest = {
    data: {
        iam_policy_document: {
            statement: {
                effect: 'Allow',
                principals: {
                    type: 'Service',
                    identifiers: ['lambda.amazonaws.com'],
                },
                actions: ['sts:AssumeRole'],
            },
        },
    },
}

const role: TerraformProviderAwsLatest = {
    resource: {
        iam_role: {
            name: 'throwaway-role',
            assume_role_policy: () => policy_doc.data?.iam_policy_document?.json,
        },
    },
}

//const zip: TerraformProviderAwsLatest = {
//    data: {
//        archive_file: {
//            type: 'zip',
//            source_file: '${path.module}/lambdas/handler.py',
//            output_path: '${path.module}/lambdas/handler.zip',
//        },
//    },
//}

const lambda: TerraformProviderAwsLatest = {
    resource: {
        lambda_function: {
            function_name: 'throwaway-lambda',
            description: 'A throwaway lambda',
            role: () => role.resource?.iam_role?.arn,
            // 📦 must be a zip:
            filename: '${path.module}/lambdas/template/zipped/handler.py.zip',
            handler: 'handler.handler',
            runtime: 'python3.8',
            environment: {
                variables: {
                    FOO: 'bar',
                },
            },
        },
    },
}

const out = {
    policy_doc,
    role,
    //zip,
    lambda,
}

//console.log({ out })

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
