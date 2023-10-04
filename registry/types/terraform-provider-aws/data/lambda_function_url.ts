export interface LambdaFunctionURL {
    data: Datum[];
}

export interface Datum {
    lambda_function_url: LambdaFunctionURLClass;
}

export interface LambdaFunctionURLClass {
    /** (Required) The name (or ARN) of the Lambda function. */
    function_name: any;
    /** (Optional) Alias name or `"$LATEST"`. */
    qualifier?:    any;
}