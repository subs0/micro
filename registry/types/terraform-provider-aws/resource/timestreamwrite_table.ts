export interface TimestreamwriteTable {
    resource: Resource[];
}

export interface Resource {
    timestreamwrite_table: TimestreamwriteTableClass;
}

export interface TimestreamwriteTableClass {
    /** (Optional) Contains properties to set on the table when enabling magnetic store writes. See [Magnetic Store Write Properties](#magnetic-store-write-properties) below for more details. */
    magnetic_store_write_properties?:        any;
    /** (Optional) The retention duration for the memory store and magnetic store. See [Retention Properties](#retention-properties) below for more details. If not provided, `magnetic_store_retention_period_in_days` default to 73000 and `memory_store_retention_period_in_hours` defaults to 6. */
    retention_properties?:                   any;
    /** (Optional) The schema of the table. See [Schema](#schema) below for more details. */
    schema?:                                 any;
    /** (Required) The name of the Timestream table. */
    table_name:                              any;
    /** (Optional) Map of tags to assign to this resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                   any;
    /** (Required) A flag to enable magnetic store writes. */
    enable_magnetic_store_writes:            any;
    /** (Optional) The location to write error reports for records rejected asynchronously during magnetic store writes. See [Magnetic Store Rejected Data Location](#magnetic-store-rejected-data-location) below for more details. */
    magnetic_store_rejected_data_location?:  any;
    /** (Optional) Configuration of an S3 location to write error reports for records rejected, asynchronously, during magnetic store writes. See [S3 Configuration](#s3-configuration) below for more details. */
    s3_configuration?:                       any;
    /** (Optional) Bucket name of the customer S3 bucket. */
    bucket_name?:                            any;
    /** (Optional) Encryption option for the customer s3 location. Options are S3 server side encryption with an S3-managed key or KMS managed key. Valid values are `SSE_KMS` and `SSE_S3`. */
    encryption_option?:                      any;
    /** (Optional) KMS key arn for the customer s3 location when encrypting with a KMS managed key. */
    kms_key_id?:                             any;
    /** (Optional) Object key prefix for the customer S3 location. */
    object_key_prefix?:                      any;
    /** (Required) The duration for which data must be stored in the magnetic store. Minimum value of 1. Maximum value of 73000. */
    magnetic_store_retention_period_in_days: any;
    /** (Required) The duration for which data must be stored in the memory store. Minimum value of 1. Maximum value of 8766. */
    memory_store_retention_period_in_hours:  any;
    /** (Required) A non-empty list of partition keys defining the attributes used to partition the table data. The order of the list determines the partition hierarchy. The name and type of each partition key as well as the partition key order cannot be changed after the table is created. However, the enforcement level of each partition key can be changed. See [Composite Partition Key](#composite-partition-key) below for more details. */
    composite_partition_key:                 any;
    /** (Optional) The level of enforcement for the specification of a dimension key in ingested records. Valid values: `REQUIRED`, `OPTIONAL`. */
    enforcement_in_record?:                  any;
    /** (Optional) The name of the attribute used for a dimension key. */
    name?:                                   any;
    /** (Required) The type of the partition key. Valid values: `DIMENSION`, `MEASURE`. */
    type:                                    any;
}