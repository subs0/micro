import { modulate, config, Provider, Terraform } from '../src/config'
import { AWS05200 as AWS } from '../registry/index'

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

//  ,e,
//   "    /~~~8e  888-~88e-~88e
//  888       88b 888  888  888
//  888  e88~-888 888  888  888
//  888 C888  888 888  888  888
//  888  "88_-888 888  888  888

/**
 * The following type customizations provide an example of how to modify a block
 * to allow for Array values in addition to default interfaces...
 *
 * reference blog [1]
 */
type AWSData = NonNullable<AWS['data']>
type IamPolicyDocument = NonNullable<AWSData['iam_policy_document']>
type Statement = NonNullable<IamPolicyDocument['statement']>
interface Statements extends Statement {
    [index: number]: Statement
}
interface IamPolicyDocs extends IamPolicyDocument {
    statement: Statement | Statements
}
interface AWSDataColls extends AWSData {
    iam_policy_document: IamPolicyDocs
}
interface AWSColl extends AWS {
    data: AWSDataColls
}

const lambda_creds: AWS = {
    data: {
        iam_policy_document: {
            statement: {
                effect: 'Allow',
                actions: ['sts:AssumeRole'],
                principals: {
                    identifiers: ['lambda.amazonaws.com', 'apigateway.amazonaws.com'],
                    type: 'Service',
                },
            },
            json: '-->',
        },
    },
}

const lambda_role = ({ name, policy_json }): AWS => ({
    resource: {
        iam_role: {
            name: `-->${name}-role`,
            assume_role_policy: policy_json,
            arn: '-->',
        },
    },
})

const lambda_access_creds = ({
    bucket_name = '',
    topic_arn = '',
    cloudwatch_arn = '',
}): AWSColl => ({
    data: {
        iam_policy_document: {
            statement: [
                ...(bucket_name
                    ? [
                          {
                              effect: 'Allow',
                              actions: [
                                  's3:AbortMultipartUpload',
                                  's3:ListMultipartUploadParts',
                                  's3:ListBucketMultipartUploads',
                                  's3:PutObject',
                                  's3:GetObject',
                                  's3:DeleteObject',
                              ],
                              resources: [
                                  `arn:aws:s3:::${bucket_name}`,
                                  `arn:aws:s3:::${bucket_name}/*`,
                              ],
                          },
                      ]
                    : []),
                ...(topic_arn
                    ? [
                          {
                              effect: 'Allow',
                              actions: ['sns:Publish', 'sns:Subscribe'],
                              resources: [topic_arn],
                          },
                      ]
                    : []),
                ...(cloudwatch_arn
                    ? [
                          {
                              effect: 'Allow',
                              actions: [
                                  'logs:CreateLogGroup',
                                  'logs:CreateLogStream',
                                  'logs:PutLogEvents',
                              ],
                              resources: [`${cloudwatch_arn}:*`, `${cloudwatch_arn}:*:*`],
                          },
                      ]
                    : []),
            ],
            json: '-->',
        },
    },
})

const lambda_policy_attachment = ({ role_name, policy_arn }): AWS => ({
    resource: {
        iam_role_policy_attachment: {
            role: role_name,
            policy_arn,
        },
    },
})

const lambda_policy = ({ name, policy_json }): AWS => ({
    resource: {
        iam_policy: {
            name: `-->${name}-policy`,
            policy: policy_json,
            arn: '-->',
        },
    },
})

const lambda_invoke_cred = ({
    function_name,
    source_arn,
    principal = 'sns.amazonaws.com',
    statement_id = 'AllowExecutionFromSNS',
}): AWS => ({
    resource: {
        lambda_permission: {
            statement_id,
            action: 'lambda:InvokeFunction',
            function_name,
            principal,
            source_arn,
            /**
             * TODO: add qualifier?
             * (Optional) Query parameter to specify function version or alias
             * name. The permission will then apply to the specific qualified
             * ARN
             * e.g...
             */
            //qualifier: "arn:aws:lambda:aws-region:acct-id:function:function-name:2",
        },
    },
})

