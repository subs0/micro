export interface Apigatewayv2Integration {
    resource: Resource[];
}

export interface Resource {
    apigatewayv2_integration: Apigatewayv2IntegrationClass;
}

export interface Apigatewayv2IntegrationClass {
    /** (Required) API identifier. */
    api_id:                         any;
    /** (Required) Integration type of an integration. */
    integration_type:               any;
    /** (Optional) ID of the [VPC link](apigatewayv2_vpc_link.html) for a private integration. Supported only for HTTP APIs. Must be between 1 and 1024 characters in length. */
    connection_id?:                 any;
    /** (Optional) Type of the network connection to the integration endpoint. Valid values: `INTERNET`, `VPC_LINK`. Default is `INTERNET`. */
    connection_type?:               any;
    /** (Optional) How to handle response payload content type conversions. Valid values: `CONVERT_TO_BINARY`, `CONVERT_TO_TEXT`. Supported only for WebSocket APIs. */
    content_handling_strategy?:     any;
    /** (Optional) Credentials required for the integration, if any. */
    credentials_arn?:               any;
    /** (Optional) Description of the integration. */
    description?:                   any;
    /** (Optional) Integration's HTTP method. Must be specified if `integration_type` is not `MOCK`. */
    integration_method?:            any;
    /** (Optional) AWS service action to invoke. Supported only for HTTP APIs when `integration_type` is `AWS_PROXY`. See the [AWS service integration reference](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html) documentation for supported values. Must be between 1 and 128 characters in length. */
    integration_subtype?:           any;
    /** (Optional) URI of the Lambda function for a Lambda proxy integration, when `integration_type` is `AWS_PROXY`. */
    integration_uri?:               any;
    /** (Optional) Pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the `request_templates` attribute. */
    passthrough_behavior?:          any;
    /** (Optional) The [format of the payload](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html#http-api-develop-integrations-lambda.proxy-format) sent to an integration. Valid values: `1.0`, `2.0`. Default is `1.0`. */
    payload_format_version?:        any;
    /** (Optional) For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. */
    request_parameters?:            any;
    /** (Optional) Map of [Velocity](https://velocity.apache.org/) templates that are applied on the request payload based on the value of the Content-Type header sent by the client. Supported only for WebSocket APIs. */
    request_templates?:             any;
    /** (Optional) Mappings to transform the HTTP response from a backend integration before returning the response to clients. Supported only for HTTP APIs. */
    response_parameters?:           any;
    /** (Optional) The [template selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-template-selection-expressions) for the integration. */
    template_selection_expression?: any;
    /** (Optional) Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. */
    timeout_milliseconds?:          any;
    /** (Optional) TLS configuration for a private integration. Supported only for HTTP APIs. */
    tls_config?:                    any;
    /** (Required) HTTP status code in the range 200-599. */
    status_code:                    any;
    /** (Required) Key-value map. The key of this map identifies the location of the request parameter to change, and how to change it. The corresponding value specifies the new data for the parameter. */
    mappings:                       any;
    /** (Optional) If you specify a server name, API Gateway uses it to verify the hostname on the integration's certificate. The server name is also included in the TLS handshake to support Server Name Indication (SNI) or virtual hosting. */
    server_name_to_verify?:         any;
}