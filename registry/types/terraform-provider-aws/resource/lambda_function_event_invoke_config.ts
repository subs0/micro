export interface LambdaFunctionEventInvokeConfig {
    resource: Resource[];
}

export interface Resource {
    lambda_function_event_invoke_config: LambdaFunctionEventInvokeConfigClass;
}

export interface LambdaFunctionEventInvokeConfigClass {
    /** (Required) Name or Amazon Resource Name (ARN) of the Lambda Function, omitting any version or alias qualifier. */
    function_name:                 any;
    /** (Optional) Configuration block with destination configuration. See below for details. */
    destination_config?:           any;
    /** (Optional) Maximum age of a request that Lambda sends to a function for processing in seconds. Valid values between 60 and 21600. */
    maximum_event_age_in_seconds?: any;
    /** (Optional) Maximum number of times to retry when the function returns an error. Valid values between 0 and 2. Defaults to 2. */
    maximum_retry_attempts?:       any;
    /** (Optional) Lambda Function published version, `$LATEST`, or Lambda Alias name. */
    qualifier?:                    any;
    /** (Optional) Configuration block with destination configuration for failed asynchronous invocations. See below for details. */
    on_failure?:                   any;
    /** (Optional) Configuration block with destination configuration for successful asynchronous invocations. See below for details. */
    on_success?:                   any;
    /** (Required) Amazon Resource Name (ARN) of the destination resource. See the [Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations) for acceptable resource types and associated IAM permissions. */
    destination:                   any;
}