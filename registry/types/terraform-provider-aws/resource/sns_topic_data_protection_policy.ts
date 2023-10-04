export interface SnsTopicDataProtectionPolicy {
    resource: Resource[];
}

export interface Resource {
    sns_topic_data_protection_policy: SnsTopicDataProtectionPolicyClass;
}

export interface SnsTopicDataProtectionPolicyClass {
    /** (Required) The ARN of the SNS topic */
    arn:    any;
    /** (Required) The fully-formed AWS policy as JSON. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). */
    policy: any;
}