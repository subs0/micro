import { modulate, config, Provider, Terraform } from '../src/config'
import { lambda } from './lambda'
import { subdomains } from './api'
import { route53_zone } from './route53'
import { sns_topic } from './sns'

const apex = 'chopshop-test.net'
const name = 'throwaway-test-123'
const tags = { Moms: 'Spaghetti' }

//        888                                  ,e,
//   e88~\888  e88~-_  888-~88e-~88e   /~~~8e   "  888-~88e
//  d888  888 d888   i 888  888  888       88b 888 888  888
//  8888  888 8888   | 888  888  888  e88~-888 888 888  888
//  Y888  888 Y888   ' 888  888  888 C888  888 888 888  888
//   "88_/888  "88_-~  888  888  888  "88_-888 888 888  888

const route53zone = ({ apex }) => ({
    zone: route53_zone({ apex }),
})
const [mod_zone, out_zone] = modulate({ zone: route53zone })({ apex })
const zone_id = out_zone?.zone?.data?.route53_zone?.zone_id //?

//   d8                      ,e,
// _d88__  e88~-_  888-~88e   "   e88~~\
//  888   d888   i 888  888b 888 d888
//  888   8888   | 888  8888 888 8888
//  888   Y888   ' 888  888P 888 Y888
//  "88_/  "88_-~  888-_88"  888  "88__/
//                 888

const snsTopic = ({ name, tags }) => ({
    topic: sns_topic({ name, tags }),
})
const [mod_sns, out_sns] = modulate({ sns: snsTopic })({ name, tags })
const topic_arn = out_sns?.topic?.resource?.sns_topic?.arn //?

//  888                         888             888
//  888   /~~~8e  888-~88e-~88e 888-~88e   e88~\888   /~~~8e
//  888       88b 888  888  888 888  888b d888  888       88b
//  888  e88~-888 888  888  888 888  8888 8888  888  e88~-888
//  888 C888  888 888  888  888 888  888P Y888  888 C888  888
//  888  "88_-888 888  888  888 888-_88"   "88_/888  "88_-888

const lambdaMod = modulate({ ms1: lambda })
const [mod_lambda, out_lambda] = lambdaMod({
    name,
    file_path: '${path.root}/lambdas/template/zipped/handler.py.zip',
    handler: 'handler.handler',
    sns: {
        upstream: {
            topic_arn,
            filter_policy: {
                test: ['test'],
            },
        },
        downstream: {
            topic_arn,
            message_attrs: {},
        },
    },
    tags,
})
const functionInvokeArn = out_lambda?.lambda?.resource?.lambda_function?.invoke_arn
const functionName = out_lambda?.lambda?.resource?.lambda_function?.function_name

//                      ,e,
//    /~~~8e  888-~88e   "
//        88b 888  888b 888
//   e88~-888 888  8888 888
//  C888  888 888  888P 888
//   "88_-888 888-_88"  888
//            888

const [mod_api, out_api] = modulate({ subdomains })({
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

//                                           ,e, 888                 888
//   e88~~\  e88~-_  888-~88e-~88e 888-~88e   "  888  e88~~8e   e88~\888
//  d888    d888   i 888  888  888 888  888b 888 888 d888  88b d888  888
//  8888    8888   | 888  888  888 888  8888 888 888 8888__888 8888  888
//  Y888    Y888   ' 888  888  888 888  888P 888 888 Y888    , Y888  888
//   "88__/  "88_-~  888  888  888 888-_88"  888 888  "88___/   "88_/888
//                                 888

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
const compiled = compile(mod_zone, mod_sns, mod_lambda, mod_api)

//JSON.stringify(out_api, null, 4) //
//JSON.stringify(mod_api, null, 4) //
JSON.stringify(compiled, null, 4) //?

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
