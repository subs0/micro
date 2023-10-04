export interface DmsEndpoint {
    resource: Resource[];
}

export interface Resource {
    dms_endpoint: DmsEndpointClass;
}

export interface DmsEndpointClass {
    /** (Required) Database endpoint identifier. Identifiers must contain from 1 to 255 alphanumeric characters or hyphens, begin with a letter, contain only ASCII letters, digits, and hyphens, not end with a hyphen, and not contain two consecutive hyphens. */
    endpoint_id:                      any;
    /** (Required) Type of endpoint. Valid values are `source`, `target`. */
    endpoint_type:                    any;
    /** (Required) Type of engine for the endpoint. Valid values are `aurora`, `aurora-postgresql`, `azuredb`, `azure-sql-managed-instance`, `babelfish`, `db2`, `db2-zos`, `docdb`, `dynamodb`, `elasticsearch`, `kafka`, `kinesis`, `mariadb`, `mongodb`, `mysql`, `opensearch`, `oracle`, `postgres`, `redshift`, `s3`, `sqlserver`, `sybase`. Please note that some of engine names are available only for `target` endpoint type (e.g. `redshift`). */
    engine_name:                      any;
    /** (Required when `engine_name` is `mongodb`, cannot be set when `engine_name` is `s3`, optional otherwise) ARN for the KMS key that will be used to encrypt the connection parameters. If you do not specify a value for `kms_key_arn`, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region. To encrypt an S3 target with a KMS Key, use the parameter `s3_settings.server_side_encryption_kms_key_id`. When `engine_name` is `redshift`, `kms_key_arn` is the KMS Key for the Redshift target and the parameter `redshift_settings.server_side_encryption_kms_key_id` encrypts the S3 intermediate storage. */
    kms_key_arn?:                     any;
    /** (Optional, Default: empty string) ARN for the certificate. */
    certificate_arn?:                 any;
    /** (Optional) Name of the endpoint database. */
    database_name?:                   any;
    elasticsearch_settings?:          ElasticsearchSettings;
    /** (Optional) Additional attributes associated with the connection. For available attributes for a `source` Endpoint, see [Sources for data migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.html). For available attributes for a `target` Endpoint, see [Targets for data migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.html). */
    extra_connection_attributes?:     any;
    kafka_settings?:                  KafkaSettings;
    kinesis_settings?:                KinesisSettings;
    mongodb_settings?:                MongodbSettings;
    /** (Optional) Password to be used to login to the endpoint database. */
    password?:                        any;
    /** (Required) Transmission Control Protocol (TCP) port for the endpoint. */
    port:                             any;
    redshift_settings?:               RedshiftSettings;
    s3_settings?:                     S3Settings;
    /** (Optional) ARN of the IAM role that specifies AWS DMS as the trusted entity and has the required permissions to access the value in SecretsManagerSecret. */
    secrets_manager_access_role_arn?: any;
    /** (Optional) Full ARN, partial ARN, or friendly name of the SecretsManagerSecret that contains the endpoint connection details. Supported only when `engine_name` is `aurora`, `aurora-postgresql`, `mariadb`, `mongodb`, `mysql`, `oracle`, `postgres`, `redshift`, or `sqlserver`. */
    secrets_manager_arn?:             any;
    /** (Required) Fully qualified domain name of the endpoint. */
    server_name:                      any;
    /** (Optional) ARN used by the service access IAM role for dynamodb endpoints. */
    service_access_role?:             any;
    /** (Optional, Default: `none`) SSL mode to use for the connection. Valid values are `none`, `require`, `verify-ca`, `verify-full` */
    ssl_mode?:                        any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
    /** (Optional) User name to be used to login to the endpoint database. */
    username?:                        any;
    /** (Optional) The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint. */
    ssl_ca_certificate_arn?:          any;
    /** (Optional) The password provided with the auth-role and auth-token options of the AuthType setting for a Redis target endpoint. */
    auth_password?:                   any;
    /** (Required) The type of authentication to perform when connecting to a Redis target. Options include `none`, `auth-token`, and `auth-role`. The `auth-token` option requires an `auth_password` value to be provided. The `auth-role` option requires `auth_user_name` and `auth_password` values to be provided. */
    auth_type:                        any;
    /** (Optional) The username provided with the `auth-role` option of the AuthType setting for a Redis target endpoint. */
    auth_user_name?:                  any;
}

