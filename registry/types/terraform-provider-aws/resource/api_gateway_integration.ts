export interface APIGatewayIntegration {
    resource: Resource[];
}

export interface Resource {
    api_gateway_integration: APIGatewayIntegrationClass;
}

export interface APIGatewayIntegrationClass {
    /** (Required) ID of the associated REST API. */
    rest_api_id:                 any;
    /** (Required) API resource ID. */
    resource_id:                 any;
    /** (Required) HTTP method (`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTION`, `ANY`) */
    http_method:                 any;
    /** (Optional) Integration HTTP method */
    integration_http_method?:    any;
    /** (Required) Integration input's [type](https://docs.aws.amazon.com/apigateway/api-reference/resource/integration/). Valid values are `HTTP` (for HTTP backends), `MOCK` (not calling any real backend), `AWS` (for AWS services), `AWS_PROXY` (for Lambda proxy integration) and `HTTP_PROXY` (for HTTP proxy integration). An `HTTP` or `HTTP_PROXY` integration with a `connection_type` of `VPC_LINK` is referred to as a private integration and uses a VpcLink to connect API Gateway to a network load balancer of a VPC. */
    type:                        any;
    /** (Optional) Integration input's [connectionType](https://docs.aws.amazon.com/apigateway/api-reference/resource/integration/#connectionType). Valid values are `INTERNET` (default for connections through the public routable internet), and `VPC_LINK` (for private connections between API Gateway and a network load balancer in a VPC). */
    connection_type?:            any;
    /** (Optional) ID of the VpcLink used for the integration. **Required** if `connection_type` is `VPC_LINK` */
    connection_id?:              any;
    /** (Optional) Input's URI. **Required** if `type` is `AWS`, `AWS_PROXY`, `HTTP` or `HTTP_PROXY`. */
    uri?:                        any;
    /** (Optional) Credentials required for the integration. For `AWS` integrations, 2 options are available. To specify an IAM Role for Amazon API Gateway to assume, use the role's ARN. To require that the caller's identity be passed through from the request, specify the string `arn:aws:iam::\*:user/\*`. */
    credentials?:                any;
    /** (Optional) Map of the integration's request templates. */
    request_templates?:          any;
    /** (Optional) Map of request query string parameters and headers that should be passed to the backend responder. */
    request_parameters?:         any;
    /** (Optional) Integration passthrough behavior (`WHEN_NO_MATCH`, `WHEN_NO_TEMPLATES`, `NEVER`).  **Required** if `request_templates` is used. */
    passthrough_behavior?:       any;
    /** (Optional) List of cache key parameters for the integration. */
    cache_key_parameters?:       any;
    /** (Optional) Integration's cache namespace. */
    cache_namespace?:            any;
    /** (Optional) How to handle request payload content type conversions. Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT`. If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the passthroughBehaviors is configured to support payload pass-through. */
    content_handling?:           any;
    /** (Optional) Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds. */
    timeout_milliseconds?:       any;
    /** (Optional) TLS configuration. See below. */
    tls_config?:                 any;
    /** (Optional) Whether or not API Gateway skips verification that the certificate for an integration endpoint is issued by a [supported certificate authority](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-supported-certificate-authorities-for-http-endpoints.html). This isn’t recommended, but it enables you to use certificates that are signed by private certificate authorities, or certificates that are self-signed. If enabled, API Gateway still performs basic certificate validation, which includes checking the certificate's expiration date, hostname, and presence of a root certificate authority. Supported only for `HTTP` and `HTTP_PROXY` integrations. */
    insecure_skip_verification?: any;
}