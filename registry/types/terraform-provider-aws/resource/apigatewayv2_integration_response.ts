export interface Apigatewayv2IntegrationResponse {
    resource: Resource[];
}

export interface Resource {
    apigatewayv2_integration_response: Apigatewayv2IntegrationResponseClass;
}

export interface Apigatewayv2IntegrationResponseClass {
    /** (Required) API identifier. */
    api_id:                         any;
    /** (Required) Identifier of the [`aws_apigatewayv2_integration`](/docs/providers/aws/r/apigatewayv2_integration.html). */
    integration_id:                 any;
    /** (Required) Integration response key. */
    integration_response_key:       any;
    /** (Optional) How to handle response payload content type conversions. Valid values: `CONVERT_TO_BINARY`, `CONVERT_TO_TEXT`. */
    content_handling_strategy?:     any;
    /** (Optional) Map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. */
    response_templates?:            any;
    /** (Optional) The [template selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-template-selection-expressions) for the integration response. */
    template_selection_expression?: any;
}