export interface SchemasDiscoverer {
    resource: Resource[];
}

export interface Resource {
    schemas_discoverer: SchemasDiscovererClass;
}

export interface SchemasDiscovererClass {
    /** (Required) The ARN of the event bus to discover event schemas on. */
    source_arn:   any;
    /** (Optional) The description of the discoverer. Maximum of 256 characters. */
    description?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}