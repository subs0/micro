export interface CloudcontrolapiResource {
    data: Datum[];
}

export interface Datum {
    cloudcontrolapi_resource: CloudcontrolapiResourceClass;
}

export interface CloudcontrolapiResourceClass {
    /** (Required) Identifier of the CloudFormation resource type. For example, `vpc-12345678`. */
    identifier:       any;
    /** (Required) CloudFormation resource type name. For example, `AWS::EC2::VPC`. */
    type_name:        any;
    /** (Optional) ARN of the IAM Role to assume for operations. */
    role_arn?:        any;
    /** (Optional) Identifier of the CloudFormation resource type version. */
    type_version_id?: any;
}