export interface XrayGroup {
    resource: Resource[];
}

export interface Resource {
    xray_group: XrayGroupClass;
}

export interface XrayGroupClass {
    /** (Required) The name of the group. */
    group_name:              any;
    /** (Required) The filter expression defining criteria by which to group traces. more info can be found in official [docs](https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html). */
    filter_expression:       any;
    /** (Optional) Configuration options for enabling insights. */
    insights_configuration?: any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                   any;
    /** (Required) Specifies whether insights are enabled. */
    insights_enabled:        any;
    /** (Optional) Specifies whether insight notifications are enabled. */
    notifications_enabled?:  any;
}