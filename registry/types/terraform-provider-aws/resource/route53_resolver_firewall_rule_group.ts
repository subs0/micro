export interface Route53ResolverFirewallRuleGroup {
    resource: Resource[];
}

export interface Resource {
    route53_resolver_firewall_rule_group: Route53ResolverFirewallRuleGroupClass;
}

export interface Route53ResolverFirewallRuleGroupClass {
    /** (Required) A name that lets you identify the rule group, to manage and use it. */
    name:  any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?: any;
}