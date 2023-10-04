export interface LakeformationPermissions {
    data: Datum[];
}

export interface Datum {
    lakeformation_permissions: LakeformationPermissionsClass;
}

export interface LakeformationPermissionsClass {
    /** Whether the permissions are to be granted for the Data Catalog. Defaults to `false`. */
    catalog_resource?:   any;
    data_location?:      Data;
    database?:           Data;
    lf_tag?:             LFTag;
    lf_tag_policy?:      LFTagPolicy;
    table?:              Table;
    table_with_columns?: TableWithColumns;
}

export interface Data {
    /** (Optional) Identifier for the Data Catalog. By default, it is the account ID of the caller. */
    catalog_id: any;
}

export interface LFTag {
    /** (Required) List of possible values of an LF-Tag. */
    values:     any;
    /** (Optional) Identifier for the Data Catalog. By default, it is the account ID of the caller. */
    catalog_id: any;
}

export interface LFTagPolicy {
    /** (Required) List of tag conditions that apply to the resource's tag policy. Configuration block for tag conditions that apply to the policy. See [`expression`](#expression) below. */
    expression: any;
    /** (Optional) Identifier for the Data Catalog. By default, it is the account ID of the caller. */
    catalog_id: any;
    /** (Required) List of possible values of an LF-Tag. */
    values:     any;
}

export interface Table {
    /** (Optional) Identifier for the Data Catalog. By default, it is the account ID of the caller. */
    catalog_id: any;
    /** (Optional) Name of the table. At least one of `name` or `wildcard` is required. */
    name:       any;
    /** (Optional) Whether to use a wildcard representing every table under a database. At least one of `name` or `wildcard` is required. Defaults to `false`. */
    wildcard:   any;
}

export interface TableWithColumns {
    /** (Optional) Identifier for the Data Catalog. By default, it is the account ID of the caller. */
    catalog_id:            any;
    /** (Optional) Set of column names for the table. At least one of `column_names` or `excluded_column_names` is required. */
    column_names:          any;
    /** (Optional) Set of column names for the table to exclude. At least one of `column_names` or `excluded_column_names` is required. */
    excluded_column_names: any;
}