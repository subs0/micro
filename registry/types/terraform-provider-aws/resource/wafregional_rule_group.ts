export interface WafregionalRuleGroup {
    resource: Resource[];
}

export interface Resource {
    wafregional_rule_group: WafregionalRuleGroupClass;
}

export interface WafregionalRuleGroupClass {
    /** (Required) A friendly name of the rule group */
    name:            any;
    /** (Required) A friendly name for the metrics from the rule group */
    metric_name:     any;
    /** (Optional) A list of activated rules, see below */
    activated_rule?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
}