export interface QuicksightDataSet {
    resource: Resource[];
}

export interface Resource {
    quicksight_data_set: QuicksightDataSetClass;
}

export interface QuicksightDataSetClass {
    /** (Required, Forces new resource) Identifier for the data set. */
    data_set_id?:                            any;
    /** (Required) Indicates whether you want to import the data into SPICE. Valid values are `SPICE` and `DIRECT_QUERY`. */
    import_mode:                             any;
    physical_table_map:                      PhysicalTableMap;
    /** (Optional, Forces new resource) AWS account ID. */
    aws_account_id?:                         any;
    column_groups?:                          ColumnGroups;
    column_level_permission_rules?:          ColumnLevelPermissionRules;
    data_set_usage_configuration?:           DataSetUsageConfiguration;
    field_folders?:                          FieldFolders;
    logical_table_map?:                      LogicalTableMap;
    permissions?:                            Permissions;
    row_level_permission_data_set?:          RowLevelPermissionDataSet;
    row_level_permission_tag_configuration?: RowLevelPermissionTagConfiguration;
    refresh_properties?:                     RefreshProperties;
    /** (Required) The dataset column tag, currently only used for geospatial type tagging. See [tags](#tags). */
    tags?:                                   Tags;
    /** (Optional) A physical table type built from the results of the custom SQL query. See [custom_sql](#custom_sql). */
    custom_sql?:                             CustomSQL;
    /** (Optional) A physical table type for relational data sources. See [relational_table](#relational_table). */
    relational_table?:                       RelationalTable;
    /** (Optional) A physical table type for as S3 data source. See [s3_source](#s3_source). */
    s3_source?:                              S3Source;
    /** (Required) Calculated columns to create. See [columns](#columns-1). */
    columns:                                 Columns;
    /** (Required) Column schema of the table. See [input_columns](#input_columns). */
    input_columns:                           InputColumns;
    /** (Required) Information about the format for the S3 source file or files. See [upload_settings](#upload_settings). */
    upload_settings?:                        UploadSettings;
    /** (Optional) Geospatial column group that denotes a hierarchy. See [geo_spatial_column_group](#geo_spatial_column_group). */
    geo_spatial_column_group?:               GeoSpatialColumnGroup;
    /** (Optional) Transform operations that act on this logical table. For this structure to be valid, only one of the attributes can be non-null. See [data_transforms](#data_transforms). */
    data_transforms?:                        DataTransforms;
    /** (Optional) Source of this logical table. See [source](#source). */
    source?:                                 Source;
    /** (Optional) A transform operation that casts a column to a different type. See [cast_column_type_operation](#cast_column_type_operation). */
    cast_column_type_operation?:             CastColumnTypeOperation;
    /** (Optional) An operation that creates calculated columns. Columns created in one such operation form a lexical closure. See [create_columns_operation](#create_columns_operation). */
    create_columns_operation?:               CreateColumnsOperation;
    /** (Optional) An operation that filters rows based on some condition. See [filter_operation](#filter_operation). */
    filter_operation?:                       FilterOperation;
    /** (Optional) An operation that projects columns. Operations that come after a projection can only refer to projected columns. See [project_operation](#project_operation). */
    project_operation?:                      ProjectOperation;
    /** (Optional) An operation that renames a column. See [rename_column_operation](#rename_column_operation). */
    rename_column_operation?:                RenameColumnOperation;
    /** (Optional) An operation that tags a column with additional information. See [tag_column_operation](#tag_column_operation). */
    tag_column_operation?:                   TagColumnOperation;
    /** (Optional) A transform operation that removes tags associated with a column. See [untag_column_operation](#untag_column_operation). */
    untag_column_operation?:                 UntagColumnOperation;
    /** (Optional) A description for a column. See [column_description](#column_description). */
    column_description?:                     ColumnDescription;
    /** (Optional) Specifies the result of a join of two logical tables. See [join_instruction](#join_instruction). */
    join_instruction?:                       JoinInstruction;
    /** (Optional) Join key properties of the left operand. See [left_join_key_properties](#left_join_key_properties). */
    left_join_key_properties?:               TJoinKeyProperties;
    /** (Optional) Join key properties of the right operand. See [right_join_key_properties](#right_join_key_properties). */
    right_join_key_properties?:              TJoinKeyProperties;
    /** (Required) A set of rules associated with row-level security, such as the tag names and columns that they are assigned to. See [tag_rules](#tag_rules). */
    tag_rules:                               TagRules;
    /** (Required) The refresh configuration for the data set. See [refresh_configuration](#refresh_configuration). */
    refresh_configuration:                   RefreshConfiguration;
    /** (Required) The incremental refresh for the data set. See [incremental_refresh](#incremental_refresh). */
    incremental_refresh:                     IncrementalRefresh;
    /** (Required) The lookback window setup for an incremental refresh configuration. See [lookback_window](#lookback_window). */
    lookback_window:                         LookbackWindow;
}

