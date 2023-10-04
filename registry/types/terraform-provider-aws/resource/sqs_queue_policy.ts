export interface SqsQueuePolicy {
    resource: Resource[];
}

export interface Resource {
    sqs_queue_policy: SqsQueuePolicyClass;
}

export interface SqsQueuePolicyClass {
    /** (Required) The URL of the SQS Queue to which to attach the policy */
    queue_url: any;
    /** (Required) The JSON policy for the SQS queue. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). */
    policy:    any;
}