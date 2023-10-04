export interface SnsTopicPolicy {
    resource: Resource[];
}

export interface Resource {
    sns_topic_policy: SnsTopicPolicyClass;
}

export interface SnsTopicPolicyClass {
    /** (Required) The ARN of the SNS topic */
    arn:    any;
    /** (Required) The fully-formed AWS policy as JSON. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). */
    policy: any;
}