export interface SchemasSchema {
    resource: Resource[];
}

export interface Resource {
    schemas_schema: SchemasSchemaClass;
}

export interface SchemasSchemaClass {
    /** (Required) The name of the schema. Maximum of 385 characters consisting of lower case letters, upper case letters, ., -, _, @. */
    name:          any;
    /** (Required) The schema specification. Must be a valid Open API 3.0 spec. */
    content:       any;
    /** (Required) The name of the registry in which this schema belongs. */
    registry_name: any;
    /** (Required) The type of the schema. Valid values: `OpenApi3` or `JSONSchemaDraft4`. */
    type:          any;
    /** (Optional) The description of the schema. Maximum of 256 characters. */
    description?:  any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
}