//          888                         888                            d8           888
//   e88~~\ 888  e88~-_  888  888  e88~\888 Y88b    e    /   /~~~8e  _d88__  e88~~\ 888-~88e
//  d888    888 d888   i 888  888 d888  888  Y88b  d8b  /        88b  888   d888    888  888
//  8888    888 8888   | 888  888 8888  888   Y888/Y88b/    e88~-888  888   8888    888  888
//  Y888    888 Y888   ' 888  888 Y888  888    Y8/  Y8/    C888  888  888   Y888    888  888
//   "88__/ 888  "88_-~  "88_-888  "88_/888     Y    Y      "88_-888  "88_/  "88__/ 888  888

const cloudwatch = ({ name, retention_in_days = 7 }): AWS => ({
    resource: {
        cloudwatch_log_group: {
            name: `/aws/lambda/${name}-log-group`,
            retention_in_days,
            arn: '-->',
        },
    },
})

//   d88~\ 888-~88e  d88~\
//  C888   888  888 C888
//   Y88b  888  888  Y88b
//    888D 888  888   888D
//  \_88P  888  888 \_88P

const sns_topic = (name): AWS => ({
    resource: {
        sns_topic: {
            name: `${name}-topic`,
            arn: '-->',
        },
    },
})

const subscription = ({
    topic_arn,
    lambda_arn,
    filter = {},
    scope = 'MessageAttributes',
}): AWS => ({
    resource: {
        sns_topic_subscription: {
            topic_arn,
            protocol: 'lambda',
            endpoint: lambda_arn,
            filter_policy: JSON.stringify(filter),
            filter_policy_scope: scope,
            subscription_role_arn: undefined, // only needed if protocol == 'firehose'
            arn: '-->',
        },
    },
})

//              88~\
//   e88~~8e  _888__  d88~\
//  d888  88b  888   C888
//  8888__888  888    Y88b
//  Y888    ,  888     888D
//   "88___/   888   \_88P

// reference [4]
// TODO
const efs: AWS = {
    resource: {
        efs_file_system: {
            arn: '-->',
            tags: {
                Source: 'Micro',
            },
        },
    },
}

const efs_access_point = ({ name, efs_arn }): AWS => ({
    resource: {
        efs_access_point: {
            file_system_id: 'TODO',
        },
    },
})

//         _-~88e
//   d88~\    888b
//  C888    __888"
//   Y88b     888e
//    888D    888P
//  \_88P  ~-_88"

const s3 = (name): AWS => ({
    resource: {
        s3_bucket: {
            bucket: `-->${name}-bucket`,
        },
    },
})

//  888                         888             888
//  888   /~~~8e  888-~88e-~88e 888-~88e   e88~\888   /~~~8e
//  888       88b 888  888  888 888  888b d888  888       88b
//  888  e88~-888 888  888  888 888  8888 8888  888  e88~-888
//  888 C888  888 888  888  888 888  888P Y888  888 C888  888
//  888  "88_-888 888  888  888 888-_88"   "88_/888  "88_-888

const lambda = ({
    name,
    //efs_arn,
    role_arn,
    file_path,
    env_vars = {},
    handler = 'handler.handler',
    runtime = 'python3.8',
}): AWS => ({
    resource: {
        lambda_function: {
            function_name: `-->lambda-${name}`,
            role: role_arn,
            runtime,
            handler,
            filename: file_path,
            //file_system_config: {
            //    arn: efs_arn,
            //    local_mount_path: '/mnt/efs',
            //},
            environment: {
                variables: env_vars,
            },
            arn: '-->',
            invoke_arn: '-->',
        },
    },
})

//                  888
//   d88~\ 888  888 888-~88e
//  C888   888  888 888  888b
//   Y88b  888  888 888  8888
//    888D 888  888 888  888P
//  \_88P  "88_-888 888-_88"

/**
 * micro service module
 *
 * @param name - name of the micro service
 * @param subdomain - subdomain of the micro service
 * @param file_path - path to the lambda function zip file
 * @param handler - name of the lambda handler function
 * @param env_vars - environment variables for the lambda function
 * @param filter - filter policy for sns subscription
 * @param my - self reference for referencing other resources
 *
 * @returns - micro service module
 *
 * @example
 * ```ts
 * const module = modulate({ ms1: microServiceModule })
 * const output = module({ name: 'throwaway-test-123', subdomain: 'bloop' })
 * const compiler = config(provider, terraform, 'main.tf.json')
 * const compiled = compiler(output)
 * ```
 */
