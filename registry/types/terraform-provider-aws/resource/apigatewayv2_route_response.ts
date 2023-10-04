export interface Apigatewayv2RouteResponse {
    resource: Resource[];
}

export interface Resource {
    apigatewayv2_route_response: Apigatewayv2RouteResponseClass;
}

export interface Apigatewayv2RouteResponseClass {
    /** (Required) API identifier. */
    api_id:                      any;
    /** (Required) Identifier of the [`aws_apigatewayv2_route`](/docs/providers/aws/r/apigatewayv2_route.html). */
    route_id:                    any;
    /** (Required) Route response key. */
    route_response_key:          any;
    /** (Optional) The [model selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) for the route response. */
    model_selection_expression?: any;
    /** (Optional) Response models for the route response. */
    response_models?:            any;
}