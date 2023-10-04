export interface Apigatewayv2API {
    resource: Resource[];
}

export interface Resource {
    apigatewayv2_api: Apigatewayv2APIClass;
}

export interface Apigatewayv2APIClass {
    /** (Required) Name of the API. Must be less than or equal to 128 characters in length. */
    name:                          any;
    /** (Required) API protocol. Valid values: `HTTP`, `WEBSOCKET`. */
    protocol_type:                 any;
    /** (Optional) An [API key selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions). */
    api_key_selection_expression?: any;
    /** (Optional) Cross-origin resource sharing (CORS) [configuration](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html). Applicable for HTTP APIs. */
    cors_configuration?:           any;
    /** (Optional) Part of _quick create_. Specifies any credentials required for the integration. Applicable for HTTP APIs. */
    credentials_arn?:              any;
    /** (Optional) Description of the API. Must be less than or equal to 1024 characters in length. */
    description?:                  any;
    /** (Optional) Whether clients can invoke the API by using the default `execute-api` endpoint. */
    disable_execute_api_endpoint?: any;
    /** (Optional) Part of _quick create_. Specifies any [route key](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-routes.html). Applicable for HTTP APIs. */
    route_key?:                    any;
    /** (Optional) The [route selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-route-selection-expressions) for the API. */
    route_selection_expression?:   any;
    /** (Optional) Map of tags to assign to the API. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                         any;
    /** (Optional) Part of _quick create_. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes. */
    target?:                       any;
    /** (Optional) An OpenAPI specification that defines the set of routes and integrations to create as part of the HTTP APIs. Supported only for HTTP APIs. */
    body?:                         any;
    /** (Optional) Version identifier for the API. Must be between 1 and 64 characters in length. */
    version?:                      any;
    /** (Optional) Whether warnings should return an error while API Gateway is creating or updating the resource using an OpenAPI specification. Defaults to `false`. Applicable for HTTP APIs. */
    fail_on_warnings?:             any;
    /** (Optional) Whether credentials are included in the CORS request. */
    allow_credentials?:            any;
    /** (Optional) Set of allowed HTTP headers. */
    allow_headers?:                any;
    /** (Optional) Set of allowed HTTP methods. */
    allow_methods?:                any;
    /** (Optional) Set of allowed origins. */
    allow_origins?:                any;
    /** (Optional) Set of exposed HTTP headers. */
    expose_headers?:               any;
    /** (Optional) Number of seconds that the browser should cache preflight request results. */
    max_age?:                      any;
}