export interface ConnectLambdaFunctionAssociation {
    data: Datum[];
}

export interface Datum {
    connect_lambda_function_association: ConnectLambdaFunctionAssociationClass;
}

export interface ConnectLambdaFunctionAssociationClass {
    /** (Required) ARN of the Lambda Function, omitting any version or alias qualifier. */
    function_arn: any;
    /** (Required) Identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance. */
    instance_id:  any;
}