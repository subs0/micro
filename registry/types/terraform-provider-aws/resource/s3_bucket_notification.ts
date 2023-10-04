export interface S3BucketNotification {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_notification: S3BucketNotificationClass;
}

export interface S3BucketNotificationClass {
    /** (Required) Name of the bucket for notification configuration. */
    bucket:              any;
    /** (Optional) Whether to enable Amazon EventBridge notifications. Defaults to `false`. */
    eventbridge?:        any;
    /** (Optional, Multiple) Used to configure notifications to a Lambda Function. See below. */
    lambda_function?:    any;
    /** (Optional) Notification configuration to SQS Queue. See below. */
    queue?:              any;
    /** (Optional) Notification configuration to SNS Topic. See below. */
    topic?:              any;
    /** (Required) [Event](http://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html#notification-how-to-event-types-and-destinations) for which to send notifications. */
    events:              any;
    /** (Optional) Object key name prefix. */
    filter_prefix?:      any;
    /** (Optional) Object key name suffix. */
    filter_suffix?:      any;
    /** (Optional) Unique identifier for each of the notification configurations. */
    id?:                 any;
    /** (Required) Lambda function ARN. */
    lambda_function_arn: any;
    /** (Required) SQS queue ARN. */
    queue_arn:           any;
    /** (Required) SNS topic ARN. */
    topic_arn:           any;
}