export const microServiceModule = (
    {
        name = 'microservice',
        file_path = '${path.root}/lambdas/template/zipped/handler.py.zip',
        handler = 'handler.handler',
        filter = { type: ['type1', 'type2'] },
        env_vars = {},
    },
    my: { [key: string]: AWS }
) => ({
    //efs,
    lambda_creds,
    cloudwatch: cloudwatch({ name }),
    lambda_policy: lambda_policy({
        name: `${name}-policy`,
        policy_json: my?.lambda_access_creds?.data?.iam_policy_document?.json,
    }),
    lambda_role: lambda_role({
        name,
        policy_json: my?.lambda_creds?.data?.iam_policy_document?.json,
    }),
    lambda_policy_attachment: lambda_policy_attachment({
        policy_arn: my?.lambda_policy?.resource?.iam_policy?.arn,
        role_name: my?.lambda_role?.resource?.iam_role?.name,
    }),
    s3: s3(name),
    lambda: lambda({
        name,
        //efs_arn: my?.efs?.resource?.efs_file_system?.arn,
        role_arn: my?.lambda_role?.resource?.iam_role?.arn,
        file_path,
        handler,
        env_vars: {
            S3_BUCKET_NAME: my?.s3.resource?.s3_bucket?.bucket,
            ...(filter ? { SNS_TOPIC_ARN: my?.topic?.resource?.sns_topic?.arn } : {}),
            ...env_vars,
        },
    }),
    lambda_access_creds: lambda_access_creds({
        bucket_name: my?.s3.resource?.s3_bucket?.bucket,
        cloudwatch_arn: my?.cloudwatch.resource?.cloudwatch_log_group?.arn,
        topic_arn: filter ? my?.topic?.resource?.sns_topic?.arn : null,
    }),
    ...(filter
        ? {
              topic: sns_topic(name), // 📌 outside module scope?
              sns_invoke_cred: lambda_invoke_cred({
                  function_name: my?.lambda?.resource?.lambda_function?.function_name,
                  source_arn: my?.topic?.resource?.sns_topic?.arn,
                  principal: 'sns.amazonaws.com',
                  statement_id: 'AllowExecutionFromSNS',
              }),
              subscription: subscription({
                  topic_arn: my?.topic?.resource?.sns_topic?.arn,
                  lambda_arn: my?.lambda?.resource?.lambda_function?.arn,
                  filter,
              }),
          }
        : {}),
})

const module = modulate({ ms1: microServiceModule })

const [msOutput, msRefs] = module({ name: 'throwaway-test-123' })

const functionInvokeArn = msRefs?.lambda?.resource?.lambda_function?.invoke_arn

//                             d8              /~~~~~~ _-~88e
//  888-~\  e88~-_  888  888 _d88__  e88~~8e  /           888b
//  888    d888   i 888  888  888   d888  88b `-~~88e   __888"
//  888    8888   | 888  888  888   8888__888  /  888b    888e
//  888    Y888   ' 888  888  888   Y888    , |   888P    888P
//  888     "88_-~  "88_-888  "88_/  "88___/   \__88"  ~-_88"

// 🤔 only need one of these per domain... (not in module?)
const rout53_zone = ({ apex = 'chopshop-test.net' }): AWS => ({
    data: {
        route53_zone: {
            name: apex,
            zone_id: '-->',
        },
    },
})

/*
resource "aws_acm_certificate" "example" {
    domain_name = "example.com"
    validation_method = "DNS"
}

resource "aws_apigatewayv2_domain_name" "example" {
    domain_name = "example.com"
    domain_name_configuration {
        certificate_arn = aws_acm_certificate.example.arn
        endpoint_type = "REGIONAL"
    }
}
*/
// 🤔 only need one of these per domain... (not in module?)
const acm_cert = ({ subdomain, apex = 'chopshop-test.net' }): AWS => ({
    resource: {
        acm_certificate: {
            domain_name: apex,
            validation_method: 'DNS',
            subject_alternative_names: [`${subdomain}.${apex}`],
            tags: {
                BroughtToYouBy: '@-0/micro',
            },
            // @ts-ignore -> terraform meta argument (not in docs)
            lifecycle: {
                create_before_destroy: true,
            },
            arn: '-->',
        },
    },
})

