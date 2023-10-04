export interface SyntheticsGroup {
    resource: Resource[];
}

export interface Resource {
    synthetics_group: SyntheticsGroupClass;
}

export interface SyntheticsGroupClass {
    /** (Required) Name of the group. */
    name:  any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?: any;
}