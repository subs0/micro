export interface LambdaPermission {
    resource: Resource[];
}

export interface Resource {
    lambda_permission: LambdaPermissionClass;
}

export interface LambdaPermissionClass {
    /** (Required) The AWS Lambda action you want to allow in this statement. (e.g., `lambda:InvokeFunction`) */
    action:                  any;
    /** (Optional) The Event Source Token to validate.  Used with [Alexa Skills][1]. */
    event_source_token?:     any;
    /** (Required) Name of the Lambda function whose resource policy you are updating */
    function_name:           any;
    /** (Optional) Lambda Function URLs [authentication type][3]. Valid values are: `AWS_IAM` or `NONE`. Only supported for `lambda:InvokeFunctionUrl` action. */
    function_url_auth_type?: any;
    /** (Required) The principal who is getting this permission e.g., `s3.amazonaws.com`, an AWS account ID, or AWS IAM principal, or AWS service principal such as `events.amazonaws.com` or `sns.amazonaws.com`. */
    principal:               any;
    /** (Optional) Query parameter to specify function version or alias name. The permission will then apply to the specific qualified ARN e.g., `arn:aws:lambda:aws-region:acct-id:function:function-name:2` */
    qualifier?:              any;
    /** (Optional) This parameter is used when allowing cross-account access, or for S3 and SES. The AWS account ID (without a hyphen) of the source owner. */
    source_account?:         any;
    /** (Optional) When the principal is an AWS service, the ARN of the specific resource within that service to grant permission to. */
    source_arn?:             any;
    /** (Optional) A unique statement identifier. By default generated by Terraform. */
    statement_id?:           any;
    /** (Optional) A statement identifier prefix. Terraform will generate a unique suffix. Conflicts with `statement_id`. */
    statement_id_prefix?:    any;
    /** (Optional) The identifier for your organization in AWS Organizations. Use this to grant permissions to all the AWS accounts under this organization. */
    principal_org_id?:       any;
}