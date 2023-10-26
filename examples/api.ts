import { modulate, config, Provider, Terraform } from '../src/config'
import { AWS05200 as AWS } from '../registry/index'

import { rout53_zone, acm_cert, route53_record, acm_validation } from './route53'

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

const api_lambda_integration = ({ api_id, lambda_invoke_arn }): AWS => ({
    resource: {
        // @ts-ignore: 🐛 [3]
        apigatewayv2_integration: {
            api_id,
            integration_uri: lambda_invoke_arn,
            integration_type: 'AWS_PROXY',
            integration_method: 'POST',
            connection_type: 'INTERNET',
            payload_format_version: '2.0',
            timeout_milliseconds: 29000, // 30 sec max for HTTP, 29 for WebSockets
            id: '-->',
        },
    },
})

const api_route = ({ api_id, route_key = 'ANY /', integration_id }): AWS => ({
    resource: {
        // @ts-ignore: 🐛 [2]
        apigatewayv2_route: {
            api_id,
            route_key,
            target: `integrations/${integration_id}`,
            id: '-->',

            //authorization_scopes: 'TODO',
            //authorization_type: 'TODO',
            //authorizer_id: 'TODO'
        },
    },
})

interface Subdomains {
    [key: string]: {
        [key: string]: {
            invoke_arn: string
        }
    }
}
//                               888          888                  /~~88b
//  888-~88e-~88e  e88~-_   e88~\888 888  888 888  e88~~8e        |   888
//  888  888  888 d888   i d888  888 888  888 888 d888  88b       `  d88P
//  888  888  888 8888   | 8888  888 888  888 888 8888__888         d88P
//  888  888  888 Y888   ' Y888  888 888  888 888 Y888    ,        d88P
//  888  888  888  "88_-~   "88_/888 "88_-888 888  "88___/        d88P___

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
export const subdomains = (
    {
        apex = 'chopshop-test.net',
        subdomainRoutes = {
            test: {
                'ANY /': {
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
    zone: rout53_zone({ apex }), // 📌 outside module scope?
    ...Object.entries(subdomainRoutes).reduce(
        (a, [sd, routes]) => ({
            ...a,
            [`cert_${sd}`]: acm_cert({ apex, subdomain: sd }),
            [`domain_${sd}`]: api_domain({
                subdomain: sd,
                apex,
                cert_arn:
                    my?.[`validation_${sd}`]?.resource?.acm_certificate_validation?.certificate_arn,
            }),
            [`record_${sd}`]: route53_record({
                route53_zone_id: my?.zone?.data?.route53_zone?.zone_id,
                name: sd,
                api_domain_name:
                    my?.[`domain_${sd}`]?.resource?.apigatewayv2_domain_name
                        ?.domain_name_configuration[0]?.target_domain_name,
                api_hosted_zone_id:
                    my?.[`domain_${sd}`]?.resource?.apigatewayv2_domain_name
                        ?.domain_name_configuration[0]?.hosted_zone_id,
            }),
            [`record_valid_${sd}`]: route53_record({
                route53_zone_id: my?.zone?.data?.route53_zone?.zone_id,
                records: [
                    my?.[`cert_${sd}`]?.resource?.acm_certificate?.domain_validation_options[0]
                        ?.resource_record_value,
                ],
                name: my?.[`cert_${sd}`]?.resource?.acm_certificate?.domain_validation_options[0]
                    ?.resource_record_name,
                type: my?.[`cert_${sd}`]?.resource?.acm_certificate?.domain_validation_options[0]
                    ?.resource_record_type,
            }),
            [`validation_${sd}`]: acm_validation({
                cert_arn: my?.[`cert_${sd}`]?.resource?.acm_certificate?.arn,
                fqdns: [my?.[`record_valid_${sd}`]?.resource?.route53_record?.fqdn],
            }), // TODO
            [`gateway_${sd}`]: api_gateway({ name: sd }),
            [`stage_${sd}`]: api_stage({
                api_id: my?.[`gateway_${sd}`]?.resource?.apigatewayv2_api?.id,
            }),
            ...Object.entries(routes).reduce(
                (acc, [route, { invoke_arn }]) => ({
                    ...acc,
                    [`integration_${sd}_${route.split(' ')[0]}`]: api_lambda_integration({
                        api_id: my?.[`gateway_${sd}`]?.resource?.apigatewayv2_api?.id,
                        lambda_invoke_arn: invoke_arn,
                    }),
                    [`route_${sd}_${route.split(' ')[0]}`]: api_route({
                        api_id: my?.[`gateway_${sd}`]?.resource?.apigatewayv2_api?.id,
                        route_key: route,
                        integration_id:
                            my?.[`integration_${sd}_${route.split(' ')[0]}`]?.resource
                                ?.apigatewayv2_integration?.id,
                    }),
                }),
                {}
            ),
        }),
        {}
    ),
})
