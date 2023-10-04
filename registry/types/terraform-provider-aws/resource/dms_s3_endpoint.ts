export interface DmsS3Endpoint {
    resource: Resource[];
}

export interface Resource {
    dms_s3_endpoint: DmsS3EndpointClass;
}

export interface DmsS3EndpointClass {
    /** (Required) S3 bucket name. */
    bucket_name:                                  any;
    /** (Required for CDC; otherwise, Optional) Folder path of CDC files. If `cdc_path` is set, AWS DMS reads CDC files from this path and replicates the data changes to the target endpoint. Supported in AWS DMS versions 3.4.2 and later. */
    cdc_path?:                                    any;
    /** (Required) Database endpoint identifier. Identifiers must contain from 1 to 255 alphanumeric characters or hyphens, begin with a letter, contain only ASCII letters, digits, and hyphens, not end with a hyphen, and not contain two consecutive hyphens. */
    endpoint_id:                                  any;
    /** (Required) Type of endpoint. Valid values are `source`, `target`. */
    endpoint_type:                                any;
    /** (Required for `source` endpoints; otherwise, Optional) JSON document that describes how AWS DMS should interpret the data. */
    external_table_definition?:                   any;
    /** (Required) ARN of the IAM role with permissions to the S3 Bucket. */
    service_access_role_arn:                      any;
    /** (Optional) Whether to add column name information to the .csv output file. Default is `false`. */
    add_column_name?:                             any;
    /** (Optional) Whether to add padding. Default is `false`. (Ignored for source endpoints.) */
    add_trailing_padding_character?:              any;
    /** (Optional) S3 object prefix. */
    bucket_folder?:                               any;
    /** (Optional) Predefined (canned) access control list for objects created in an S3 bucket. Valid values include `none`, `private`, `public-read`, `public-read-write`, `authenticated-read`, `aws-exec-read`, `bucket-owner-read`, and `bucket-owner-full-control`. Default is `none`. */
    canned_acl_for_objects?:                      any;
    /** (Optional) Whether to write insert and update operations to .csv or .parquet output files. Default is `false`. */
    cdc_inserts_and_updates?:                     any;
    /** (Optional) Whether to write insert operations to .csv or .parquet output files. Default is `false`. */
    cdc_inserts_only?:                            any;
    /** (Optional) Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3. (AWS default is `60`.) */
    cdc_max_batch_interval?:                      any;
    /** (Optional) Minimum file size condition as defined in kilobytes to output a file to Amazon S3. (AWS default is 32000 KB.) */
    cdc_min_file_size?:                           any;
    /** (Optional, Default: empty string) ARN for the certificate. */
    certificate_arn?:                             any;
    /** (Optional) Set to compress target files. Valid values are `GZIP` and `NONE`. Default is `NONE`. (Ignored for source endpoints.) */
    compression_type?:                            any;
    /** (Optional) Delimiter used to separate columns in the source files. Default is `,`. */
    csv_delimiter?:                               any;
    /** (Optional) Only applies if output files for a CDC load are written in .csv format. If `use_csv_no_sup_value` is set to `true`, string to use for all columns not included in the supplemental log. If you do not specify a string value, DMS uses the null value for these columns regardless of `use_csv_no_sup_value`. (Ignored for source endpoints.) */
    csv_no_sup_value?:                            any;
    /** (Optional) String to as null when writing to the target. (AWS default is `NULL`.) */
    csv_null_value?:                              any;
    /** (Optional) Delimiter used to separate rows in the source files. Default is newline (_i.e._, `\n`). */
    csv_row_delimiter?:                           any;
    /** (Optional) Output format for the files that AWS DMS uses to create S3 objects. Valid values are `csv` and `parquet`.  (Ignored for source endpoints -- only `csv` is valid.) */
    data_format?:                                 any;
    /** (Optional) Size of one data page in bytes. (AWS default is 1 MiB, _i.e._, `1048576`.) */
    data_page_size?:                              any;
    /** (Optional) Date separating delimiter to use during folder partitioning. Valid values are `SLASH`, `UNDERSCORE`, `DASH`, and `NONE`. (AWS default is `SLASH`.) (Ignored for source endpoints.) */
    date_partition_delimiter?:                    any;
    /** (Optional) Partition S3 bucket folders based on transaction commit dates. Default is `false`. (Ignored for source endpoints.) */
    date_partition_enabled?:                      any;
    /** (Optional) Date format to use during folder partitioning. Use this parameter when `date_partition_enabled` is set to true. Valid values are `YYYYMMDD`, `YYYYMMDDHH`, `YYYYMM`, `MMYYYYDD`, and `DDMMYYYY`. (AWS default is `YYYYMMDD`.) (Ignored for source endpoints.) */
    date_partition_sequence?:                     any;
    /** (Optional) Convert the current UTC time to a timezone. The conversion occurs when a date partition folder is created and a CDC filename is generated. The timezone format is Area/Location (_e.g._, `Europe/Paris`). Use this when `date_partition_enabled` is `true`. (Ignored for source endpoints.) */
    date_partition_timezone?:                     any;
    /** (Optional) Undocumented argument for use as directed by AWS Support. */
    detach_target_on_lob_lookup_failure_parquet?: any;
    /** (Optional) Maximum size in bytes of an encoded dictionary page of a column. (AWS default is 1 MiB, _i.e._, `1048576`.) */
    dict_page_size_limit?:                        any;
    /** (Optional) Whether to enable statistics for Parquet pages and row groups. Default is `true`. */
    enable_statistics?:                           any;
    /** (Optional) Type of encoding to use. Value values are `rle_dictionary`, `plain`, and `plain_dictionary`. (AWS default is `rle_dictionary`.) */
    encoding_type?:                               any;
    /** (Optional) Server-side encryption mode that you want to encrypt your .csv or .parquet object files copied to S3. Valid values are `SSE_S3` and `SSE_KMS`. (AWS default is `SSE_S3`.) (Ignored for source endpoints -- only `SSE_S3` is valid.) */
    encryption_mode?:                             any;
    /** (Optional) Bucket owner to prevent sniping. Value is an AWS account ID. */
    expected_bucket_owner?:                       any;
    /** (Optional, Force New) When this value is set to `1`, DMS ignores the first row header in a .csv file. (AWS default is `0`.) */
    ignore_header_rows?:                          any;
    /** (Optional) Whether to enable a full load to write INSERT operations to the .csv output files only to indicate how the rows were added to the source database. Default is `false`. */
    include_op_for_full_load?:                    any;
    /** (Optional) ARN for the KMS key that will be used to encrypt the connection parameters. If you do not specify a value for `kms_key_arn`, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region. */
    kms_key_arn?:                                 any;
    /** (Optional) Maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load. Valid values are from `1` to `1048576`. (AWS default is 1 GB, _i.e._, `1048576`.) */
    max_file_size?:                               any;
    /** (Optional) - Specifies the precision of any TIMESTAMP column values written to an S3 object file in .parquet format. Default is `false`. (Ignored for source endpoints.) */
    parquet_timestamp_in_millisecond?:            any;
    /** (Optional) Version of the .parquet file format. Valid values are `parquet-1-0` and `parquet-2-0`. (AWS default is `parquet-1-0`.) (Ignored for source endpoints.) */
    parquet_version?:                             any;
    /** (Optional) Whether DMS saves the transaction order for a CDC load on the S3 target specified by `cdc_path`. Default is `false`. (Ignored for source endpoints.) */
    preserve_transactions?:                       any;
    /** (Optional) For an S3 source, whether each leading double quotation mark has to be followed by an ending double quotation mark. Default is `true`. */
    rfc_4180?:                                    any;
    /** (Optional) Number of rows in a row group. (AWS default is `10000`.) */
    row_group_length?:                            any;
    /** (Optional) When `encryption_mode` is `SSE_KMS`, ARN for the AWS KMS key. (Ignored for source endpoints -- only `SSE_S3` `encryption_mode` is valid.) */
    server_side_encryption_kms_key_id?:           any;
    /** (Optional) SSL mode to use for the connection. Valid values are `none`, `require`, `verify-ca`, `verify-full`. (AWS default is `none`.) */
    ssl_mode?:                                    any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                        any;
    /** (Optional) Column to add with timestamp information to the endpoint data for an Amazon S3 target. */
    timestamp_column_name?:                       any;
    /** (Optional) Whether to use `csv_no_sup_value` for columns not included in the supplemental log. (Ignored for source endpoints.) */
    use_csv_no_sup_value?:                        any;
    /** (Optional) When set to `true`, uses the task start time as the timestamp column value instead of the time data is written to target. For full load, when set to `true`, each row of the timestamp column contains the task start time. For CDC loads, each row of the timestamp column contains the transaction commit time.When set to false, the full load timestamp in the timestamp column increments with the time data arrives at the target. Default is `false`. */
    use_task_start_time_for_full_load_timestamp?: any;
}