import { AWS } from '../registry/index'
import { flattenPreservingKeyPaths, compile } from 'src/xf-assets'

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

const role: AWS = {
    resource: {
        iam_role: {
            name: 'throwaway-role',
            assume_role_policy: () => policy_doc.data?.iam_policy_document?.json,
        },
    },
}

const bucket: AWS = {
    resource: {
        s3_bucket: {
            bucket: 'throwaway-bucket',
        },
    },
}

const lambda: AWS = {
    resource: {
        lambda_function: {
            function_name: 'throwaway-lambda',
            role: () => role.resource?.iam_role?.arn,
            description: 'A throwaway lambda',
            // 📦 must be a zip: do this in a script before JIT
            filename: '${path.module}/lambdas/template/zipped/handler.py.zip',
            handler: 'handler.handler',
            runtime: 'python3.8',
            environment: {
                variables: {
                    FOO: 'bar',
                    S3_BUCKET: () => bucket.resource?.s3_bucket?.bucket,
                },
            },
        },
    },
}

const out = {
    policy_doc,
    role,
    bucket,
    lambda,
}

console.log('flattenPreservingKeyPaths({out}):', flattenPreservingKeyPaths({ out }))

compile({ out }, 'main.tf.json')

/** TODOs:
 * - [x]: recurse through object and find thunks (TB stringified and xfd)
 * - [x]: transform objects to inject the asset name into their path at the right place
 * - [x]: test with `terraform plan`
 * - [ ]: migrate some modules from terraform aws modules library
 *      - lambda
 *          - efs
 *          - env vars
 *      - api gw v2
 *      - s3
 *      - sns
 * - [ ]: test with bundler (@-0/build-lambda-py)
 */
