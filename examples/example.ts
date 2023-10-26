import { modulate, config, Provider, Terraform } from '../src/config'
import { AWS05200 as AWS } from '../registry/index'
import { lambda } from './lambda'
import { subdomains } from './api'

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

/**
 *
 * my?.zone?.data?.route53_zone?.zone_id
 */

const module = modulate({ ms1: lambda })

const [mod_lambda, out_lambda] = module({ name: 'throwaway-test-123' })

const functionInvokeArn = out_lambda?.lambda?.resource?.lambda_function?.invoke_arn

const moduleAPI = modulate({ subdomains })

const [mod_api, out_api] = moduleAPI({
    apex: 'chopshop-test.net',
    subdomainRoutes: {
        test1: {
            'ANY /': {
                invoke_arn: functionInvokeArn,
            },
        },
    },
})

//                                           ,e, 888                 888
//   e88~~\  e88~-_  888-~88e-~88e 888-~88e   "  888  e88~~8e   e88~\888
//  d888    d888   i 888  888  888 888  888b 888 888 d888  88b d888  888
//  8888    8888   | 888  888  888 888  8888 888 888 8888__888 8888  888
//  Y888    Y888   ' 888  888  888 888  888P 888 888 Y888    , Y888  888
//   "88__/  "88_-~  888  888  888 888-_88"  888 888  "88___/   "88_/888
//                                 888

JSON.stringify(out_api, null, 4) //
JSON.stringify(mod_api, null, 4) //

const compiler = config(provider, terraform, 'main.tf.json')
const compiled = compiler(mod_lambda, mod_api)

JSON.stringify(compiled, null, 4) //?

/**
 * References:
 * [1]: https://dev.to/madflanderz/how-to-get-parts-of-an-typescript-interface-3mko
 * [2]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_route#argument-reference
 * [3]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_integration#response_parameters
 * [4]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_function#lambda-file-systems
 */

// ~~~888~~~   ,88~-_   888~-_     ,88~-_
//    888     d888   \  888   \   d888   \
//    888    88888    | 888    | 88888    |
//    888    88888    | 888    | 88888    |
//    888     Y888   /  888   /   Y888   /
//    888      `88_-~   888_-~     `88_-~

// - add ability to add tags at the module level
// - missing tick_groups - (top three) in route53_record
// - EFSAccessPoint - missing `file_system_arn` (not in docs)
// - resource: { lambda_function: { file_system_config
// - topic: sns_topic(name), // 📌 outside module scope?
// - apigatewayv2_route 🐛 [2] `request_parameter_key` and `required` bug in docs (nested under section without heading)
// - apigatewayv2_integration: 🐛 [3] `status_code` and `mappings` bug in docs (nested under section without heading)

/*
================================================================================


Error: 1 error occurred:
* missing test1.chopshop-test.net DNS validation record:
  _1c744958449a294d63143074447592fa.test1.chopshop-test.net

with aws_acm_certificate_validation.subdomains_validation_test1, on main.tf.json
line 198, in
resource.aws_acm_certificate_validation.subdomains_validation_test1: 198:
}

================================================================================
*/

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