export interface ElasticsearchSettings {
    /** (Required) Endpoint for the OpenSearch cluster. */
    endpoint_uri:               any;
    /** (Optional) Maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster. Default is `300`. */
    error_retry_duration:       any;
    /** (Optional) Maximum percentage of records that can fail to be written before a full load operation stops. Default is `10`. */
    full_load_error_percentage: any;
    /** (Optional) ARN of the IAM Role with permissions to read from or write to the S3 Bucket. */
    service_access_role_arn:    any;
}

export interface KafkaSettings {
    /** (Required) Kafka broker location. Specify in the form broker-hostname-or-ip:port. */
    broker:                         any;
    /** (Optional) Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output. Default is `false`. */
    include_control_details:        any;
    /** (Optional) Include NULL and empty columns in the target. Default is `false`. */
    include_null_and_empty:         any;
    /** (Optional) Shows the partition value within the Kinesis message output, unless the partition type is schema-table-type. Default is `false`. */
    include_partition_value:        any;
    /** (Optional) Includes any data definition language (DDL) operations that change the table in the control data. Default is `false`. */
    include_table_alter_operations: any;
    /** (Optional) Provides detailed transaction information from the source database. Default is `false`. */
    include_transaction_details:    any;
    /** (Optional) Output format for the records created. Default is `json`. Valid values are `json` and `json-unformatted` (a single line with no tab). */
    message_format:                 any;
    /** (Optional) Maximum size in bytes for records created on the endpoint Default is `1,000,000`. */
    message_max_bytes:              any;
    /** (Optional) Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format. For example, by default, AWS DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to a Kafka target. Use the `no_hex_prefix` endpoint setting to enable migration of RAW data type columns without adding the `'0x'` prefix. */
    no_hex_prefix:                  any;
    /** (Optional) Prefixes schema and table names to partition values, when the partition type is primary-key-type. Default is `false`. */
    partition_include_schema_table: any;
    /** (Optional) Secure password you created when you first set up your MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication. */
    sasl_password:                  any;
    /** (Optional) Secure user name you created when you first set up your MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication. */
    sasl_username:                  any;
    /** (Optional) Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS). Options include `ssl-encryption`, `ssl-authentication`, and `sasl-ssl`. `sasl-ssl` requires `sasl_username` and `sasl_password`. */
    security_protocol:              any;
    /** (Optional) The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint. */
    ssl_ca_certificate_arn:         any;
    /** (Optional) ARN of the client certificate used to securely connect to a Kafka target endpoint. */
    ssl_client_certificate_arn:     any;
    /** (Optional) ARN for the client private key used to securely connect to a Kafka target endpoint. */
    ssl_client_key_arn:             any;
    /** (Optional) Password for the client private key used to securely connect to a Kafka target endpoint. */
    ssl_client_key_password:        any;
    /** (Optional) Kafka topic for migration. Default is `kafka-default-topic`. */
    topic:                          any;
}

export interface KinesisSettings {
    /** (Optional) Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output. Default is `false`. */
    include_control_details:        any;
    /** (Optional) Include NULL and empty columns in the target. Default is `false`. */
    include_null_and_empty:         any;
    /** (Optional) Shows the partition value within the Kinesis message output, unless the partition type is schema-table-type. Default is `false`. */
    include_partition_value:        any;
    /** (Optional) Includes any data definition language (DDL) operations that change the table in the control data. Default is `false`. */
    include_table_alter_operations: any;
    /** (Optional) Provides detailed transaction information from the source database. Default is `false`. */
    include_transaction_details:    any;
    /** (Optional) Output format for the records created. Default is `json`. Valid values are `json` and `json-unformatted` (a single line with no tab). */
    message_format:                 any;
    /** (Optional) Prefixes schema and table names to partition values, when the partition type is primary-key-type. Default is `false`. */
    partition_include_schema_table: any;
    /** (Optional) ARN of the IAM Role with permissions to read from or write to the S3 Bucket. */
    service_access_role_arn:        any;
    /** (Optional) ARN of the Kinesis data stream. */
    stream_arn:                     any;
}

