import { modulate, config, micro, api, topic, zone } from '../src/index'
import type { Provider, Terraform } from '../src/constants'
import { MsgAttrsDataType } from '../src/modules/lambda'

const apex = 'chopshop-test.net'
const name = 'throwaway-test-123'
const tags = { Moms: 'Spaghetti' }

// ======= DOMAIN =======

const route53zone = ({ apex }) => ({
    zone: zone({ apex }),
})
const [mod_zone, out_zone] = modulate({ domain: route53zone })({ apex })
const zone_id = out_zone?.zone?.data?.route53_zone?.zone_id //

// ======= TOPIC =======

const snsTopic = ({ name, tags }) => ({
    sns: topic({ name, tags }),
})
const [mod_topic, out_topic] = modulate({ topic: snsTopic })({ name, tags })
const topic_arn = out_topic?.sns?.resource?.sns_topic?.arn //

// ======= LAMBDA =======

const lambdaMod = modulate({ ms1: micro })
const [mod_lambda, out_lambda] = lambdaMod({
    name,
    file_path: '${path.root}/lambdas/template/zipped/handler.py.zip',
    handler: 'handler.handler',
    sns: {
        upstream: {
            topic_arn,
            filter_policy: {
                type: ['video'],
            },
        },
        downstream: {
            topic_arn,
            message_attrs: {
                type: {
                    DataType: MsgAttrsDataType.STRING,
                    StringValue: 'audio',
                },
            },
        },
    },
    tags,
})
const functionInvokeArn = out_lambda?.lambda?.resource?.lambda_function?.invoke_arn
const functionName = out_lambda?.lambda?.resource?.lambda_function?.function_name

// ======= API =======

const [mod_api, out_api] = modulate({ api })({
    apex,
    zone_id,
    subdomainRoutes: {
        test1: {
            'ANY /': {
                invoke_arn: functionInvokeArn,
                function_name: functionName,
            },
        },
    },
    tags,
})

// ======= COMPILE =======

const provider: Provider = {
    aws: {
        region: 'us-east-2',
        profile: 'chopshop',
    },
}

const terraform: Terraform = {
    required_providers: {
        aws: {
            source: 'hashicorp/aws',
            version: '5.20.0',
        },
    },
}

const compile = config(provider, terraform, 'main.tf.json')
const modules = [mod_zone, mod_topic, mod_lambda, mod_api]
const compiled = compile(...modules)

//JSON.stringify(out_api, null, 4) //
//JSON.stringify(mod_api, null, 4) //
console.log(JSON.stringify(compiled, null, 4)) //?

// ~~~888~~~   ,88~-_   888~-_     ,88~-_
//    888     d888   \  888   \   d888   \
//    888    88888    | 888    | 88888    |
//    888    88888    | 888    | 88888    |
//    888     Y888   /  888   /   Y888   /
//    888      `88_-~   888_-~     `88_-~

// - edify S3 bucket permissions
// - missing tick_groups - (top three) in route53_record
// - resource: { lambda_function: { file_system_config
// - EFSAccessPoint - missing `file_system_arn` (not in docs)
// - apigatewayv2_route 🐛 [2] `request_parameter_key` and `required` bug in docs (nested under section without heading)
// - apigatewayv2_integration: 🐛 [3] `status_code` and `mappings` bug in docs (nested under section without heading)

/**
 * Outline of microservice module:
 * - s3
 *   - bucket
 * - sns
 *   - upstream topic (subscribed to by lambda)
 *   - downstream topic (published to by lambda)
 * - lambda
 *   - environment variables
 *     - S3_BUCKET_NAME (for functions that need to read/write to s3)
 *     - SNS_TOPIC_ARN (downstream topic to publish to sns)
 *   - sns subscription (upstream topic)
 *     - filter policy
 *   - elastic file system (optional)
 *     - access point
 *     - mount target
 * - api gateway (optional)
 *   - domain
 *     - subdomain
 *       - routes
 *         - methods
 * - required iam permissions
 *   - lambda
 *     - s3
 *       - read/write
 *     - sns
 *       - publish
 *       - subscribe
 *     - cloudwatch
 *       - logs
 *       - metrics
 *   - sns
 *     - lambda (via AllowExecutionFromSNS)
 *   - api gateway (optional)
 *     - lambda (via AllowExecutionFromAPIGateway)
 */

/**
 * References:
 * [1]: https://dev.to/madflanderz/how-to-get-parts-of-an-typescript-interface-3mko
 * [2]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_route#argument-reference
 * [3]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_integration#response_parameters
 * [4]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_function#lambda-file-systems
 */
