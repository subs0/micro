export interface GluePartitionIndex {
    resource: Resource[];
}

export interface Resource {
    glue_partition_index: GluePartitionIndexClass;
}

export interface GluePartitionIndexClass {
    /** (Required) Name of the table. For Hive compatibility, this must be entirely lowercase. */
    table_name:      any;
    /** (Required) Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase. */
    database_name:   any;
    partition_index: PartitionIndex;
    /** (Optional) The catalog ID where the table resides. */
    catalog_id?:     any;
}

export interface PartitionIndex {
    /** (Required) Name of the partition index. */
    index_name: any;
    /** (Required) Keys for the partition index. */
    keys:       any;
}