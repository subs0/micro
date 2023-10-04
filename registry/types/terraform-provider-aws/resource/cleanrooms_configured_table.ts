export interface CleanroomsConfiguredTable {
    resource: Resource[];
}

export interface Resource {
    cleanrooms_configured_table: CleanroomsConfiguredTableClass;
}

export interface CleanroomsConfiguredTableClass {
    /** (Required) - The name of the configured table. */
    name:                             any;
    /** (Optional) - A description for the configured table. */
    description?:                     any;
    /** (Required) - The analysis method for the configured table. The only valid value is currently `DIRECT_QUERY`. */
    analysis_method:                  any;
    /** (Required - Forces new resource) - The columns of the references table which will be included in the configured table. */
    allowed_columns?:                 any;
    /** (Required - Forces new resource) - A reference to the AWS Glue table which will be used to create the configured table. */
    table_reference?:                 any;
    "table_reference.database_name"?: any;
    "table_reference.table_name"?:    any;
    /** (Optional) - Key value pairs which tag the configured table. */
    tags?:                            any;
}