export interface CastColumnTypeOperation {
    /** (Required) The name of the lookback window column. */
    column_name:     any;
    /** (Required) New column data type. Valid values are `STRING`, `INTEGER`, `DECIMAL`, `DATETIME`. */
    new_column_type: any;
    /** (Optional) When casting a column from string to datetime type, you can supply a string in a format supported by Amazon QuickSight to denote the source data format. */
    format:          any;
}

export interface ColumnDescription {
    /** (Optional) The text of a description for a column. */
    text: any;
}

export interface ColumnGroups {
    /** (Optional) Geospatial column group that denotes a hierarchy. See [geo_spatial_column_group](#geo_spatial_column_group). */
    geo_spatial_column_group: any;
}

export interface ColumnLevelPermissionRules {
    /** (Optional) An array of column names. */
    column_names: any;
    /** (Optional) An array of ARNs for Amazon QuickSight users or groups. */
    principals:   any;
}

export interface Columns {
    /** (Required) A unique ID to identify a calculated column. During a dataset update, if the column ID of a calculated column matches that of an existing calculated column, Amazon QuickSight preserves the existing calculated column. */
    column_id:   any;
    /** (Required) The name of the lookback window column. */
    column_name: any;
    /** (Required) An expression that defines the calculated column. */
    expression:  any;
}

export interface CreateColumnsOperation {
    /** (Required) Calculated columns to create. See [columns](#columns-1). */
    columns: any;
}

export interface CustomSQL {
    /** (Required) ARN of the data source. */
    data_source_arn: any;
    /** (Required) Name of this column in the underlying data source. */
    name:            any;
    /** (Required) SQL query. */
    sql_query:       any;
    /** (Required) Calculated columns to create. See [columns](#columns-1). */
    columns:         any;
}

export interface DataSetUsageConfiguration {
    /** (Optional) Controls whether a child dataset of a direct query can use this dataset as a source. */
    disable_use_as_direct_query_source: any;
    /** (Optional) Controls whether a child dataset that's stored in QuickSight can use this dataset as a source. */
    disable_use_as_imported_source:     any;
}

export interface DataTransforms {
    /** (Optional) A transform operation that casts a column to a different type. See [cast_column_type_operation](#cast_column_type_operation). */
    cast_column_type_operation: any;
    /** (Optional) An operation that creates calculated columns. Columns created in one such operation form a lexical closure. See [create_columns_operation](#create_columns_operation). */
    create_columns_operation:   any;
    /** (Optional) An operation that filters rows based on some condition. See [filter_operation](#filter_operation). */
    filter_operation:           any;
    /** (Optional) An operation that projects columns. Operations that come after a projection can only refer to projected columns. See [project_operation](#project_operation). */
    project_operation:          any;
    /** (Optional) An operation that renames a column. See [rename_column_operation](#rename_column_operation). */
    rename_column_operation:    any;
    /** (Optional) An operation that tags a column with additional information. See [tag_column_operation](#tag_column_operation). */
    tag_column_operation:       any;
    /** (Optional) A transform operation that removes tags associated with a column. See [untag_column_operation](#untag_column_operation). */
    untag_column_operation:     any;
}

