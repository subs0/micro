export interface APIGatewayMethod {
    resource: Resource[];
}

export interface Resource {
    api_gateway_method: APIGatewayMethodClass;
}

export interface APIGatewayMethodClass {
    /** (Required) ID of the associated REST API */
    rest_api_id:           any;
    /** (Required) API resource ID */
    resource_id:           any;
    /** (Required) HTTP Method (`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`, `ANY`) */
    http_method:           any;
    /** (Required) Type of authorization used for the method (`NONE`, `CUSTOM`, `AWS_IAM`, `COGNITO_USER_POOLS`) */
    authorization:         any;
    /** (Optional) Authorizer id to be used when the authorization is `CUSTOM` or `COGNITO_USER_POOLS` */
    authorizer_id?:        any;
    /** (Optional) Authorization scopes used when the authorization is `COGNITO_USER_POOLS` */
    authorization_scopes?: any;
    /** (Optional) Specify if the method requires an API key */
    api_key_required?:     any;
    /** (Optional) Function name that will be given to the method when generating an SDK through API Gateway. If omitted, API Gateway will generate a function name based on the resource path and HTTP verb. */
    operation_name?:       any;
    /** (Optional) Map of the API models used for the request's content type */
    request_models?:       any;
    /** (Optional) ID of a `aws_api_gateway_request_validator` */
    request_validator_id?: any;
    /** (Optional) Map of request parameters (from the path, query string and headers) that should be passed to the integration. The boolean value indicates whether the parameter is required (`true`) or optional (`false`). */
    request_parameters?:   any;
}