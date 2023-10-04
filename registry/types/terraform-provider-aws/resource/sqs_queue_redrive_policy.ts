export interface SqsQueueRedrivePolicy {
    resource: Resource[];
}

export interface Resource {
    sqs_queue_redrive_policy: SqsQueueRedrivePolicyClass;
}

export interface SqsQueueRedrivePolicyClass {
    /** (Required) The URL of the SQS Queue to which to attach the policy */
    queue_url:      any;
    /** (Required) The JSON redrive policy for the SQS queue. Accepts two key/val pairs: `deadLetterTargetArn` and `maxReceiveCount`. Learn more in the [Amazon SQS dead-letter queues documentation](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html). */
    redrive_policy: any;
}