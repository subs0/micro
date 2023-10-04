export interface GlueUserDefinedFunction {
    resource: Resource[];
}

export interface Resource {
    glue_user_defined_function: GlueUserDefinedFunctionClass;
}

export interface GlueUserDefinedFunctionClass {
    /** (Required) The name of the function. */
    name:           any;
    /** (Optional) ID of the Glue Catalog to create the function in. If omitted, this defaults to the AWS Account ID. */
    catalog_id?:    any;
    /** (Required) The name of the Database to create the Function. */
    database_name:  any;
    /** (Required) The Java class that contains the function code. */
    class_name:     any;
    /** (Required) The owner of the function. */
    owner_name:     any;
    /** (Required) The owner type. can be one of `USER`, `ROLE`, and `GROUP`. */
    owner_type:     any;
    /** (Optional) The configuration block for Resource URIs. See [resource uris](#resource-uris) below for more details. */
    resource_uris?: any;
    /** (Required) The type of the resource. can be one of `JAR`, `FILE`, and `ARCHIVE`. */
    resource_type:  any;
    /** (Required) The URI for accessing the resource. */
    uri:            any;
}