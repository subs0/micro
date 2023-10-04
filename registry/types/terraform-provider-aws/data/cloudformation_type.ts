export interface CloudformationType {
    data: Datum[];
}

export interface Datum {
    cloudformation_type: CloudformationTypeClass;
}

export interface CloudformationTypeClass {
    /** (Optional) ARN of the CloudFormation Type. For example, `arn:aws:cloudformation:us-west-2::type/resource/AWS-EC2-VPC`. */
    arn?:        any;
    /** (Optional) CloudFormation Registry Type. For example, `RESOURCE`. */
    type?:       any;
    /** (Optional) CloudFormation Type name. For example, `AWS::EC2::VPC`. */
    type_name?:  any;
    /** (Optional) Identifier of the CloudFormation Type version. */
    version_id?: any;
}