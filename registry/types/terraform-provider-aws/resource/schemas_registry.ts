export interface SchemasRegistry {
    resource: Resource[];
}

export interface Resource {
    schemas_registry: SchemasRegistryClass;
}

export interface SchemasRegistryClass {
    /** (Required) The name of the custom event schema registry. Maximum of 64 characters consisting of lower case letters, upper case letters, 0-9, ., -, _. */
    name:         any;
    /** (Optional) The description of the discoverer. Maximum of 256 characters. */
    description?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}