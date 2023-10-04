export interface LambdaFunctionURL {
    resource: Resource[];
}

export interface Resource {
    lambda_function_url: LambdaFunctionURLClass;
}

export interface LambdaFunctionURLClass {
    /** (Required) The type of authentication that the function URL uses. Set to `"AWS_IAM"` to restrict access to authenticated IAM users only. Set to `"NONE"` to bypass IAM authentication and create a public endpoint. See the [AWS documentation](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html) for more details. */
    authorization_type: any;
    cors?:              Cors;
    /** (Required) The name (or ARN) of the Lambda function. */
    function_name:      any;
    /** (Optional) Determines how the Lambda function responds to an invocation. Valid values are `BUFFERED` (default) and `RESPONSE_STREAM`. See more in [Configuring a Lambda function to stream responses](https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html). */
    invoke_mode?:       any;
    /** (Optional) The alias name or `"$LATEST"`. */
    qualifier?:         any;
}

export interface Cors {
    /** (Optional) Whether to allow cookies or other credentials in requests to the function URL. The default is `false`. */
    allow_credentials: any;
    /** (Optional) The HTTP headers that origins can include in requests to the function URL. For example: `["date", "keep-alive", "x-custom-header"]`. */
    allow_headers:     any;
    /** (Optional) The HTTP methods that are allowed when calling the function URL. For example: `["GET", "POST", "DELETE"]`, or the wildcard character (`["*"]`). */
    allow_methods:     any;
    /** (Optional) The origins that can access the function URL. You can list any number of specific origins (or the wildcard character (`"*"`)), separated by a comma. For example: `["https://www.example.com", "http://localhost:60905"]`. */
    allow_origins:     any;
    /** (Optional) The HTTP headers in your function response that you want to expose to origins that call the function URL. */
    expose_headers:    any;
    /** (Optional) The maximum amount of time, in seconds, that web browsers can cache results of a preflight request. By default, this is set to `0`, which means that the browser doesn't cache results. The maximum value is `86400`. */
    max_age:           any;
}