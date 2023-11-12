import { modulate } from '../config';
import { flag } from '../constants';
import { lambdaInvokeCred } from './lambda';
import { acmCertificate, route53Record, acmCertificateValidation } from './route53';
const apiDomain = ({ full_domain, cert_arn, tags = {} }) => ({
    resource: {
        apigatewayv2_domain_name: {
            domain_name: full_domain,
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
                ...flag,
                ...tags,
            },
        },
    },
});
const apiGatewayV2 = ({ full_domain, tags = {} }) => ({
    resource: {
        apigatewayv2_api: {
            name: full_domain,
            description: `api for ${full_domain}`,
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
            tags: {
                ...flag,
                ...tags,
            },
            api_endpoint: '-->',
            execution_arn: '-->',
            id: '-->',
        },
    },
});
const apiStage = ({ api_id, name = '$default', tags = {} }) => ({
    resource: {
        apigatewayv2_stage: {
            api_id,
            name,
            auto_deploy: true,
            description: `stage ${name} API`,
            tags: {
                ...flag,
                ...tags,
            },
        },
    },
});
const apiLambdaIntegration = ({ api_id, lambda_invoke_arn }) => ({
    resource: {
        // @ts-ignore: 🐛 FIXME `response_parameters` subsection Heading missing
        apigatewayv2_integration: {
            api_id,
            description: 'lambda integration',
            integration_uri: lambda_invoke_arn,
            integration_type: 'AWS_PROXY',
            integration_method: 'POST',
            connection_type: 'INTERNET',
            payload_format_version: '2.0',
            timeout_milliseconds: 29000,
            id: '-->',
        },
    },
});
const apiRoute = ({ api_id, route_key = 'ANY /', integration_id }) => ({
    resource: {
        // @ts-ignore: 🐛 FIXME `request_parameters` subsection Heading missing
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
});
/**
 * subdomains module
 *
 * provides a set of resources for a subdomain, methods and routes via a simple
 * object notation under the key `subdomainRoutes`.
 *
 * TODO: stage
 */
export const Api = ({ apex = 'example.com', zone_id, subdomainRoutes = {
    test: {
        'ANY /': {
            function_arn: 'lambda function name goes here 📌',
            invoke_arn: 'lambda function arn goes here 📌',
        },
    },
}, tags = {}, }, my) => Object.entries(subdomainRoutes).reduce((a, [sd, routes]) => {
    return {
        ...a,
        [`cert_${sd}`]: acmCertificate({ full_domain: `${sd}.${apex}`, tags }),
        [`valid_acm_${sd}`]: acmCertificateValidation({
            cert_arn: my?.[`cert_${sd}`]?.resource?.acm_certificate?.arn,
            fqdns: [my?.[`valid_rec_${sd}`]?.resource?.route53_record?.fqdn],
        }),
        [`domain_${sd}`]: apiDomain({
            full_domain: `${sd}.${apex}`,
            cert_arn: my?.[`valid_acm_${sd}`]?.resource?.acm_certificate_validation?.certificate_arn,
            tags,
        }),
        [`record_${sd}`]: route53Record({
            route53_zone_id: `<--${zone_id}`,
            full_domain: `${sd}.${apex}`,
            api_domain_name: my?.[`domain_${sd}`]?.resource?.apigatewayv2_domain_name
                ?.domain_name_configuration[0]?.target_domain_name,
            api_hosted_zone_id: my?.[`domain_${sd}`]?.resource?.apigatewayv2_domain_name
                ?.domain_name_configuration[0]?.hosted_zone_id,
        }),
        [`valid_rec_${sd}`]: route53Record({
            route53_zone_id: `<--${zone_id}`,
            full_domain: my?.[`cert_${sd}`]?.resource?.acm_certificate?.domain_validation_options[0]
                ?.resource_record_name,
            records: [
                my?.[`cert_${sd}`]?.resource?.acm_certificate?.domain_validation_options[0]
                    ?.resource_record_value,
            ],
            type: my?.[`cert_${sd}`]?.resource?.acm_certificate?.domain_validation_options[0]
                ?.resource_record_type,
        }),
        [`gwv2_${sd}`]: apiGatewayV2({ full_domain: `${sd}.${apex}`, tags }),
        [`stage_${sd}`]: apiStage({
            api_id: my?.[`gwv2_${sd}`]?.resource?.apigatewayv2_api?.id,
            tags,
        }),
        ...Object.entries(routes).reduce((acc, [route, { invoke_arn, function_arn }]) => {
            const method = route.split(' ')[0];
            const ns = `${sd}_${method}`;
            return {
                ...acc,
                [`invoker_${ns}`]: lambdaInvokeCred({
                    function_name: function_arn,
                    source_arn: my?.[`gwv2_${sd}`]?.resource?.apigatewayv2_api?.execution_arn + '/*/*',
                    principal: 'apigateway.amazonaws.com',
                    statement_id: 'AllowExecutionFromAPIGateway' + '-' + ns,
                }),
                [`integration_${ns}`]: apiLambdaIntegration({
                    api_id: my?.[`gwv2_${sd}`]?.resource?.apigatewayv2_api?.id,
                    lambda_invoke_arn: invoke_arn,
                }),
                [`route_${ns}`]: apiRoute({
                    api_id: my?.[`gwv2_${sd}`]?.resource?.apigatewayv2_api?.id,
                    route_key: route,
                    integration_id: my?.[`integration_${ns}`]?.resource?.apigatewayv2_integration?.id,
                }),
            };
        }, {}),
    };
}, {});
export const apiModule = modulate({ api: Api });
//# sourceMappingURL=api.js.map