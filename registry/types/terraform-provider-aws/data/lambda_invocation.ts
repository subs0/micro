export interface LambdaInvocation {
    data: Datum[];
}

export interface Datum {
    lambda_invocation: LambdaInvocationClass;
}

export interface LambdaInvocationClass {
    /** (Required) Name of the lambda function. */
    function_name: any;
    /** (Required) String in JSON format that is passed as payload to the lambda function. */
    input:         any;
    /** (Optional) Qualifier (a.k.a version) of the lambda function. Defaults */
    qualifier?:    any;
}