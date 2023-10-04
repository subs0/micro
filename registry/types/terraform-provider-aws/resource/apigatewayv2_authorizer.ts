export interface Apigatewayv2Authorizer {
    resource: Resource[];
}

export interface Resource {
    apigatewayv2_authorizer: Apigatewayv2AuthorizerClass;
}

export interface Apigatewayv2AuthorizerClass {
    /** (Required) API identifier. */
    api_id:                             any;
    /** (Required) Authorizer type. Valid values: `JWT`, `REQUEST`. */
    authorizer_type:                    any;
    /** (Required) Name of the authorizer. Must be between 1 and 128 characters in length. */
    name:                               any;
    /** (Optional) Required credentials as an IAM role for API Gateway to invoke the authorizer. */
    authorizer_credentials_arn?:        any;
    /** (Optional) Format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. */
    authorizer_payload_format_version?: any;
    /** (Optional) Time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. */
    authorizer_result_ttl_in_seconds?:  any;
    /** (Optional) Authorizer's Uniform Resource Identifier (URI). */
    authorizer_uri?:                    any;
    /** (Optional) Whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. */
    enable_simple_responses?:           any;
    /** (Optional) Identity sources for which authorization is requested. */
    identity_sources?:                  any;
    /** (Optional) Configuration of a JWT authorizer. Required for the `JWT` authorizer type. */
    jwt_configuration?:                 any;
    /** (Optional) List of the intended recipients of the JWT. A valid JWT must provide an aud that matches at least one entry in this list. */
    audience?:                          any;
    /** (Optional) Base domain of the identity provider that issues JSON Web Tokens, such as the `endpoint` attribute of the [`aws_cognito_user_pool`](/docs/providers/aws/r/cognito_user_pool.html) resource. */
    issuer?:                            any;
}