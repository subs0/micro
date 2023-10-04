export interface WafregionalRule {
    resource: Resource[];
}

export interface Resource {
    wafregional_rule: WafregionalRuleClass;
}

export interface WafregionalRuleClass {
    /** (Required) The name or description of the rule. */
    name:        any;
    /** (Required) The name or description for the Amazon CloudWatch metric of this rule. */
    metric_name: any;
    /** (Optional) The objects to include in a rule (documented below). */
    predicate?:  any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:       any;
}