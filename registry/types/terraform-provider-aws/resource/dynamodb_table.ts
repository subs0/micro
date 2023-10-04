export interface DynamodbTable {
    resource: Resource[];
}

export interface Resource {
    dynamodb_table: DynamodbTableClass;
}

export interface DynamodbTableClass {
    /** (Required) Set of nested attribute definitions. Only required for `hash_key` and `range_key` attributes. See below. */
    attribute:                    any;
    /** (Required) Name of the hash key in the index; must be defined as an attribute in the resource. */
    hash_key:                     any;
    /** (Required) Name of the index */
    name:                         any;
    /** (Optional) Controls how you are charged for read and write throughput and how you manage capacity. The valid values are `PROVISIONED` and `PAY_PER_REQUEST`. Defaults to `PROVISIONED`. */
    billing_mode?:                any;
    /** (Optional) Enables deletion protection for table. Defaults to `false`. */
    deletion_protection_enabled?: any;
    /** (Optional) Describe a GSI for the table; subject to the normal limits on the number of GSIs, projected attributes, etc. See below. */
    global_secondary_index?:      any;
    /** (Optional, Forces new resource) Describe an LSI on the table; these can only be allocated _at creation_ so you cannot change this definition after you have created the resource. See below. */
    local_secondary_index?:       any;
    /** (Optional) Whether to enable Point In Time Recovery for the replica. Default is `false`. */
    point_in_time_recovery?:      any;
    /** (Required) Name of the range key. */
    range_key:                    any;
    /** (Optional) Number of read units for this index. Must be set if billing_mode is set to PROVISIONED. */
    read_capacity?:               any;
    /** (Optional) Configuration block(s) with [DynamoDB Global Tables V2 (version 2019.11.21)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html) replication configurations. See below. */
    replica?:                     any;
    /** (Optional) Time of the point-in-time recovery point to restore. */
    restore_date_time?:           any;
    /** (Optional) Name of the table to restore. Must match the name of an existing table. */
    restore_source_name?:         any;
    /** (Optional) If set, restores table to the most recent point-in-time recovery point. */
    restore_to_latest_time?:      any;
    /** (Optional) Encryption at rest options. AWS DynamoDB tables are automatically encrypted at rest with an AWS-owned Customer Master Key if this argument isn't specified. See below. */
    server_side_encryption?:      any;
    /** (Optional) Whether Streams are enabled. */
    stream_enabled?:              any;
    /** (Optional) When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values are `KEYS_ONLY`, `NEW_IMAGE`, `OLD_IMAGE`, `NEW_AND_OLD_IMAGES`. */
    stream_view_type?:            any;
    /** (Optional) Storage class of the table. */
    table_class?:                 any;
    /** (Optional) A map of tags to populate on the created table. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                        any;
    /** (Optional) Configuration block for TTL. See below. */
    ttl?:                         any;
    /** (Optional) Number of write units for this index. Must be set if billing_mode is set to PROVISIONED. */
    write_capacity?:              any;
    /** (Required) Attribute type. Valid values are `S` (string), `N` (number), `B` (binary). */
    type:                         any;
    /** (Optional) Only required with `INCLUDE` as a projection type; a list of attributes to project into the index. These do not need to be defined as attributes on the table. */
    non_key_attributes?:          any;
    /** (Required) One of `ALL`, `INCLUDE` or `KEYS_ONLY` where `ALL` projects every attribute into the index, `KEYS_ONLY` projects  into the index only the table and index hash_key and sort_key attributes ,  `INCLUDE` projects into the index all of the attributes that are defined in `non_key_attributes` in addition to the attributes that that`KEYS_ONLY` project. */
    projection_type:              any;
    /** (Required) Whether TTL is enabled. */
    enabled:                      any;
    /** (Optional) ARN of the CMK that should be used for the AWS KMS encryption. This argument should only be used if the key is different from the default KMS-managed DynamoDB key, `alias/aws/dynamodb`. **Note:** This attribute will _not_ be populated with the ARN of _default_ keys. */
    kms_key_arn?:                 any;
    /** (Optional) Whether to propagate the global table's tags to a replica. Default is `false`. Changes to tags only move in one direction: from global (source) to replica. In other words, tag drift on a replica will not trigger an update. Tag or replica changes on the global table, whether from drift or configuration changes, are propagated to replicas. Changing from `true` to `false` on a subsequent `apply` means replica tags are left as they were, unmanaged, not deleted. */
    propagate_tags?:              any;
    /** (Required) Region name of the replica. */
    region_name:                  any;
    /** (Required) Name of the table attribute to store the TTL timestamp in. */
    attribute_name:               any;
}