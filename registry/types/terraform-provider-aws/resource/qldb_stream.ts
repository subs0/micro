export interface QldbStream {
    resource: Resource[];
}

export interface Resource {
    qldb_stream: QldbStreamClass;
}

export interface QldbStreamClass {
    /** (Optional) The exclusive date and time that specifies when the stream ends. If you don't define this parameter, the stream runs indefinitely until you cancel it. It must be in ISO 8601 date and time format and in Universal Coordinated Time (UTC). For example: `"2019-06-13T21:36:34Z"`. */
    exclusive_end_time?:   any;
    /** (Required) The inclusive start date and time from which to start streaming journal data. This parameter must be in ISO 8601 date and time format and in Universal Coordinated Time (UTC). For example: `"2019-06-13T21:36:34Z"`.  This cannot be in the future and must be before `exclusive_end_time`.  If you provide a value that is before the ledger's `CreationDateTime`, QLDB effectively defaults it to the ledger's `CreationDateTime`. */
    inclusive_start_time:  any;
    kinesis_configuration: KinesisConfiguration;
    /** (Required) The name of the QLDB ledger. */
    ledger_name:           any;
    /** (Required) The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal stream to write data records to a Kinesis Data Streams resource. */
    role_arn:              any;
    /** (Required) The name that you want to assign to the QLDB journal stream. User-defined names can help identify and indicate the purpose of a stream.  Your stream name must be unique among other active streams for a given ledger. Stream names have the same naming constraints as ledger names, as defined in the [Amazon QLDB Developer Guide](https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming). */
    stream_name:           any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                 any;
}

export interface KinesisConfiguration {
    /** (Optional) Enables QLDB to publish multiple data records in a single Kinesis Data Streams record, increasing the number of records sent per API call. Default: `true`. */
    aggregation_enabled?: any;
    /** (Required) The Amazon Resource Name (ARN) of the Kinesis Data Streams resource. */
    stream_arn:           any;
}