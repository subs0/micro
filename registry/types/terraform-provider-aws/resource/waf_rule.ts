export interface WafRule {
    resource: Resource[];
}

export interface Resource {
    waf_rule: WafRuleClass;
}

export interface WafRuleClass {
    /** (Required) The name or description for the Amazon CloudWatch metric of this rule. The name can contain only alphanumeric characters (A-Z, a-z, 0-9); the name can't contain whitespace. */
    metric_name: any;
    /** (Required) The name or description of the rule. */
    name:        any;
    /** (Optional) The objects to include in a rule (documented below). */
    predicates?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:       any;
}