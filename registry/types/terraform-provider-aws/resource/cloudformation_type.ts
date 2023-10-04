export interface CloudformationType {
    resource: Resource[];
}

export interface Resource {
    cloudformation_type: CloudformationTypeClass;
}

export interface CloudformationTypeClass {
    /** (Optional) Amazon Resource Name (ARN) of the IAM Role for CloudFormation to assume when invoking the extension. If your extension calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. When CloudFormation needs to invoke the extension handler, CloudFormation assumes this execution role to create a temporary session token, which it then passes to the extension handler, thereby supplying your extension with the appropriate credentials. */
    execution_role_arn?:    any;
    logging_config?:        LoggingConfig;
    /** (Required) URL to the S3 bucket containing the extension project package that contains the necessary files for the extension you want to register. Must begin with `s3://` or `https://`. For example, `s3://example-bucket/example-object`. */
    schema_handler_package: any;
    /** (Optional) CloudFormation Registry Type. For example, `RESOURCE` or `MODULE`. */
    type?:                  any;
    /** (Optional) CloudFormation Type name. For example, `ExampleCompany::ExampleService::ExampleResource`. */
    type_name?:             any;
}

export interface LoggingConfig {
    /** (Required) Name of the CloudWatch Log Group where CloudFormation sends error logging information when invoking the type's handlers. */
    log_group_name: any;
    /** (Required) Amazon Resource Name (ARN) of the IAM Role CloudFormation assumes when sending error logging information to CloudWatch Logs. */
    log_role_arn:   any;
}