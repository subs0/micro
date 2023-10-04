export interface KinesisStream {
    resource: Resource[];
}

export interface Resource {
    kinesis_stream: KinesisStreamClass;
}

export interface KinesisStreamClass {
    /** (Required) A name to identify the stream. This is unique to the AWS account and region the Stream is created in. */
    name:                       any;
    /** (Optional) Length of time data records are accessible after they are added to the stream. The maximum value of a stream's retention period is 8760 hours. Minimum value is 24. Default is 24. */
    retention_period?:          any;
    /** (Optional) A list of shard-level CloudWatch metrics which can be enabled for the stream. See [Monitoring with CloudWatch][3] for more. Note that the value ALL should not be used; instead you should provide an explicit list of metrics you wish to enable. */
    shard_level_metrics?:       any;
    /** (Optional) A boolean that indicates all registered consumers should be deregistered from the stream so that the stream can be destroyed without error. The default value is `false`. */
    enforce_consumer_deletion?: any;
    /** (Optional) The encryption type to use. The only acceptable values are `NONE` or `KMS`. The default value is `NONE`. */
    encryption_type?:           any;
    /** (Optional) The GUID for the customer-managed KMS key to use for encryption. You can also use a Kinesis-owned master key by specifying the alias `alias/aws/kinesis`. */
    kms_key_id?:                any;
    /** (Optional) Indicates the [capacity mode](https://docs.aws.amazon.com/streams/latest/dev/how-do-i-size-a-stream.html) of the data stream. Detailed below. */
    stream_mode_details?:       any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
    /** (Required) Specifies the capacity mode of the stream. Must be either `PROVISIONED` or `ON_DEMAND`. */
    stream_mode:                any;
}