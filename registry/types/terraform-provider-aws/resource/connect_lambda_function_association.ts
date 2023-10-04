export interface ConnectLambdaFunctionAssociation {
    resource: Resource[];
}

export interface Resource {
    connect_lambda_function_association: ConnectLambdaFunctionAssociationClass;
}

export interface ConnectLambdaFunctionAssociationClass {
    /** (Required) Amazon Resource Name (ARN) of the Lambda Function, omitting any version or alias qualifier. */
    function_arn: any;
    /** (Required) The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance. */
    instance_id:  any;
}