const acm_validation = ({ cert_arn }): AWS => ({
    resource: {
        acm_certificate_validation: {
            certificate_arn: cert_arn,
        },
    },
})

//const route53_record_valid = { name, zone_id }

// FIXME (missing tick_groups - top three)
const route53_record = ({ name, route53_zone_id, api_domain_name, api_hosted_zone_id }): AWS => ({
    resource: {
        route53_record: {
            name,
            // @ts-ignore 🐛 missing docs
            zone_id: route53_zone_id,
            // 🐛 missing docs
            type: 'A',
            alias: {
                name: api_domain_name,
                zone_id: api_hosted_zone_id,
                evaluate_target_health: false,
            },
            //depends_on,
        },
    },
})

//                      ,e,
//    /~~~8e  888-~88e   "
//        88b 888  888b 888
//   e88~-888 888  8888 888
//  C888  888 888  888P 888
//   "88_-888 888-_88"  888
//            888

const api_domain = ({ subdomain = 'api', apex = 'chopshop-test.net', cert_arn }): AWS => ({
    resource: {
        apigatewayv2_domain_name: {
            domain_name: `${subdomain}.${apex}`,
            /**
             * Block type "domain_name_configuration" is represented by a list
             * of objects, so it must be indexed using a numeric key, like
             * .domain_name_configuration[0]
             *
             * FIXME?
             */
            // @ts-ignore
            domain_name_configuration: [
                {
                    certificate_arn: cert_arn,
                    endpoint_type: 'REGIONAL',
                    security_policy: 'TLS_1_2',
                    target_domain_name: '-->',
                    hosted_zone_id: '-->',
                },
            ],
            tags: {
                Name: `${subdomain}.${apex}`,
                BroughtToYouBy: '@-0/micro',
            },
        },
    },
})

const api_gateway = ({ name }): AWS => ({
    resource: {
        apigatewayv2_api: {
            name,
            description: `api for ${name}`,
            disable_execute_api_endpoint: false,
            protocol_type: 'HTTP',
            cors_configuration: {
                allow_headers: [
                    'content-type',
                    'x-amz-date',
                    'authorization',
                    'x-api-key',
                    'x-amz-security-token',
                    'x-amz-user-agent',
                ],
                allow_methods: ['*'],
                allow_origins: ['*'],
                max_age: 300,
            },
            api_endpoint: '-->',
            execution_arn: '-->',
            id: '-->',
        },
    },
})

const api_stage = ({ api_id, name = '$default' }): AWS => ({
    resource: {
        apigatewayv2_stage: {
            api_id,
            name,
            auto_deploy: true,
            description: `stage ${name} API`,
        },
    },
})

// TODO: https://github.com/terraform-aws-modules/terraform-aws-apigateway-v2/blob/master/main.tf

const api_lambda_integration = ({ api_id, lambda_invoke_arn }): AWS => ({
    resource: {
        apigatewayv2_integration: {
            api_id,
            integration_uri: lambda_invoke_arn,
            integration_type: 'AWS_PROXY',
            integration_method: 'POST',
            connection_type: 'INTERNET',
            payload_format_version: '2.0',
            timeout_milliseconds: 29000, // 30 sec max for HTTP, 29 for WebSockets
            id: '-->',

            // 🐛🐛 [3] bug in docs (nested under section without heading)
            status_code: undefined,
            mappings: undefined,
        },
    },
})

const api_route = ({ api_id, route_key = 'ANY /', integration_id }): AWS => ({
    resource: {
        apigatewayv2_route: {
            api_id,
            route_key,
            target: `integrations/${integration_id}`,
            id: '-->',

            //authorization_scopes: 'TODO',
            //authorization_type: 'TODO',
            //authorizer_id: 'TODO'

            // 🐛🐛 [2] bug in docs (nested under section without heading)
            request_parameter_key: undefined,
            required: undefined,
        },
    },
})

interface Subdomains {
    /** subdomain name (e.g., "api")*/
    [key: string]: {
        /** route (e.g., "GET /") */
        [key: string]: {
            invoke_arn: string
        }
    }
}
/**
 * subdomains module
 *
 * @param apex - apex domain name
 * @param subdomains - array of subdomains
 * - name - name of the subdomain
 * - lambda_integration - lambda integration object
 *   - lambda_invoke_arn - arn of the lambda function to integrate
 * - routes - array of routes
 *   - route object
 *     - route_key - route key
 *     - integration_id - id of the integration to use
 * @param my - self reference for referencing other resources
 *
 */
