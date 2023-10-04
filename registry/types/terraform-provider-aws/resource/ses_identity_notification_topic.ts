export interface SesIdentityNotificationTopic {
    resource: Resource[];
}

export interface Resource {
    ses_identity_notification_topic: SesIdentityNotificationTopicClass;
}

export interface SesIdentityNotificationTopicClass {
    /** (Optional) The Amazon Resource Name (ARN) of the Amazon SNS topic. Can be set to `""` (an empty string) to disable publishing. */
    topic_arn?:                any;
    /** (Required) The type of notifications that will be published to the specified Amazon SNS topic. Valid Values: `Bounce`, `Complaint` or `Delivery`. */
    notification_type:         any;
    /** (Required) The identity for which the Amazon SNS topic will be set. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). */
    identity:                  any;
    /** (Optional) Whether SES should include original email headers in SNS notifications of this type. `false` by default. */
    include_original_headers?: any;
}