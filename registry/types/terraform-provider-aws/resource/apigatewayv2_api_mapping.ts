export interface Apigatewayv2APIMapping {
    resource: Resource[];
}

export interface Resource {
    apigatewayv2_api_mapping: Apigatewayv2APIMappingClass;
}

export interface Apigatewayv2APIMappingClass {
    /** (Required) API identifier. */
    api_id:           any;
    /** (Required) Domain name. Use the [`aws_apigatewayv2_domain_name`](/docs/providers/aws/r/apigatewayv2_domain_name.html) resource to configure a domain name. */
    domain_name:      any;
    /** (Required) API stage. Use the [`aws_apigatewayv2_stage`](/docs/providers/aws/r/apigatewayv2_stage.html) resource to configure an API stage. */
    stage:            any;
    /** (Optional) The API mapping key. Refer to [REST API](https://docs.aws.amazon.com/apigateway/latest/developerguide/rest-api-mappings.html), [HTTP API](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-mappings.html) or [WebSocket API](https://docs.aws.amazon.com/apigateway/latest/developerguide/websocket-api-mappings.html). */
    api_mapping_key?: any;
}