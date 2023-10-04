export interface LambdaFunction {
    data: Datum[];
}

export interface Datum {
    lambda_function: LambdaFunctionClass;
}

export interface LambdaFunctionClass {
    /** (Required) Name of the lambda function. */
    function_name: any;
    /** (Optional) Alias name or version number of the lambda functionE.g., `$LATEST`, `my-alias`, or `1`. When not included: the data source resolves to the most recent published version; if no published version exists: it resolves to the most recent unpublished version. */
    qualifier?:    any;
}