export interface SnsSMSPreferences {
    resource: Resource[];
}

export interface Resource {
    sns_sms_preferences: SnsSMSPreferencesClass;
}

export interface SnsSMSPreferencesClass {
    /** (Optional) The maximum amount in USD that you are willing to spend each month to send SMS messages. */
    monthly_spend_limit?:                   any;
    /** (Optional) The ARN of the IAM role that allows Amazon SNS to write logs about SMS deliveries in CloudWatch Logs. */
    delivery_status_iam_role_arn?:          any;
    /** (Optional) The percentage of successful SMS deliveries for which Amazon SNS will write logs in CloudWatch Logs. The value must be between 0 and 100. */
    delivery_status_success_sampling_rate?: any;
    /** (Optional) A string, such as your business brand, that is displayed as the sender on the receiving device. */
    default_sender_id?:                     any;
    /** (Optional) The type of SMS message that you will send by default. Possible values are: Promotional, Transactional */
    default_sms_type?:                      any;
    /** (Optional) The name of the Amazon S3 bucket to receive daily SMS usage reports from Amazon SNS. */
    usage_report_s3_bucket?:                any;
}