export interface FieldFolders {
    /** (Required) Key of the field folder map. */
    field_folders_id: any;
    /** (Required) Calculated columns to create. See [columns](#columns-1). */
    columns:          any;
    /** (Optional) Field folder description. */
    description:      any;
}

export interface FilterOperation {
    /** (Required) An expression that must evaluate to a Boolean value. Rows for which the expression evaluates to true are kept in the dataset. */
    condition_expression: any;
}

export interface GeoSpatialColumnGroup {
    /** (Required) Calculated columns to create. See [columns](#columns-1). */
    columns:      any;
    /** (Required) Country code. Valid values are `US`. */
    country_code: any;
    /** (Required) Name of this column in the underlying data source. */
    name:         any;
}

export interface IncrementalRefresh {
    /** (Required) The lookback window setup for an incremental refresh configuration. See [lookback_window](#lookback_window). */
    lookback_window: any;
}

export interface InputColumns {
    /** (Required) Name of this column in the underlying data source. */
    name: any;
    /** (Required) Data type of the column. */
    type: any;
}

export interface JoinInstruction {
    /** (Required) Operand on the left side of a join. */
    left_operand:              any;
    /** (Required) Join instructions provided in the ON clause of a join. */
    on_clause:                 any;
    /** (Required) Operand on the right side of a join. */
    right_operand:             any;
    /** (Required) Data type of the column. */
    type:                      any;
    /** (Optional) Join key properties of the left operand. See [left_join_key_properties](#left_join_key_properties). */
    left_join_key_properties:  any;
    /** (Optional) Join key properties of the right operand. See [right_join_key_properties](#right_join_key_properties). */
    right_join_key_properties: any;
}

export interface TJoinKeyProperties {
    /** (Optional) A value that indicates that a row in a table is uniquely identified by the columns in a join key. This is used by Amazon QuickSight to optimize query performance. */
    unique_key: any;
}

export interface LogicalTableMap {
    /** (Required) A display name for the logical table. */
    alias:                any;
    /** (Required) Key of the logical table map. */
    logical_table_map_id: any;
    /** (Optional) Transform operations that act on this logical table. For this structure to be valid, only one of the attributes can be non-null. See [data_transforms](#data_transforms). */
    data_transforms:      any;
    /** (Optional) Source of this logical table. See [source](#source). */
    source:               any;
}

export interface LookbackWindow {
    /** (Required) The name of the lookback window column. */
    column_name: any;
    /** (Required) The lookback window column size. */
    size:        any;
    /** (Required) The size unit that is used for the lookback window column. Valid values for this structure are `HOUR`, `DAY`, and `WEEK`. */
    size_unit:   any;
}

export interface Permissions {
    /** (Required) List of IAM actions to grant or revoke permissions on. */
    actions:   any;
    /** (Required) ARN of the principal. See the [ResourcePermission documentation](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ResourcePermission.html) for the applicable ARN values. */
    principal: any;
}

export interface PhysicalTableMap {
    /** (Required) Key of the physical table map. */
    physical_table_map_id: any;
    /** (Optional) A physical table type built from the results of the custom SQL query. See [custom_sql](#custom_sql). */
    custom_sql?:           any;
    /** (Optional) A physical table type for relational data sources. See [relational_table](#relational_table). */
    relational_table?:     any;
    /** (Optional) A physical table type for as S3 data source. See [s3_source](#s3_source). */
    s3_source?:            any;
}

export interface ProjectOperation {
    /** (Required) Projected columns. */
    projected_columns: any;
}

export interface RefreshConfiguration {
    /** (Required) The incremental refresh for the data set. See [incremental_refresh](#incremental_refresh). */
    incremental_refresh: any;
}

export interface RefreshProperties {
    /** (Required) The refresh configuration for the data set. See [refresh_configuration](#refresh_configuration). */
    refresh_configuration: any;
}

