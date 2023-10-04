export interface ConnectInstanceStorageConfig {
    resource: Resource[];
}

export interface Resource {
    connect_instance_storage_config: ConnectInstanceStorageConfigClass;
}

export interface ConnectInstanceStorageConfigClass {
    /** (Required) Specifies the identifier of the hosting Amazon Connect Instance. */
    instance_id:                  any;
    /** (Required) A valid resource type. Valid Values: `AGENT_EVENTS` | `ATTACHMENTS` | `CALL_RECORDINGS` | `CHAT_TRANSCRIPTS` | `CONTACT_EVALUATIONS` | `CONTACT_TRACE_RECORDS` | `MEDIA_STREAMS` | `REAL_TIME_CONTACT_ANALYSIS_SEGMENTS` | `SCHEDULED_REPORTS` | `SCREEN_RECORDINGS`. */
    resource_type:                any;
    /** (Required) Specifies the storage configuration options for the Connect Instance. [Documented below](#storage_config). */
    storage_config:               any;
    /** (Required if `type` is set to `KINESIS_FIREHOSE`) A block that specifies the configuration of the Kinesis Firehose delivery stream. [Documented below](#kinesis_firehose_config). */
    kinesis_firehose_config?:     any;
    /** (Required if `type` is set to `KINESIS_STREAM`) A block that specifies the configuration of the Kinesis data stream. [Documented below](#kinesis_stream_config). */
    kinesis_stream_config?:       any;
    /** (Required if `type` is set to `KINESIS_VIDEO_STREAM`) A block that specifies the configuration of the Kinesis video stream. [Documented below](#kinesis_video_stream_config). */
    kinesis_video_stream_config?: any;
    /** (Required if `type` is set to `S3`) A block that specifies the configuration of S3 Bucket. [Documented below](#s3_config). */
    s3_config?:                   any;
    /** (Required) A valid storage type. Valid Values: `S3` | `KINESIS_VIDEO_STREAM` | `KINESIS_STREAM` | `KINESIS_FIREHOSE`. */
    storage_type:                 any;
    /** (Required) The Amazon Resource Name (ARN) of the delivery stream. */
    firehose_arn:                 any;
    /** (Required) The Amazon Resource Name (ARN) of the data stream. */
    stream_arn:                   any;
    /** (Required) The encryption configuration. [Documented below](#encryption_config). */
    encryption_config:            any;
    /** (Required) The prefix of the video stream. Minimum length of `1`. Maximum length of `128`. When read from the state, the value returned is `<prefix>-connect-<connect_instance_alias>-contact-` since the API appends additional details to the `prefix`. */
    prefix:                       any;
    /** (Required) The number of hours data is retained in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream. Minimum value of `0`. Maximum value of `87600`. A value of `0`, indicates that the stream does not persist data. */
    retention_period_hours:       any;
    /** (Required) The S3 bucket name. */
    bucket_name:                  any;
    /** (Required) The S3 bucket prefix. */
    bucket_prefix:                any;
    /** (Required) The type of encryption. Valid Values: `KMS`. */
    encryption_type:              any;
    /** (Required) The full ARN of the encryption key. Be sure to provide the full ARN of the encryption key, not just the ID. */
    key_id:                       any;
}