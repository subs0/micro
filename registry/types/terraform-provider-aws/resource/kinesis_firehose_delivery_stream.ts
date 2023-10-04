export interface KinesisFirehoseDeliveryStream {
    resource: Resource[];
}

export interface Resource {
    kinesis_firehose_delivery_stream: KinesisFirehoseDeliveryStreamClass;
}

export interface KinesisFirehoseDeliveryStreamClass {
    /** (Required) The name of the HTTP endpoint common attribute. */
    name:                                  any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                 any;
    /** (Optional) Allows the ability to specify the kinesis stream that is used as the source of the firehose delivery stream. */
    kinesis_source_configuration?:         any;
    /** (Optional) Encrypt at rest options. */
    server_side_encryption?:               any;
    /** (Optional, only Required when `destination` is `extended_s3`) Enhanced configuration options for the s3 destination. More details are given below. */
    extended_s3_configuration?:            any;
    /** (Optional) Configuration options if redshift is the destination. */
    redshift_configuration?:               any;
    /** (Optional) Configuration options if elasticsearch is the destination. More details are given below. */
    elasticsearch_configuration?:          any;
    /** (Optional) Configuration options if opensearch is the destination. More details are given below. */
    opensearch_configuration?:             any;
    /** (Optional) Configuration options if splunk is the destination. More details are given below. */
    splunk_configuration?:                 any;
    /** (Optional) Configuration options if http_endpoint is the destination. requires the user to also specify a `s3_configuration` block.  More details are given below. */
    http_endpoint_configuration?:          any;
    /** (Optional) Amazon Resource Name (ARN) of the encryption key. Required when `key_type` is `CUSTOMER_MANAGED_CMK`. */
    key_arn?:                              any;
    data_format_conversion_configuration?: DataFormatConversionConfiguration;
    /** (Optional) The data processing configuration.  More details are given below. */
    processing_configuration?:             any;
    /** (Optional) Defines how documents should be delivered to Amazon S3.  Valid values are `FailedDataOnly` and `AllData`.  Default value is `FailedDataOnly`. */
    s3_backup_mode?:                       any;
    /** (Optional) The configuration for backup in Amazon S3. Required if `s3_backup_mode` is `Enabled`. Supports the same fields as `s3_configuration` object. */
    s3_backup_configuration?:              any;
    /** (Optional) The configuration for dynamic partitioning. See [Dynamic Partitioning Configuration](#dynamic_partitioning_configuration) below for more details. Required when using dynamic partitioning. */
    dynamic_partitioning_configuration?:   any;
    /** (Required) The jdbcurl of the redshift cluster. */
    cluster_jdbcurl:                       any;
    /** (Required) The username that the firehose delivery stream will assume. It is strongly recommended that the username and password provided is used exclusively for Amazon Kinesis Firehose purposes, and that the permissions for the account are restricted for Amazon Redshift INSERT permissions. */
    username:                              any;
    /** (Required) The password for the username above. */
    password:                              any;
    /** (Required) The S3 Configuration. See [s3_configuration](#s3-configuration) for more details. */
    s3_configuration:                      any;
    /** (Required) The name of the table in the redshift cluster that the s3 bucket will copy to. */
    data_table_name:                       any;
    /** (Optional) Copy options for copying the data from the s3 intermediate bucket into redshift, for example to change the default delimiter. For valid values, see the [AWS documentation](http://docs.aws.amazon.com/firehose/latest/APIReference/API_CopyCommand.html) */
    copy_options?:                         any;
    /** (Optional) The data table columns that will be targeted by the copy command. */
    data_table_columns?:                   any;
    /** (Optional) The ARN of the Amazon ES domain.  The pattern needs to be `arn:.*`.  Conflicts with `cluster_endpoint`. */
    domain_arn?:                           any;
    /** (Optional) The endpoint to use when communicating with the cluster. Conflicts with `domain_arn`. */
    cluster_endpoint?:                     any;
    /** (Required) The Opensearch index name. */
    index_name:                            any;
    /** (Optional) The Opensearch index rotation period.  Index rotation appends a timestamp to the IndexName to facilitate expiration of old data.  Valid values are `NoRotation`, `OneHour`, `OneDay`, `OneWeek`, and `OneMonth`.  The default value is `OneDay`. */
    index_rotation_period?:                any;
    /** (Optional) The Elasticsearch type name with maximum length of 100 characters. Types are deprecated in OpenSearch_1.1. TypeName must be empty. */
    type_name?:                            any;
    /** (Optional) The VPC configuration for the delivery stream to connect to OpenSearch associated with the VPC. More details are given below */
    vpc_config?:                           any;
    /** (Optional) The amount of time, in seconds between 180 and 600, that Kinesis Firehose waits to receive an acknowledgment from Splunk after it sends it data. */
    hec_acknowledgment_timeout?:           any;
    /** (Required) The HTTP Event Collector (HEC) endpoint to which Kinesis Firehose sends your data. */
    hec_endpoint:                          any;
    /** (Optional) The HEC endpoint type. Valid values are `Raw` or `Event`. The default value is `Raw`. */
    hec_endpoint_type?:                    any;
    /** (Required) The GUID that you obtain from your Splunk cluster when you create a new HEC endpoint. */
    hec_token:                             any;
    /** (Required) The HTTP endpoint URL to which Kinesis Firehose sends your data. */
    url:                                   any;
    /** (Optional) The access key required for Kinesis Firehose to authenticate with the HTTP endpoint selected as the destination. */
    access_key?:                           any;
    /** (Optional) The request configuration.  More details are given below. */
    request_configuration?:                any;
    /** (Optional) The CloudWatch group name for logging. This value is required if `enabled` is true. */
    log_group_name?:                       any;
    /** (Optional) The CloudWatch log stream name for logging. This value is required if `enabled` is true. */
    log_stream_name?:                      any;
    /** (Optional) Array of data processors. More details are given below */
    processors?:                           any;
    /** (Required) The type of processor. Valid Values: `RecordDeAggregation`, `Lambda`, `MetadataExtraction`, `AppendDelimiterToRecord`. Validation is done against [AWS SDK constants](https://docs.aws.amazon.com/sdk-for-go/api/service/firehose/#pkg-constants); so that values not explicitly listed may also work. */
    type:                                  any;
    /** (Optional) Array of processor parameters. More details are given below */
    parameters?:                           any;
    /** (Required) Parameter name. Valid Values: `LambdaArn`, `NumberOfRetries`, `MetadataExtractionQuery`, `JsonParsingEngine`, `RoleArn`, `BufferSizeInMBs`, `BufferIntervalInSeconds`, `SubRecordType`, `Delimiter`. Validation is done against [AWS SDK constants](https://docs.aws.amazon.com/sdk-for-go/api/service/firehose/#pkg-constants); so that values not explicitly listed may also work. */
    parameter_name:                        any;
    /** (Required) Parameter value. Must be between 1 and 512 length (inclusive). When providing a Lambda ARN, you should specify the resource version as well. */
    parameter_value:                       any;
    /** (Optional) Kinesis Data Firehose uses the content encoding to compress the body of a request before sending the request to the destination. Valid values are `NONE` and `GZIP`.  Default value is `NONE`. */
    content_encoding?:                     any;
    /** (Optional) Describes the metadata sent to the HTTP endpoint destination. More details are given below */
    common_attributes?:                    any;
    /** (Required) The value of the HTTP endpoint common attribute. */
    value:                                 any;
    /** (Required) A list of subnet IDs to associate with Kinesis Firehose. */
    subnet_ids:                            any;
    /** (Required) A list of security group IDs to associate with Kinesis Firehose. */
    security_group_ids:                    any;
}

