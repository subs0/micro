export interface GlueRegistry {
    resource: Resource[];
}

export interface Resource {
    glue_registry: GlueRegistryClass;
}

export interface GlueRegistryClass {
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?: any;
}