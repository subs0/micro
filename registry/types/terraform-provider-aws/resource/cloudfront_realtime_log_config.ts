export interface CloudfrontRealtimeLogConfig {
    resource: Resource[];
}

export interface Resource {
    cloudfront_realtime_log_config: CloudfrontRealtimeLogConfigClass;
}

export interface CloudfrontRealtimeLogConfigClass {
    /** (Required) The Amazon Kinesis data streams where real-time log data is sent. */
    endpoint:              any;
    /** (Required) The fields that are included in each real-time log record. See the [AWS documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields) for supported values. */
    fields:                any;
    /** (Required) The unique name to identify this real-time log configuration. */
    name:                  any;
    /** (Required) The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. An integer between `1` and `100`, inclusive. */
    sampling_rate:         any;
    /** (Required) The Amazon Kinesis data stream configuration. */
    kinesis_stream_config: any;
    /** (Required) The type of data stream where real-time log data is sent. The only valid value is `Kinesis`. */
    stream_type:           any;
    /** (Required) The ARN of an [IAM role](iam_role.html) that CloudFront can use to send real-time log data to the Kinesis data stream. */
    role_arn:              any;
    /** (Required) The ARN of the [Kinesis data stream](kinesis_stream.html). */
    stream_arn:            any;
}