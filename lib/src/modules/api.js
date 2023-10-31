import { flag } from '../types';
import { lambda_invoke_cred } from './lambda';
import { acm_certificate, route53_record, acm_certificate_validation } from './route53';
const api_domain = ({ full_domain, cert_arn, tags = {} }) => ({
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
const api_gateway = ({ full_domain, tags = {} }) => ({
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
const api_stage = ({ api_id, name = '$default', tags = {} }) => ({
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
const api_lambda_integration = ({ api_id, lambda_invoke_arn }) => ({
    resource: {
        // @ts-ignore: 🐛 FIXME `response_parameters` subsection Heading missing
        apigatewayv2_integration: {
            api_id,
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
const api_route = ({ api_id, route_key = 'ANY /', integration_id }) => ({
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
export const api = ({ apex = 'chopshop-test.net', zone_id, subdomainRoutes = {
    test: {
        'ANY /': {
            function_name: 'lambda function name goes here 📌',
            invoke_arn: 'lambda_invoke_arn goes here 📌',
        },
    },
}, tags = {}, }, my) => Object.entries(subdomainRoutes).reduce((a, [sd, routes]) => ({
    ...a,
    [`cert_${sd}`]: acm_certificate({ full_domain: `${sd}.${apex}`, tags }),
    [`domain_${sd}`]: api_domain({
        full_domain: `${sd}.${apex}`,
        cert_arn: my?.[`validation_${sd}`]?.resource?.acm_certificate_validation?.certificate_arn,
        tags,
    }),
    [`record_${sd}`]: route53_record({
        route53_zone_id: zone_id,
        full_domain: `${sd}.${apex}`,
        api_domain_name: my?.[`domain_${sd}`]?.resource?.apigatewayv2_domain_name
            ?.domain_name_configuration[0]?.target_domain_name,
        api_hosted_zone_id: my?.[`domain_${sd}`]?.resource?.apigatewayv2_domain_name
            ?.domain_name_configuration[0]?.hosted_zone_id,
    }),
    [`record_valid_${sd}`]: route53_record({
        route53_zone_id: zone_id,
        full_domain: my?.[`cert_${sd}`]?.resource?.acm_certificate?.domain_validation_options[0]
            ?.resource_record_name,
        records: [
            my?.[`cert_${sd}`]?.resource?.acm_certificate?.domain_validation_options[0]
                ?.resource_record_value,
        ],
        type: my?.[`cert_${sd}`]?.resource?.acm_certificate?.domain_validation_options[0]
            ?.resource_record_type,
    }),
    [`validation_${sd}`]: acm_certificate_validation({
        cert_arn: my?.[`cert_${sd}`]?.resource?.acm_certificate?.arn,
        fqdns: [my?.[`record_valid_${sd}`]?.resource?.route53_record?.fqdn],
    }),
    [`apigw_${sd}`]: api_gateway({ full_domain: `${sd}.${apex}`, tags }),
    [`stage_${sd}`]: api_stage({
        api_id: my?.[`apigw_${sd}`]?.resource?.apigatewayv2_api?.id,
        tags,
    }),
    ...Object.entries(routes).reduce((acc, [route, { invoke_arn, function_name }]) => {
        const method = route.split(' ')[0];
        return {
            ...acc,
            [`invoker_${sd}_${method}`]: lambda_invoke_cred({
                function_name: function_name,
                source_arn: my?.[`apigw_${sd}`]?.resource?.apigatewayv2_api?.execution_arn,
                principal: 'apigateway.amazonaws.com',
                statement_id: 'AllowExecutionFromAPIGateway',
            }),
            [`integration_${sd}_${method}`]: api_lambda_integration({
                api_id: my?.[`apigw_${sd}`]?.resource?.apigatewayv2_api?.id,
                lambda_invoke_arn: invoke_arn,
            }),
            [`route_${sd}_${method}`]: api_route({
                api_id: my?.[`apigw_${sd}`]?.resource?.apigatewayv2_api?.id,
                route_key: route,
                integration_id: my?.[`integration_${sd}_${method}`]?.resource?.apigatewayv2_integration
                    ?.id,
            }),
        };
    }, {}),
}), {});
//# sourceMappingURL=api.js.map