const subdomains = (
    {
        apex = 'chopshop-test.net',
        subdomainRoutes = {
            // TODO add a bunch of defaults to cover many use cases
            test: {
                'ANY /': {
                    invoke_arn: 'lambda_invoke_arn goes here 📌',
                },
            },
            test2: {
                'GET /': {
                    invoke_arn: 'lambda_invoke_arn goes here 📌',
                },
            },
        },
    }: {
        apex: string
        subdomainRoutes: Subdomains
    },
    my: { [key: string]: AWS }
) => ({
    zone: rout53_zone({ apex }),
    ...Object.entries(subdomainRoutes).reduce(
        (a, [subdomain, routes], i) => ({
            ...a,
            [`cert_${i}`]: acm_cert({ apex, subdomain }),
            [`validation_${i}`]: acm_validation({
                cert_arn: my?.[`cert_${i}`]?.resource?.acm_certificate?.arn,
            }), // TODO
            [`domain_${i}`]: api_domain({
                subdomain,
                apex,
                cert_arn: my?.[`cert_${i}`]?.resource?.acm_certificate?.arn,
            }),
            [`record_${i}`]: route53_record({
                name: subdomain,
                api_domain_name:
                    my?.[`domain_${i}`]?.resource?.apigatewayv2_domain_name
                        ?.domain_name_configuration[0]?.target_domain_name,
                api_hosted_zone_id:
                    my?.[`domain_${i}`]?.resource?.apigatewayv2_domain_name
                        ?.domain_name_configuration[0]?.hosted_zone_id,
                route53_zone_id: my?.zone?.data?.route53_zone?.zone_id,
            }),
            [`gateway_${i}`]: api_gateway({ name: subdomain }),
            [`stage_${i}`]: api_stage({
                api_id: my?.[`gateway_${i}`]?.resource?.apigatewayv2_api?.id,
            }),
            ...Object.entries(routes).reduce(
                (acc, [route, { invoke_arn }], idx) => ({
                    ...acc,
                    [`integration_${i}_${idx}`]: api_lambda_integration({
                        api_id: my?.[`gateway_${i}`]?.resource?.apigatewayv2_api?.id,
                        lambda_invoke_arn: invoke_arn,
                    }),
                    [`route_${i}_${idx}`]: api_route({
                        api_id: my?.[`gateway_${i}`]?.resource?.apigatewayv2_api?.id,
                        route_key: route,
                        integration_id:
                            my?.[`integration_${i}_${idx}`]?.resource?.apigatewayv2_integration?.id,
                    }),
                }),
                {}
            ),
        }),
        {}
    ),
})

const moduleAPI = modulate({ subdomains })

const [apiOutput, apiRefs] = moduleAPI({
    apex: 'chopshop-test.net',
    subdomainRoutes: {
        test1: {
            'ANY /': {
                invoke_arn: functionInvokeArn,
            },
        },
    },
})
JSON.stringify(apiRefs, null, 4) //
JSON.stringify(apiOutput, null, 4) //

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
const compiler = config(provider, terraform, 'main.tf.json')
const compiled = compiler(msOutput, apiOutput)

JSON.stringify(compiled, null, 4) //?

/**
 * References:
 * [1]: https://dev.to/madflanderz/how-to-get-parts-of-an-typescript-interface-3mko
 * [2]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_route#argument-reference
 * [3]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_integration#response_parameters
 * [4]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_function#lambda-file-systems
 */


/*

TODO:

====================================================================================================


Error: creating API Gateway v2 Domain Name (test1.chopshop-test.net):
BadRequestException: Certificate
arn:aws:acm:us-east-2:477330550029:certificate/9bd98d56-a6d4-4e42-8cda-1ef4d3531202
in account 477330550029 not yet issued (Service: AWSCertificateManager; Status
Code: 400; Error Code: RequestInProgressException; Request ID:
87cc920e-f098-486e-80a1-7c3bfe52927c; Proxy: null)

with aws_apigatewayv2_domain_name.subdomains_domain_0, on main.tf.json line 169,
in resource.aws_apigatewayv2_domain_name.subdomains_domain_0: 169:       }


====================================================================================================

*/