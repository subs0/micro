import { modulate } from '../config'
import { AWS, flag } from '../constants'
import { lambdaInvokeCred } from './lambda'
import { acmCertificate, route53Record, acmCertificateValidation } from './route53'

//                      ,e,       /                 /~~88b
//    /~~~8e  888-~88e   "  e88~88e Y88b    e    / |   888
//        88b 888  888b 888 888 888  Y88b  d8b  /  `  d88P
//   e88~-888 888  8888 888 "88_88"   Y888/Y88b/     d88P
//  C888  888 888  888P 888  /         Y8/  Y8/     d88P
//   "88_-888 888-_88"  888 Cb          Y    Y     d88P___
//            888            Y8""8D

const apiDomain = ({ full_domain, cert_arn, tags = {} }): AWS => ({
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
         id: '-->',
         tags: {
            ...flag,
            ...tags,
         },
      },
   },
})

const apiGatewayV2 = ({ full_domain, tags = {} }): AWS => ({
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
})

const apiStage = ({ api_id, name = '$default', routes, tags = {} }): AWS => {
   return {
      resource: {
         apigatewayv2_stage: {
            api_id,
            name,
            auto_deploy: true,
            description: `stage ${name} API`,
            // @ts-ignore
            //route_settings: Object.entries(routes).map(([method, config]) => ({
            //   route_key: method,
            //   throttling_burst_limit: 5000,
            //   throttling_rate_limit: 10000,
            //})),
            default_route_settings: {
               throttling_burst_limit: 5000,
               throttling_rate_limit: 10000,
            },
            id: '-->',
            tags: {
               ...flag,
               ...tags,
            },
         },
      },
   }
}

const apiGwv2Mapping = ({ api_id, domain_name, stage }): AWS => {
   return {
      resource: {
         apigatewayv2_api_mapping: {
            api_id,
            domain_name,
            stage,
         },
      },
   }
}

const apiLambdaIntegration = ({ api_id, lambda_invoke_arn }): AWS => ({
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
         timeout_milliseconds: 29000, // 30 sec max for HTTP, 29 for WebSockets
         id: '-->',
      },
   },
})

const apiRoute = ({ api_id, route_key = 'ANY /', integration_id }): AWS => ({
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
})

interface RouteMethods {
   /** route */
   [key: string]: {
      /** method */
      [key: string]: {
         invoke_arn: string
         function_arn: string
      }
   }
}

export interface IApi {
   apex: string
   zone_id: string
   subdomainRoutes: RouteMethods
   tags?: object
}

/**
 * subdomains module
 *
 * provides a set of resources for a subdomain, methods and routes via a simple
 * object notation under the key `subdomainRoutes`.
 *
 * TODO: stage
 */
export const Api = (
   {
      apex = 'example.com',
      zone_id,
      subdomainRoutes = {
         test: {
            'ANY /': {
               function_arn: 'lambda function name goes here 📌',
               invoke_arn: 'lambda function arn goes here 📌',
            },
         },
      },
      tags = {},
   }: IApi,
   my: { [key: string]: AWS },
) =>
   Object.entries(subdomainRoutes).reduce((a, [sd, routes]) => {
      return {
         ...a,
         [`cert_${sd}`]: acmCertificate({ full_domain: `${sd}.${apex}`, tags }),
         [`valid_acm_${sd}`]: acmCertificateValidation({
            cert_arn: my?.[`cert_${sd}`]?.resource?.acm_certificate?.arn,
            fqdns: [my?.[`valid_rec_${sd}`]?.resource?.route53_record?.fqdn],
         }),
         [`domain_${sd}`]: apiDomain({
            full_domain: `${sd}.${apex}`,
            cert_arn:
               my?.[`valid_acm_${sd}`]?.resource?.acm_certificate_validation?.certificate_arn,
            tags,
         }),
         [`record_${sd}`]: route53Record({
            route53_zone_id: `<--${zone_id}`,
            full_domain: `${sd}.${apex}`,
            api_domain_name:
               my?.[`domain_${sd}`]?.resource?.apigatewayv2_domain_name
                  ?.domain_name_configuration[0]?.target_domain_name,
            api_hosted_zone_id:
               my?.[`domain_${sd}`]?.resource?.apigatewayv2_domain_name
                  ?.domain_name_configuration[0]?.hosted_zone_id,
         }),
         [`valid_rec_${sd}`]: route53Record({
            route53_zone_id: `<--${zone_id}`,
            full_domain:
               my?.[`cert_${sd}`]?.resource?.acm_certificate?.domain_validation_options[0]
                  ?.resource_record_name,
            records: [
               my?.[`cert_${sd}`]?.resource?.acm_certificate?.domain_validation_options[0]
                  ?.resource_record_value,
            ],
            type: my?.[`cert_${sd}`]?.resource?.acm_certificate?.domain_validation_options[0]
               ?.resource_record_type,
         }),
         [`gwv2_${sd}`]: apiGatewayV2({ full_domain: `${sd}.${apex}`, tags }),
         // TODO settings per stage (promote above)
         [`stage_${sd}`]: apiStage({
            api_id: my?.[`gwv2_${sd}`]?.resource?.apigatewayv2_api?.id,
            routes,
            tags,
         }),
         [`gwv2_mapping_${sd}`]: apiGwv2Mapping({
            api_id: my?.[`gwv2_${sd}`]?.resource?.apigatewayv2_api?.id,
            domain_name: my?.[`domain_${sd}`]?.resource?.apigatewayv2_domain_name?.id,
            stage: my?.[`stage_${sd}`]?.resource?.apigatewayv2_stage?.id,
         }),
         ...Object.entries(routes).reduce((acc, [route, { invoke_arn, function_arn }]) => {
            const method = route.split(' ')[0].replace(/\$/g, '').toLowerCase()
            const ns = `${sd}_${method}`
            return {
               ...acc,
               [`invoker_${ns}`]: lambdaInvokeCred({
                  function_name: function_arn,
                  source_arn:
                     my?.[`gwv2_${sd}`]?.resource?.apigatewayv2_api?.execution_arn + '/*/*',
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
            }
         }, {}),
      }
   }, {})

export const apiModule = modulate({ api: Api })