export interface DataFormatConversionConfiguration {
    /** (Required) Nested argument that specifies the deserializer that you want Kinesis Data Firehose to use to convert the format of your data from JSON. More details below. */
    input_format_configuration:               any;
    /** (Required) Nested argument that specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data to the Parquet or ORC format. More details below. */
    output_format_configuration:              any;
    /** (Required) Nested argument that specifies the AWS Glue Data Catalog table that contains the column information. More details below. */
    schema_configuration:                     any;
    /** (Optional) Enables or disables dynamic partitioning. Defaults to `false`. */
    enabled:                                  any;
    /** (Required) The role that Kinesis Data Firehose can use to access AWS Glue. This role must be in the same account you use for Kinesis Data Firehose. Cross-account roles aren't allowed. */
    role_arn:                                 any;
    /** (Required) The ARN of the S3 bucket */
    bucket_arn:                               any;
    /** (Optional) The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered S3 files. You can specify an extra prefix to be added in front of the time format prefix. Note that if the prefix ends with a slash, it appears as a folder in the S3 bucket */
    prefix:                                   any;
    /** (Optional) Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5. */
    buffering_size:                           any;
    /** (Optional) Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300. */
    buffering_interval:                       any;
    /** (Optional) The compression format. If no value is specified, the default is `UNCOMPRESSED`. Other supported values are `GZIP`, `ZIP`, `Snappy`, & `HADOOP_SNAPPY`. */
    compression_format:                       any;
    /** (Optional) Prefix added to failed records before writing them to S3. Not currently supported for `redshift` destination. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html). */
    error_output_prefix:                      any;
    /** (Optional) Specifies the KMS key ARN the stream will use to encrypt data. If not set, no encryption will */
    kms_key_arn:                              any;
    /** (Optional) The CloudWatch Logging Options for the delivery stream. More details are given below */
    cloudwatch_logging_options:               any;
    /** (Required) Nested argument that specifies which deserializer to use. You can choose either the Apache Hive JSON SerDe or the OpenX JSON SerDe. More details below. */
    deserializer:                             any;
    /** (Optional) Nested argument that specifies the native Hive / HCatalog JsonSerDe. More details below. */
    hive_json_ser_de:                         any;
    /** (Optional) Nested argument that specifies the OpenX SerDe. More details below. */
    open_x_json_ser_de:                       any;
    /** (Optional) A list of how you want Kinesis Data Firehose to parse the date and time stamps that may be present in your input data JSON. To specify these format strings, follow the pattern syntax of JodaTime's DateTimeFormat format strings. For more information, see [Class DateTimeFormat](https://www.joda.org/joda-time/apidocs/org/joda/time/format/DateTimeFormat.html). You can also use the special value millis to parse time stamps in epoch milliseconds. If you don't specify a format, Kinesis Data Firehose uses java.sql.Timestamp::valueOf by default. */
    timestamp_formats:                        any;
    /** (Optional) When set to true, which is the default, Kinesis Data Firehose converts JSON keys to lowercase before deserializing them. */
    case_insensitive:                         any;
    /** (Optional) A map of column names to JSON keys that aren't identical to the column names. This is useful when the JSON contains keys that are Hive keywords. For example, timestamp is a Hive keyword. If you have a JSON key named timestamp, set this parameter to `{ ts = "timestamp" }` to map this key to a column named ts. */
    column_to_json_key_mappings:              any;
    /** (Optional) When set to `true`, specifies that the names of the keys include dots and that you want Kinesis Data Firehose to replace them with underscores. This is useful because Apache Hive does not allow dots in column names. For example, if the JSON contains a key whose name is "a.b", you can define the column name to be "a_b" when using this option. Defaults to `false`. */
    convert_dots_in_json_keys_to_underscores: any;
    /** (Required) Nested argument that specifies which serializer to use. You can choose either the ORC SerDe or the Parquet SerDe. More details below. */
    serializer:                               any;
    /** (Optional) Nested argument that specifies converting data to the ORC format before storing it in Amazon S3. For more information, see [Apache ORC](https://orc.apache.org/docs/). More details below. */
    orc_ser_de:                               any;
    /** (Optional) Nested argument that specifies converting data to the Parquet format before storing it in Amazon S3. For more information, see [Apache Parquet](https://parquet.apache.org/documentation/latest/). More details below. */
    parquet_ser_de:                           any;
    /** (Optional) The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the minimum is 64 MiB. Kinesis Data Firehose uses this value for padding calculations. */
    block_size_bytes:                         any;
    /** (Optional) A list of column names for which you want Kinesis Data Firehose to create bloom filters. */
    bloom_filter_columns:                     any;
    /** (Optional) The Bloom filter false positive probability (FPP). The lower the FPP, the bigger the Bloom filter. The default value is `0.05`, the minimum is `0`, and the maximum is `1`. */
    bloom_filter_false_positive_probability:  any;
    /** (Optional) The compression code to use over data blocks. The possible values are `UNCOMPRESSED`, `SNAPPY`, and `GZIP`, with the default being `SNAPPY`. Use `SNAPPY` for higher decompression speed. Use `GZIP` if the compression ratio is more important than speed. */
    compression:                              any;
    /** (Optional) A float that represents the fraction of the total number of non-null rows. To turn off dictionary encoding, set this fraction to a number that is less than the number of distinct keys in a dictionary. To always use dictionary encoding, set this threshold to `1`. */
    dictionary_key_threshold:                 any;
    /** (Optional) Set this to `true` to indicate that you want stripes to be padded to the HDFS block boundaries. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is `false`. */
    enable_padding:                           any;
    /** (Optional) The version of the file to write. The possible values are `V0_11` and `V0_12`. The default is `V0_12`. */
    format_version:                           any;
    /** (Optional) A float between 0 and 1 that defines the tolerance for block padding as a decimal fraction of stripe size. The default value is `0.05`, which means 5 percent of stripe size. For the default values of 64 MiB ORC stripes and 256 MiB HDFS blocks, the default block padding tolerance of 5 percent reserves a maximum of 3.2 MiB for padding within the 256 MiB block. In such a case, if the available size within the block is more than 3.2 MiB, a new, smaller stripe is inserted to fit within that space. This ensures that no stripe crosses block boundaries and causes remote reads within a node-local task. Kinesis Data Firehose ignores this parameter when `enable_padding` is `false`. */
    padding_tolerance:                        any;
    /** (Optional) The number of rows between index entries. The default is `10000` and the minimum is `1000`. */
    row_index_stride:                         any;
    /** (Optional) The number of bytes in each stripe. The default is 64 MiB and the minimum is 8 MiB. */
    stripe_size_bytes:                        any;
    /** (Optional) Indicates whether to enable dictionary compression. */
    enable_dictionary_compression:            any;
    /** (Optional) The maximum amount of padding to apply. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is `0`. */
    max_padding_bytes:                        any;
    /** (Optional) The Parquet page size. Column chunks are divided into pages. A page is conceptually an indivisible unit (in terms of compression and encoding). The minimum value is 64 KiB and the default is 1 MiB. */
    page_size_bytes:                          any;
    /** (Optional) Indicates the version of row format to output. The possible values are `V1` and `V2`. The default is `V1`. */
    writer_version:                           any;
    /** (Required) Specifies the name of the AWS Glue database that contains the schema for the output data. */
    database_name:                            any;
    /** (Required) Specifies the AWS Glue table that contains the column information that constitutes your data schema. */
    table_name:                               any;
    /** (Optional) The ID of the AWS Glue Data Catalog. If you don't supply this, the AWS account ID is used by default. */
    catalog_id:                               any;
    /** (Optional) If you don't specify an AWS Region, the default is the current region. */
    region:                                   any;
    /** (Optional) Specifies the table version for the output data schema. Defaults to `LATEST`. */
    version_id:                               any;
    /** (Optional) Total amount of seconds Firehose spends on retries. Valid values between 0 and 7200. Default is 300. */
    retry_duration:                           any;
}