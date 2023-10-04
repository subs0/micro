export interface GlueCatalogTable {
    resource: Resource[];
}

export interface Resource {
    glue_catalog_table: GlueCatalogTableClass;
}

export interface GlueCatalogTableClass {
    /** (Required) ID of the Data Catalog in which the table resides. */
    catalog_id?:              any;
    /** (Optional) Description of the table. */
    description?:             any;
    /** (Optional) Owner of the table. */
    owner?:                   any;
    open_table_format_input?: OpenTableFormatInput;
    partition_index?:         PartitionIndex;
    partition_keys?:          PartitionKeys;
    /** (Optional) Retention time for this table. */
    retention?:               any;
    storage_descriptor?:      StorageDescriptor;
    /** (Optional) Type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.). While optional, some Athena DDL queries such as `ALTER TABLE` and `SHOW CREATE TABLE` will fail if this argument is empty. */
    table_type?:              any;
    target_table?:            TargetTable;
    /** (Optional) If the table is a view, the expanded text of the view; otherwise null. */
    view_expanded_text?:      any;
    /** (Optional) If the table is a view, the original text of the view; otherwise null. */
    view_original_text?:      any;
    /** (Required) Configuration block for iceberg table config. See [`iceberg_input`](#iceberg_input) below. */
    iceberg_input:            IcebergInput;
}

export interface IcebergInput {
    /** (Required) A required metadata operation. Can only be set to CREATE. */
    metadata_operation: any;
    /** (Optional) The table version for the Iceberg table. Defaults to 2. */
    version?:           any;
}

export interface OpenTableFormatInput {
    /** (Required) Configuration block for iceberg table config. See [`iceberg_input`](#iceberg_input) below. */
    iceberg_input: any;
}

export interface PartitionIndex {
    /** (Required) Name of the partition index. */
    index_name: any;
    /** (Required) Keys for the partition index. */
    keys:       any;
}

export interface PartitionKeys {
    /** (Optional) Free-form text comment. */
    comment: any;
    /** (Required) Name of the target table. */
    name:    any;
    /** (Optional) Datatype of data in the Column. */
    type:    any;
}

export interface StorageDescriptor {
    /** (Optional) List of reducer grouping columns, clustering columns, and bucketing columns in the table. */
    bucket_columns:                    any;
    /** (Optional) Configuration block for columns in the table. See [`columns`](#columns) below. */
    columns:                           any;
    /** (Optional) Whether the data in the table is compressed. */
    compressed:                        any;
    /** (Optional) Input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format. */
    input_format:                      any;
    /** (Optional) Physical location of the table. By default this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name. */
    location:                          any;
    /** (Optional) Must be specified if the table contains any dimension columns. */
    number_of_buckets:                 any;
    /** (Optional) Output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format. */
    output_format:                     any;
    /** (Optional) Map of initialization parameters for the SerDe, in key-value form. */
    parameters:                        any;
    /** (Optional) Object that references a schema stored in the AWS Glue Schema Registry. When creating a table, you can pass an empty list of columns for the schema, and instead use a schema reference. See [Schema Reference](#schema_reference) below. */
    schema_reference:                  any;
    /** (Optional) Configuration block for serialization and deserialization ("SerDe") information. See [`ser_de_info`](#ser_de_info) below. */
    ser_de_info:                       any;
    /** (Optional) Configuration block with information about values that appear very frequently in a column (skewed values). See [`skewed_info`](#skewed_info) below. */
    skewed_info:                       any;
    /** (Optional) Configuration block for the sort order of each bucket in the table. See [`sort_columns`](#sort_columns) below. */
    sort_columns:                      any;
    /** (Optional) Whether the table data is stored in subdirectories. */
    stored_as_sub_directories:         any;
    /** (Optional) Free-form text comment. */
    comment:                           any;
    /** (Required) Name of the target table. */
    name:                              any;
    /** (Optional) Datatype of data in the Column. */
    type:                              any;
    /** (Optional) Configuration block that contains schema identity fields. Either this or the `schema_version_id` has to be provided. See [`schema_id`](#schema_id) below. */
    schema_id:                         any;
    /** (Optional) Unique ID assigned to a version of the schema. Either this or the `schema_id` has to be provided. */
    schema_version_id:                 any;
    /** (Required) Version number of the schema. */
    schema_version_number:             any;
    /** (Optional) Name of the schema registry that contains the schema. Must be provided when `schema_name` is specified and conflicts with `schema_arn`. */
    registry_name:                     any;
    /** (Optional) ARN of the schema. One of `schema_arn` or `schema_name` has to be provided. */
    schema_arn:                        any;
    /** (Optional) Name of the schema. One of `schema_arn` or `schema_name` has to be provided. */
    schema_name:                       any;
    /** (Optional) Usually the class that implements the SerDe. An example is `org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe`. */
    serialization_library:             any;
    /** (Required) Name of the column. */
    column:                            any;
    /** (Required) Whether the column is sorted in ascending (`1`) or descending order (`0`). */
    sort_order:                        any;
    /** (Optional) List of names of columns that contain skewed values. */
    skewed_column_names:               any;
    /** (Optional) List of values that appear so frequently as to be considered skewed. */
    skewed_column_value_location_maps: any;
    /** (Optional) Map of skewed values to the columns that contain them. */
    skewed_column_values:              any;
}

export interface TargetTable {
    /** (Required) ID of the Data Catalog in which the table resides. */
    catalog_id:    any;
    /** (Required) Name of the catalog database that contains the target table. */
    database_name: any;
    /** (Required) Name of the target table. */
    name:          any;
}