export interface MongodbSettings {
    /** (Optional) Authentication mechanism to access the MongoDB source endpoint. Default is `default`. */
    auth_mechanism:      any;
    /** (Optional) Authentication database name. Not used when `auth_type` is `no`. Default is `admin`. */
    auth_source:         any;
    /** (Required) The type of authentication to perform when connecting to a Redis target. Options include `none`, `auth-token`, and `auth-role`. The `auth-token` option requires an `auth_password` value to be provided. The `auth-role` option requires `auth_user_name` and `auth_password` values to be provided. */
    auth_type:           any;
    /** (Optional) Number of documents to preview to determine the document organization. Use this setting when `nesting_level` is set to `one`. Default is `1000`. */
    docs_to_investigate: any;
    /** (Optional) Document ID. Use this setting when `nesting_level` is set to `none`. Default is `false`. */
    extract_doc_id:      any;
    /** (Optional) Specifies either document or table mode. Default is `none`. Valid values are `one` (table mode) and `none` (document mode). */
    nesting_level:       any;
}

export interface RedshiftSettings {
    /** (Optional) S3 object prefix. */
    bucket_folder:                     any;
    /** (Optional) S3 bucket name. */
    bucket_name:                       any;
    /** (Optional) Server-side encryption mode that you want to encrypt your .csv or .parquet object files copied to S3. Valid values are `SSE_S3` and `SSE_KMS`. Default is `SSE_S3`. */
    encryption_mode:                   any;
    /** (Required when `encryption_mode` is  `SSE_KMS`, must not be set otherwise) ARN or Id of KMS Key to use when `encryption_mode` is `SSE_KMS`. */
    server_side_encryption_kms_key_id: any;
    /** (Optional) ARN of the IAM Role with permissions to read from or write to the S3 Bucket. */
    service_access_role_arn:           any;
}

