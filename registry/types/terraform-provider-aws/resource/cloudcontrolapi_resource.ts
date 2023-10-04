export interface CloudcontrolapiResource {
    resource: Resource[];
}

export interface Resource {
    cloudcontrolapi_resource: CloudcontrolapiResourceClass;
}

export interface CloudcontrolapiResourceClass {
    /** (Required) JSON string matching the CloudFormation resource type schema with desired configuration. Terraform configuration expressions can be converted into JSON using the [`jsonencode()` function](https://www.terraform.io/docs/language/functions/jsonencode.html). */
    desired_state:    any;
    /** (Required) CloudFormation resource type name. For example, `AWS::EC2::VPC`. */
    type_name:        any;
    /** (Optional) Amazon Resource Name (ARN) of the IAM Role to assume for operations. */
    role_arn?:        any;
    /** (Optional) JSON string of the CloudFormation resource type schema which is used for plan time validation where possible. Automatically fetched if not provided. In large scale environments with multiple resources using the same `type_name`, it is recommended to fetch the schema once via the [`aws_cloudformation_type` data source](/docs/providers/aws/d/cloudformation_type.html) and use this argument to reduce `DescribeType` API operation throttling. This value is marked sensitive only to prevent large plan differences from showing. */
    schema?:          any;
    /** (Optional) Identifier of the CloudFormation resource type version. */
    type_version_id?: any;
}