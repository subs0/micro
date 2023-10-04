export interface WafRuleGroup {
    resource: Resource[];
}

export interface Resource {
    waf_rule_group: WafRuleGroupClass;
}

export interface WafRuleGroupClass {
    /** (Optional) Name of the rule group. If omitted, Terraform will assign a random, unique name. Conflicts with `name_prefix`. */
    name?:           any;
    /** (Optional) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:    any;
    /** (Required) A friendly name for the metrics from the rule group */
    metric_name:     any;
    /** (Optional) A list of activated rules, see below */
    activated_rule?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
}