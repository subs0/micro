export interface SqsQueueRedriveAllowPolicy {
    resource: Resource[];
}

export interface Resource {
    sqs_queue_redrive_allow_policy: SqsQueueRedriveAllowPolicyClass;
}

export interface SqsQueueRedriveAllowPolicyClass {
    /** (Required) The URL of the SQS Queue to which to attach the policy */
    queue_url:            any;
    /** (Required) The JSON redrive allow policy for the SQS queue. Learn more in the [Amazon SQS dead-letter queues documentation](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html). */
    redrive_allow_policy: any;
}