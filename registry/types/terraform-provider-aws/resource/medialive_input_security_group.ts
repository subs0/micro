export interface MedialiveInputSecurityGroup {
    resource: Resource[];
}

export interface Resource {
    medialive_input_security_group: MedialiveInputSecurityGroupClass;
}

export interface MedialiveInputSecurityGroupClass {
    /** (Required) Whitelist rules. See [Whitelist Rules](#whitelist-rules) for more details. */
    whitelist_rules: any;
    /** (Optional) A map of tags to assign to the InputSecurityGroup. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
}