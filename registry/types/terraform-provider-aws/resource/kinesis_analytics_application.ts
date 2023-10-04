export interface KinesisAnalyticsApplication {
    resource: Resource[];
}

export interface Resource {
    kinesis_analytics_application: KinesisAnalyticsApplicationClass;
}

export interface KinesisAnalyticsApplicationClass {
    /** (Required) Name of the column. */
    name:                        any;
    /** (Optional) SQL Code to transform input data, and generate output. */
    code?:                       any;
    /** (Optional) Description of the application. */
    description?:                any;
    /** (Optional) The CloudWatch log stream options to monitor application errors. */
    cloudwatch_logging_options?: any;
    /** (Optional) Input configuration of the application. See [Inputs](#inputs) below for more details. */
    inputs?:                     any;
    /** (Optional) Output destination configuration of the application. See [Outputs](#outputs) below for more details. */
    outputs?:                    any;
    /** (Optional) An S3 Reference Data Source for the application. */
    reference_data_sources?:     any;
    /** (Optional) Whether to start or stop the Kinesis Analytics Application. To start an application, an input with a defined `starting_position` must be configured. */
    start_application?:          any;
    /** Key-value map of tags for the Kinesis Analytics Application. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                       any;
    /** (Required) The ARN of the CloudWatch Log Stream. */
    log_stream_arn:              any;
    /** (Required) The IAM Role ARN to read the data. */
    role_arn:                    any;
    /** (Required) The Name Prefix to use when creating an in-application stream. */
    name_prefix:                 any;
    /** (Required) The Schema format of the data in the streaming source. See [Source Schema](#source-schema) below for more details. */
    schema:                      any;
    /** (Optional) The Kinesis Firehose configuration for the destination stream. Conflicts with `kinesis_stream`. */
    kinesis_firehose?:           any;
    /** (Optional) The Kinesis Stream configuration for the destination stream. Conflicts with `kinesis_firehose`. */
    kinesis_stream?:             any;
    /** (Optional) The number of Parallel in-application streams to create. */
    parallelism?:                any;
    /** (Optional) The Processing Configuration to transform records as they are received from the stream. */
    processing_configuration?:   any;
    /** (Required) The Lambda function configuration. See [Lambda](#lambda) below for more details. */
    lambda:                      any;
    /** (Required) The in-application Table Name. */
    table_name:                  any;
    /** (Optional) The S3 configuration for the reference data source. See [S3 Reference](#s3-reference) below for more details. */
    s3?:                         any;
    /** (Required) The ARN of the Lambda function. */
    resource_arn:                any;
    /** (Required) The type of Record Format. Can be `CSV` or `JSON`. */
    record_format_type:          any;
    /** (Required) The Record Column mapping for the streaming source data element. */
    record_columns:              any;
    /** (Required) The Record Format and mapping information to schematize a record. */
    record_format:               any;
    /** (Optional) The Encoding of the record in the streaming source. */
    record_encoding?:            any;
    /** (Required) The Count of streams. */
    count:                       any;
    /** (Required) The starting position on the stream. Valid values: `LAST_STOPPED_POINT`, `NOW`, `TRIM_HORIZON`. */
    starting_position:           any;
    /** (Required) The SQL Type of the column. */
    sql_type:                    any;
    /** (Optional) The Mapping reference to the data element. */
    mapping?:                    any;
    /** (Optional) The Mapping Information for the record format. */
    mapping_parameters?:         any;
    /** (Optional) Mapping information when the record format uses delimiters. */
    csv?:                        any;
    /** (Optional) Mapping information when JSON is the record format on the streaming source. */
    json?:                       any;
    /** (Required) The Column Delimiter. */
    record_column_delimiter:     any;
    /** (Required) The Row Delimiter. */
    record_row_delimiter:        any;
    /** (Required) Path to the top-level parent that contains the records. */
    record_row_path:             any;
    /** (Required) The S3 Bucket ARN. */
    bucket_arn:                  any;
    /** (Required) The File Key name containing reference data. */
    file_key:                    any;
}