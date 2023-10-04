export interface S3BucketInventory {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_inventory: S3BucketInventoryClass;
}

export interface S3BucketInventoryClass {
    /** (Required) S3 bucket configuration where inventory results are published (documented below). */
    bucket:                   any;
    /** (Required) Unique identifier of the inventory configuration for the bucket. */
    name:                     any;
    /** (Required) Object versions to include in the inventory list. Valid values: `All`, `Current`. */
    included_object_versions: any;
    /** (Required) Specifies the schedule for generating inventory results (documented below). */
    schedule:                 any;
    /** (Required) Contains information about where to publish the inventory results (documented below). */
    destination:              any;
    /** (Optional, Default: `true`) Specifies whether the inventory is enabled or disabled. */
    enabled?:                 any;
    /** (Optional) Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria (documented below). */
    filter?:                  any;
    /** (Optional) List of optional fields that are included in the inventory results. Please refer to the S3 [documentation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_InventoryConfiguration.html#AmazonS3-Type-InventoryConfiguration-OptionalFields) for more details. */
    optional_fields?:         any;
    /** (Optional) Prefix that is prepended to all inventory results. */
    prefix?:                  any;
    /** (Required) Specifies how frequently inventory results are produced. Valid values: `Daily`, `Weekly`. */
    frequency:                any;
    /** (Required) Amazon S3 bucket ARN of the destination. */
    bucket_arn:               any;
    /** (Required) Specifies the output format of the inventory results. Can be `CSV`, [`ORC`](https://orc.apache.org/) or [`Parquet`](https://parquet.apache.org/). */
    format:                   any;
    /** (Optional) ID of the account that owns the destination bucket. Recommended to be set to prevent problems if the destination bucket ownership changes. */
    account_id?:              any;
    /** (Optional) Contains the type of server-side encryption to use to encrypt the inventory (documented below). */
    encryption?:              any;
    /** (Optional) Specifies to use server-side encryption with AWS KMS-managed keys to encrypt the inventory file (documented below). */
    sse_kms?:                 any;
    /** (Optional) Specifies to use server-side encryption with Amazon S3-managed keys (SSE-S3) to encrypt the inventory file. */
    sse_s3?:                  any;
    /** (Required) ARN of the KMS customer master key (CMK) used to encrypt the inventory file. */
    key_id:                   any;
}