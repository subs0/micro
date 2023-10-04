export interface S3ControlObjectLambdaAccessPointPolicy {
    resource: Resource[];
}

export interface Resource {
    s3control_object_lambda_access_point_policy: S3ControlObjectLambdaAccessPointPolicyClass;
}

export interface S3ControlObjectLambdaAccessPointPolicyClass {
    /** (Optional) The AWS account ID for the account that owns the Object Lambda Access Point. Defaults to automatically determined account ID of the Terraform AWS provider. */
    account_id?: any;
    /** (Required) The name of the Object Lambda Access Point. */
    name:        any;
    /** (Required) The Object Lambda Access Point resource policy document. */
    policy:      any;
}