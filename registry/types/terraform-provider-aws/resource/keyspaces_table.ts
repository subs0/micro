export interface KeyspacesTable {
    resource: Resource[];
}

export interface Resource {
    keyspaces_table: KeyspacesTableClass;
}

export interface KeyspacesTableClass {
    /** (Required) The name of the keyspace that the table is going to be created in. */
    keyspace_name:             any;
    /** (Required) The name of the table. */
    table_name:                any;
    /** (Optional) Specifies the read/write throughput capacity mode for the table. */
    capacity_specification?:   any;
    /** (Optional) Enables client-side timestamps for the table. By default, the setting is disabled. */
    client_side_timestamps?:   any;
    /** (Optional) A description of the table. */
    comment?:                  any;
    /** (Optional) The default Time to Live setting in seconds for the table. More information can be found in the [Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_default_ttl). */
    default_time_to_live?:     any;
    /** (Optional) Specifies how the encryption key for encryption at rest is managed for the table. More information can be found in the [Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html). */
    encryption_specification?: any;
    /** (Optional) Specifies if point-in-time recovery is enabled or disabled for the table. More information can be found in the [Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html). */
    point_in_time_recovery?:   any;
    /** (Optional) Describes the schema of the table. */
    schema_definition?:        any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
    /** (Optional) Enables Time to Live custom settings for the table. More information can be found in the [Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL.html). */
    ttl?:                      any;
    /** (Optional) The throughput capacity specified for read operations defined in read capacity units (RCUs). */
    read_capacity_units?:      any;
    /** (Optional) The read/write throughput capacity mode for a table. Valid values: `PAY_PER_REQUEST`, `PROVISIONED`. The default value is `PAY_PER_REQUEST`. */
    throughput_mode?:          any;
    /** (Optional) The throughput capacity specified for write operations defined in write capacity units (WCUs). */
    write_capacity_units?:     any;
    /** (Required) Shows how to enable client-side timestamps settings for the specified table. Valid values: `ENABLED`. */
    status:                    any;
    /** (Required) A description of the table. */
    message:                   any;
    /** (Optional) The Amazon Resource Name (ARN) of the customer managed KMS key. */
    kms_key_identifier?:       any;
    /** (Required) The data type of the column. See the [Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.data-types) for a list of available data types. */
    type:                      any;
    /** (Required) The regular columns of the table. */
    column:                    any;
    /** (Required) The columns that are part of the partition key of the table . */
    partition_key:             any;
    /** (Required) The columns that are part of the clustering key of the table. */
    clustering_key:            any;
    /** (Required) The columns that have been defined as `STATIC`. Static columns store values that are shared by all rows in the same partition. */
    static_column:             any;
    /** (Required) The name of the static column. */
    name:                      any;
    /** (Required) The order modifier. Valid values: `ASC`, `DESC`. */
    order_by:                  any;
}