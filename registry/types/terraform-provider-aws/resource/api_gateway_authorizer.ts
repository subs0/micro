export interface APIGatewayAuthorizer {
    resource: Resource[];
}

export interface Resource {
    api_gateway_authorizer: APIGatewayAuthorizerClass;
}

export interface APIGatewayAuthorizerClass {
    /** (Optional, required for type `TOKEN`/`REQUEST`) Authorizer's Uniform Resource Identifier (URI). This must be a well-formed Lambda function URI in the form of `arn:aws:apigateway:{region}:lambda:path/{service_api}`, */
    authorizer_uri?:                   any;
    /** (Required) Name of the authorizer */
    name:                              any;
    /** (Required) ID of the associated REST API */
    rest_api_id:                       any;
    /** (Optional) Source of the identity in an incoming request. Defaults to `method.request.header.Authorization`. For `REQUEST` type, this may be a comma-separated list of values, including headers, query string parameters and stage variables - e.g., `"method.request.header.SomeHeaderName,method.request.querystring.SomeQueryStringName,stageVariables.SomeStageVariableName"` */
    identity_source?:                  any;
    /** (Optional) Type of the authorizer. Possible values are `TOKEN` for a Lambda function using a single authorization token submitted in a custom header, `REQUEST` for a Lambda function using incoming request parameters, or `COGNITO_USER_POOLS` for using an Amazon Cognito user pool. Defaults to `TOKEN`. */
    type?:                             any;
    /** (Optional) Credentials required for the authorizer. To specify an IAM Role for API Gateway to assume, use the IAM Role ARN. */
    authorizer_credentials?:           any;
    /** (Optional) TTL of cached authorizer results in seconds. Defaults to `300`. */
    authorizer_result_ttl_in_seconds?: any;
    /** (Optional) Validation expression for the incoming identity. For `TOKEN` type, this value should be a regular expression. The incoming token from the client is matched against this expression, and will proceed if the token matches. If the token doesn't match, the client receives a 401 Unauthorized response. */
    identity_validation_expression?:   any;
    /** (Optional, required for type `COGNITO_USER_POOLS`) List of the Amazon Cognito user pool ARNs. Each element is of this format: `arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}`. */
    provider_arns?:                    any;
}