export interface S3Settings {
    /** (Optional) Whether to add column name information to the .csv output file. Default is `false`. */
    add_column_name:                             any;
    /** (Optional) S3 object prefix. */
    bucket_folder:                               any;
    /** (Optional) S3 bucket name. */
    bucket_name:                                 any;
    /** (Optional) Predefined (canned) access control list for objects created in an S3 bucket. Valid values include `none`, `private`, `public-read`, `public-read-write`, `authenticated-read`, `aws-exec-read`, `bucket-owner-read`, and `bucket-owner-full-control`. Default is `none`. */
    canned_acl_for_objects:                      any;
    /** (Optional) Whether to write insert and update operations to .csv or .parquet output files. Default is `false`. */
    cdc_inserts_and_updates:                     any;
    /** (Optional) Whether to write insert operations to .csv or .parquet output files. Default is `false`. */
    cdc_inserts_only:                            any;
    /** (Optional) Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3. Default is `60`. */
    cdc_max_batch_interval:                      any;
    /** (Optional) Minimum file size condition as defined in kilobytes to output a file to Amazon S3. Default is `32000`. **NOTE:** Previously, this setting was measured in megabytes but now represents kilobytes. Update configurations accordingly. */
    cdc_min_file_size:                           any;
    /** (Optional) Folder path of CDC files. For an S3 source, this setting is required if a task captures change data; otherwise, it's optional. If `cdc_path` is set, AWS DMS reads CDC files from this path and replicates the data changes to the target endpoint. Supported in AWS DMS versions 3.4.2 and later. */
    cdc_path:                                    any;
    /** (Optional) Set to compress target files. Default is `NONE`. Valid values are `GZIP` and `NONE`. */
    compression_type:                            any;
    /** (Optional) Delimiter used to separate columns in the source files. Default is `,`. */
    csv_delimiter:                               any;
    /** (Optional) String to use for all columns not included in the supplemental log. */
    csv_no_sup_value:                            any;
    /** (Optional) String to as null when writing to the target. */
    csv_null_value:                              any;
    /** (Optional) Delimiter used to separate rows in the source files. Default is `\n`. */
    csv_row_delimiter:                           any;
    /** (Optional) Output format for the files that AWS DMS uses to create S3 objects. Valid values are `csv` and `parquet`. Default is `csv`. */
    data_format:                                 any;
    /** (Optional) Size of one data page in bytes. Default is `1048576` (1 MiB). */
    data_page_size:                              any;
    /** (Optional) Date separating delimiter to use during folder partitioning. Valid values are `SLASH`, `UNDERSCORE`, `DASH`, and `NONE`. Default is `SLASH`. */
    date_partition_delimiter:                    any;
    /** (Optional) Partition S3 bucket folders based on transaction commit dates. Default is `false`. */
    date_partition_enabled:                      any;
    /** (Optional) Date format to use during folder partitioning. Use this parameter when `date_partition_enabled` is set to true. Valid values are `YYYYMMDD`, `YYYYMMDDHH`, `YYYYMM`, `MMYYYYDD`, and `DDMMYYYY`. Default is `YYYYMMDD`. */
    date_partition_sequence:                     any;
    /** (Optional) Maximum size in bytes of an encoded dictionary page of a column. Default is `1048576` (1 MiB). */
    dict_page_size_limit:                        any;
    /** (Optional) Whether to enable statistics for Parquet pages and row groups. Default is `true`. */
    enable_statistics:                           any;
    /** (Optional) Type of encoding to use. Value values are `rle_dictionary`, `plain`, and `plain_dictionary`. Default is `rle_dictionary`. */
    encoding_type:                               any;
    /** (Optional) Server-side encryption mode that you want to encrypt your .csv or .parquet object files copied to S3. Valid values are `SSE_S3` and `SSE_KMS`. Default is `SSE_S3`. */
    encryption_mode:                             any;
    /** (Optional) JSON document that describes how AWS DMS should interpret the data. */
    external_table_definition:                   any;
    /** (Optional) When this value is set to `1`, DMS ignores the first row header in a .csv file. Default is `0`. */
    ignore_header_rows:                          any;
    /** (Optional) Whether to enable a full load to write INSERT operations to the .csv output files only to indicate how the rows were added to the source database. Default is `false`. */
    include_op_for_full_load:                    any;
    /** (Optional) Maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load. Valid values are from `1` to `1048576`. Default is `1048576` (1 GB). */
    max_file_size:                               any;
    /** (Optional) - Specifies the precision of any TIMESTAMP column values written to an S3 object file in .parquet format. Default is `false`. */
    parquet_timestamp_in_millisecond:            any;
    /** (Optional) Version of the .parquet file format. Default is `parquet-1-0`. Valid values are `parquet-1-0` and `parquet-2-0`. */
    parquet_version:                             any;
    /** (Optional) Whether DMS saves the transaction order for a CDC load on the S3 target specified by `cdc_path`. Default is `false`. */
    preserve_transactions:                       any;
    /** (Optional) For an S3 source, whether each leading double quotation mark has to be followed by an ending double quotation mark. Default is `true`. */
    rfc_4180:                                    any;
    /** (Optional) Number of rows in a row group. Default is `10000`. */
    row_group_length:                            any;
    /** (Required when `encryption_mode` is  `SSE_KMS`, must not be set otherwise) ARN or Id of KMS Key to use when `encryption_mode` is `SSE_KMS`. */
    server_side_encryption_kms_key_id:           any;
    /** (Optional) ARN of the IAM Role with permissions to read from or write to the S3 Bucket. */
    service_access_role_arn:                     any;
    /** (Optional) Column to add with timestamp information to the endpoint data for an Amazon S3 target. */
    timestamp_column_name:                       any;
    /** (Optional) Whether to use `csv_no_sup_value` for columns not included in the supplemental log. */
    use_csv_no_sup_value:                        any;
    /** (Optional) When set to true, uses the task start time as the timestamp column value instead of the time data is written to target. For full load, when set to true, each row of the timestamp column contains the task start time. For CDC loads, each row of the timestamp column contains the transaction commit time. When set to false, the full load timestamp in the timestamp column increments with the time data arrives at the target. Default is `false`. */
    use_task_start_time_for_full_load_timestamp: any;
}