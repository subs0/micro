export interface Apigatewayv2Route {
    resource: Resource[];
}

export interface Resource {
    apigatewayv2_route: Apigatewayv2RouteClass;
}

export interface Apigatewayv2RouteClass {
    /** (Required) API identifier. */
    api_id:                               any;
    /** (Required) Route key for the route. For HTTP APIs, the route key can be either `$default`, or a combination of an HTTP method and resource path, for example, `GET /pets`. */
    route_key:                            any;
    /** (Optional) Boolean whether an API key is required for the route. Defaults to `false`. Supported only for WebSocket APIs. */
    api_key_required?:                    any;
    /** (Optional) Authorization scopes supported by this route. The scopes are used with a JWT authorizer to authorize the method invocation. */
    authorization_scopes?:                any;
    /** (Optional) Authorization type for the route. */
    authorization_type?:                  any;
    /** (Optional) Identifier of the [`aws_apigatewayv2_authorizer`](apigatewayv2_authorizer.html) resource to be associated with this route. */
    authorizer_id?:                       any;
    /** (Optional) The [model selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) for the route. Supported only for WebSocket APIs. */
    model_selection_expression?:          any;
    /** (Optional) Operation name for the route. Must be between 1 and 64 characters in length. */
    operation_name?:                      any;
    /** (Optional) Request models for the route. Supported only for WebSocket APIs. */
    request_models?:                      any;
    /** (Optional) Request parameters for the route. Supported only for WebSocket APIs. */
    request_parameter?:                   any;
    /** (Optional) The [route response selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-route-response-selection-expressions) for the route. Supported only for WebSocket APIs. */
    route_response_selection_expression?: any;
    /** (Optional) Target for the route, of the form `integrations/`*`IntegrationID`*, where *`IntegrationID`* is the identifier of an [`aws_apigatewayv2_integration`](apigatewayv2_integration.html) resource. */
    target?:                              any;
    /** (Required) Request parameter key. This is a [request data mapping parameter](https://docs.aws.amazon.com/apigateway/latest/developerguide/websocket-api-data-mapping.html#websocket-mapping-request-parameters). */
    request_parameter_key:                any;
    /** (Required) Boolean whether or not the parameter is required. */
    required:                             any;
}