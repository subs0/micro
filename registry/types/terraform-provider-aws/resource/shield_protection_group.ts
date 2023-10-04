export interface ShieldProtectionGroup {
    resource: Resource[];
}

export interface Resource {
    shield_protection_group: ShieldProtectionGroupClass;
}

export interface ShieldProtectionGroupClass {
    /** (Required) Defines how AWS Shield combines resource data for the group in order to detect, mitigate, and report events. */
    aggregation:         any;
    /** (Optional) The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set `pattern` to ARBITRARY and you must not set it for any other `pattern` setting. */
    members?:            any;
    /** (Required) The criteria to use to choose the protected resources for inclusion in the group. */
    pattern:             any;
    /** (Required) The name of the protection group. */
    protection_group_id: any;
    /** (Optional) The resource type to include in the protection group. You must set this when you set `pattern` to BY_RESOURCE_TYPE and you must not set it for any other `pattern` setting. */
    resource_type?:      any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
}