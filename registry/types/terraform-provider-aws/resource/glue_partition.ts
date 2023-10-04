export interface GluePartition {
    resource: Resource[];
}

export interface Resource {
    glue_partition: GluePartitionClass;
}

export interface GluePartitionClass {
    /** (Required) Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase. */
    database_name:                      any;
    /** (Required) The values that define the partition. */
    partition_values:                   any;
    /** (Optional) ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name. */
    catalog_id?:                        any;
    /** (Optional) A [storage descriptor](#storage_descriptor) object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object. */
    storage_descriptor?:                any;
    /** (Optional) A map of initialization parameters for the SerDe, in key-value form. */
    parameters?:                        any;
    /** (Optional) A list of the [Columns](#column) in the table. */
    columns?:                           any;
    /** (Optional) The physical location of the table. By default this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name. */
    location?:                          any;
    /** (Optional) The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format. */
    input_format?:                      any;
    /** (Optional) The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format. */
    output_format?:                     any;
    /** (Optional) True if the data in the table is compressed, or False if not. */
    compressed?:                        any;
    /** (Optional) Must be specified if the table contains any dimension columns. */
    number_of_buckets?:                 any;
    /** (Optional) [Serialization/deserialization (SerDe)](#ser_de_info) information. */
    ser_de_info?:                       any;
    /** (Optional) A list of reducer grouping columns, clustering columns, and bucketing columns in the table. */
    bucket_columns?:                    any;
    /** (Optional) A list of [Order](#sort_columns) objects specifying the sort order of each bucket in the table. */
    sort_columns?:                      any;
    /** (Optional) Information about values that appear very frequently in a column (skewed values). */
    skewed_info?:                       any;
    /** (Optional) True if the table data is stored in subdirectories, or False if not. */
    stored_as_sub_directories?:         any;
    /** (Required) The name of the Column. */
    name:                               any;
    /** (Optional) The datatype of data in the Column. */
    type?:                              any;
    /** (Optional) Free-form text comment. */
    comment?:                           any;
    /** (Optional) Usually the class that implements the SerDe. An example is: org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe. */
    serialization_library?:             any;
    /** (Required) The name of the column. */
    column:                             any;
    /** (Required) Indicates that the column is sorted in ascending order (== 1), or in descending order (==0). */
    sort_order:                         any;
    /** (Optional) A list of names of columns that contain skewed values. */
    skewed_column_names?:               any;
    /** (Optional) A list of values that appear so frequently as to be considered skewed. */
    skewed_column_value_location_maps?: any;
    /** (Optional) A map of skewed values to the columns that contain them. */
    skewed_column_values?:              any;
}