export interface RelationalTable {
    /** (Required) ARN of the data source. */
    data_source_arn: any;
    /** (Required) Column schema of the table. See [input_columns](#input_columns). */
    input_columns:   any;
    /** (Required) Name of this column in the underlying data source. */
    name:            any;
    /** (Optional) Catalog associated with the table. */
    catalog:         any;
    /** (Optional) Schema name. This name applies to certain relational database engines. */
    schema:          any;
}

export interface RenameColumnOperation {
    /** (Required) The name of the lookback window column. */
    column_name:     any;
    /** (Required) New name for the column. */
    new_column_name: any;
}

export interface RowLevelPermissionDataSet {
    /** (Required) ARN of the dataset that contains permissions for RLS. */
    arn:               any;
    /** (Required) Type of permissions to use when interpreting the permissions for RLS. Valid values are `GRANT_ACCESS` and `DENY_ACCESS`. */
    permission_policy: any;
    /** (Optional) User or group rules associated with the dataset that contains permissions for RLS. */
    format_version:    any;
    /** (Optional) Namespace associated with the dataset that contains permissions for RLS. */
    namespace:         any;
    /** (Optional) The status of row-level security tags. If enabled, the status is `ENABLED`. If disabled, the status is `DISABLED`. */
    status:            any;
}

export interface RowLevelPermissionTagConfiguration {
    /** (Required) A set of rules associated with row-level security, such as the tag names and columns that they are assigned to. See [tag_rules](#tag_rules). */
    tag_rules: any;
    /** (Optional) The status of row-level security tags. If enabled, the status is `ENABLED`. If disabled, the status is `DISABLED`. */
    status:    any;
}

export interface S3Source {
    /** (Required) ARN of the data source. */
    data_source_arn: any;
    /** (Required) Column schema of the table. See [input_columns](#input_columns). */
    input_columns:   any;
    /** (Required) Information about the format for the S3 source file or files. See [upload_settings](#upload_settings). */
    upload_settings: any;
}

export interface Source {
    /** (Optional) ARN of the parent data set. */
    data_set_arn:      any;
    /** (Optional) Specifies the result of a join of two logical tables. See [join_instruction](#join_instruction). */
    join_instruction:  any;
    /** (Optional) Physical table ID. */
    physical_table_id: any;
}

export interface TagColumnOperation {
    /** (Required) The name of the lookback window column. */
    column_name: any;
    /** (Required) The dataset column tag, currently only used for geospatial type tagging. See [tags](#tags). */
    tags:        any;
}

export interface TagRules {
    /** (Required) The name of the lookback window column. */
    column_name:                any;
    /** (Required) Unique key for a tag. */
    tag_key:                    any;
    /** (Optional) A string that you want to use to filter by all the values in a column in the dataset and don’t want to list the values one by one. */
    match_all_value?:           any;
    /** (Optional) A string that you want to use to delimit the values when you pass the values at run time. */
    tag_multi_value_delimiter?: any;
}

export interface Tags {
    /** (Optional) A description for a column. See [column_description](#column_description). */
    column_description:     any;
    /** (Optional) A geospatial role for a column. Valid values are `COUNTRY`, `STATE`, `COUNTY`, `CITY`, `POSTCODE`, `LONGITUDE`, and `LATITUDE`. */
    column_geographic_role: any;
}

export interface UntagColumnOperation {
    /** (Required) The name of the lookback window column. */
    column_name: any;
    /** (Required) The column tags to remove from this column. */
    tag_names:   any;
}

export interface UploadSettings {
    /** (Optional) Whether the file has a header row, or the files each have a header row. */
    contains_header: any;
    /** (Optional) Delimiter between values in the file. */
    delimiter:       any;
    /** (Optional) When casting a column from string to datetime type, you can supply a string in a format supported by Amazon QuickSight to denote the source data format. */
    format:          any;
    /** (Optional) A row number to start reading data from. */
    start_from_row:  any;
    /** (Optional) Text qualifier. Valid values are `DOUBLE_QUOTE` and `SINGLE_QUOTE`. */
    text_qualifier:  any;
}