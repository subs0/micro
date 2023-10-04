export interface Cloudtrail {
    resource: Resource[];
}

export interface Resource {
    cloudtrail: CloudtrailClass;
}

export interface CloudtrailClass {
    /** (Required) Name of the trail. */
    name:                           any;
    /** (Required) Name of the S3 bucket designated for publishing log files. */
    s3_bucket_name:                 any;
    /** (Optional) Specifies an advanced event selector for enabling data event logging. Fields documented below. Conflicts with `event_selector`. */
    advanced_event_selector?:       any;
    /** (Optional) Log group name using an ARN that represents the log group to which CloudTrail logs will be delivered. Note that CloudTrail requires the Log Stream wildcard. */
    cloud_watch_logs_group_arn?:    any;
    /** (Optional) Role for the CloudWatch Logs endpoint to assume to write to a user’s log group. */
    cloud_watch_logs_role_arn?:     any;
    /** (Optional) Whether log file integrity validation is enabled. Defaults to `false`. */
    enable_log_file_validation?:    any;
    /** (Optional) Enables logging for the trail. Defaults to `true`. Setting this to `false` will pause logging. */
    enable_logging?:                any;
    event_selector?:                EventSelector;
    /** (Optional) Whether the trail is publishing events from global services such as IAM to the log files. Defaults to `true`. */
    include_global_service_events?: any;
    insight_selector?:              InsightSelector;
    /** (Optional) Whether the trail is created in the current region or in all regions. Defaults to `false`. */
    is_multi_region_trail?:         any;
    /** (Optional) Whether the trail is an AWS Organizations trail. Organization trails log events for the master account and all member accounts. Can only be created in the organization master account. Defaults to `false`. */
    is_organization_trail?:         any;
    /** (Optional) KMS key ARN to use to encrypt the logs delivered by CloudTrail. */
    kms_key_id?:                    any;
    /** (Optional) S3 key prefix that follows the name of the bucket you have designated for log file delivery. */
    s3_key_prefix?:                 any;
    /** (Optional) Name of the Amazon SNS topic defined for notification of log file delivery. */
    sns_topic_name?:                any;
    /** (Optional) Map of tags to assign to the trail. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
}

export interface EventSelector {
    /** (Optional) Configuration block for data events. See details below. */
    data_resource:             any;
    /** (Optional) Whether to include management events for your trail. Defaults to `true`. */
    include_management_events: any;
    /** (Optional) Type of events to log. Valid values are `ReadOnly`, `WriteOnly`, `All`. Default value is `All`. */
    read_write_type:           any;
    /** (Required) Resource type in which you want to log data events. You can specify only the following value: "AWS::S3::Object", "AWS::Lambda::Function" and "AWS::DynamoDB::Table". */
    type:                      any;
    /** (Required) List of ARN strings or partial ARN strings to specify selectors for data audit events over data resources. ARN list is specific to single-valued `type`. For example, `arn:aws:s3:::<bucket name>/` for all objects in a bucket, `arn:aws:s3:::<bucket name>/key` for specific objects, `arn:aws:lambda` for all lambda events within an account, `arn:aws:lambda:<region>:<account number>:function:<function name>` for a specific Lambda function, `arn:aws:dynamodb` for all DDB events for all tables within an account, or `arn:aws:dynamodb:<region>:<account number>:table/<table name>` for a specific DynamoDB table. */
    values:                    any;
}

export interface InsightSelector {
    /** (Optional) Type of insights to log on a trail. Valid values are: `ApiCallRateInsight` and `ApiErrorRateInsight`. */
    insight_type: any;
}