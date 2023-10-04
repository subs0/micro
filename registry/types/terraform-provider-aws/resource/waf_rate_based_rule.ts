export interface WafRateBasedRule {
    resource: Resource[];
}

export interface Resource {
    waf_rate_based_rule: WafRateBasedRuleClass;
}

export interface WafRateBasedRuleClass {
    /** (Required) The name or description for the Amazon CloudWatch metric of this rule. */
    metric_name: any;
    /** (Required) The name or description of the rule. */
    name:        any;
    /** (Required) Valid value is IP. */
    rate_key:    any;
    /** (Required) The maximum number of requests, which have an identical value in the field specified by the RateKey, allowed in a five-minute period. Minimum value is 100. */
    rate_limit:  any;
    /** (Optional) The objects to include in a rule (documented below). */
    predicates?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:       any;
}