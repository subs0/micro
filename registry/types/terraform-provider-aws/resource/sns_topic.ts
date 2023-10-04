export interface SnsTopic {
    resource: Resource[];
}

export interface Resource {
    sns_topic: SnsTopicClass;
}

export interface SnsTopicClass {
    /** (Optional) The name of the topic. Topic names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. For a FIFO (first-in-first-out) topic, the name must end with the `.fifo` suffix. If omitted, Terraform will assign a random, unique name. Conflicts with `name_prefix` */
    name?:                                     any;
    /** (Optional) Creates a unique name beginning with the specified prefix. Conflicts with `name` */
    name_prefix?:                              any;
    /** (Optional) The display name for the topic */
    display_name?:                             any;
    /** (Optional) The fully-formed AWS policy as JSON. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). */
    policy?:                                   any;
    /** (Optional) The SNS delivery policy. More on [AWS documentation](https://docs.aws.amazon.com/sns/latest/dg/DeliveryPolicies.html) */
    delivery_policy?:                          any;
    /** (Optional) The IAM role permitted to receive success feedback for this topic */
    application_success_feedback_role_arn?:    any;
    /** (Optional) Percentage of success to sample */
    application_success_feedback_sample_rate?: any;
    /** (Optional) IAM role for failure feedback */
    application_failure_feedback_role_arn?:    any;
    /** (Optional) The IAM role permitted to receive success feedback for this topic */
    http_success_feedback_role_arn?:           any;
    /** (Optional) Percentage of success to sample */
    http_success_feedback_sample_rate?:        any;
    /** (Optional) IAM role for failure feedback */
    http_failure_feedback_role_arn?:           any;
    /** (Optional) The ID of an AWS-managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see [Key Terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms) */
    kms_master_key_id?:                        any;
    /** (Optional) If `SignatureVersion` should be [1 (SHA1) or 2 (SHA256)](https://docs.aws.amazon.com/sns/latest/dg/sns-verify-signature-of-message.html). The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. */
    signature_version?:                        any;
    /** (Optional) Tracing mode of an Amazon SNS topic. Valid values: `"PassThrough"`, `"Active"`. */
    tracing_config?:                           any;
    /** (Optional) Boolean indicating whether or not to create a FIFO (first-in-first-out) topic (default is `false`). */
    fifo_topic?:                               any;
    /** (Optional) Enables content-based deduplication for FIFO topics. For more information, see the [related documentation](https://docs.aws.amazon.com/sns/latest/dg/fifo-message-dedup.html) */
    content_based_deduplication?:              any;
    /** (Optional) The IAM role permitted to receive success feedback for this topic */
    lambda_success_feedback_role_arn?:         any;
    /** (Optional) Percentage of success to sample */
    lambda_success_feedback_sample_rate?:      any;
    /** (Optional) IAM role for failure feedback */
    lambda_failure_feedback_role_arn?:         any;
    /** (Optional) The IAM role permitted to receive success feedback for this topic */
    sqs_success_feedback_role_arn?:            any;
    /** (Optional) Percentage of success to sample */
    sqs_success_feedback_sample_rate?:         any;
    /** (Optional) IAM role for failure feedback */
    sqs_failure_feedback_role_arn?:            any;
    /** (Optional) The IAM role permitted to receive success feedback for this topic */
    firehose_success_feedback_role_arn?:       any;
    /** (Optional) Percentage of success to sample */
    firehose_success_feedback_sample_rate?:    any;
    /** (Optional) IAM role for failure feedback */
    firehose_failure_feedback_role_arn?:       any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                     any;
}