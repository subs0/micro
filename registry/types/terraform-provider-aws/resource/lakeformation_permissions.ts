export interface LakeformationPermissions {
    resource: Resource[];
}

export interface Resource {
    lakeformation_permissions: LakeformationPermissionsClass;
}

export interface LakeformationPermissionsClass {
    /** (Optional) Whether the permissions are to be granted for the Data Catalog. Defaults to `false`. */
    catalog_resource?:              any;
    data_location?:                 Data;
    database?:                      Data;
    lf_tag?:                        LFTag;
    lf_tag_policy?:                 LFTagPolicy;
    table?:                         Table;
    table_with_columns?:            TableWithColumns;
    /** (Optional) Subset of `permissions` which the principal can pass. */
    permissions_with_grant_option?: any;
}

export interface Data {
    /** (Optional) Identifier for the Data Catalog. By default, it is the account ID of the caller. */
    catalog_id: any;
}

export interface LFTag {
    /** (Required) A list of possible values of an LF-Tag. */
    values:     any;
    /** (Optional) Identifier for the Data Catalog. By default, it is the account ID of the caller. */
    catalog_id: any;
}

export interface LFTagPolicy {
    /** (Required) A list of tag conditions that apply to the resource's tag policy. Configuration block for tag conditions that apply to the policy. See [`expression`](#expression) below. */
    expression: any;
    /** (Optional) Identifier for the Data Catalog. By default, it is the account ID of the caller. */
    catalog_id: any;
    /** (Required) A list of possible values of an LF-Tag. */
    values:     any;
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