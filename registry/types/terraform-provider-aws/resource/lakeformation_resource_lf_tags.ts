export interface LakeformationResourceLFTags {
    resource: Resource[];
}

export interface Resource {
    lakeformation_resource_lf_tags: LakeformationResourceLFTagsClass;
}

export interface LakeformationResourceLFTagsClass {
    database?:           Database;
    table?:              Table;
    table_with_columns?: TableWithColumns;
    /** (Required) Value from the possible values for the LF-tag. */
    value:               any;
}

export interface Database {
    /** (Optional) Identifier for the Data Catalog. By default, it is the account ID of the caller. */
    catalog_id: any;
}

export interface Table {
    /** (Required, at least one of `name` or `wildcard`) Name of the table. */
    name:       any;
    /** (Required, at least one of `column_names` or `wildcard`) Whether to use a column wildcard. If `excluded_column_names` is included, `wildcard` must be set to `true` to avoid Terraform reporting a difference. */
    wildcard:   any;
    /** (Optional) Identifier for the Data Catalog. By default, it is the account ID of the caller. */
    catalog_id: any;
}

export interface TableWithColumns {
    /** (Required, at least one of `column_names` or `wildcard`) Set of column names for the table. */
    column_names:          any;
    /** (Required, at least one of `column_names` or `wildcard`) Whether to use a column wildcard. If `excluded_column_names` is included, `wildcard` must be set to `true` to avoid Terraform reporting a difference. */
    wildcard:              any;
    /** (Optional) Identifier for the Data Catalog. By default, it is the account ID of the caller. */
    catalog_id:            any;
    /** (Optional) Set of column names for the table to exclude. If `excluded_column_names` is included, `wildcard` must be set to `true` to avoid Terraform reporting a difference. */
    excluded_column_names: any;
}