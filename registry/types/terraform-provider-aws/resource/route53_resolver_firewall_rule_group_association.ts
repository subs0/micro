export interface Route53ResolverFirewallRuleGroupAssociation {
    resource: Resource[];
}

export interface Resource {
    route53_resolver_firewall_rule_group_association: Route53ResolverFirewallRuleGroupAssociationClass;
}

export interface Route53ResolverFirewallRuleGroupAssociationClass {
    /** (Required) A name that lets you identify the rule group association, to manage and use it. */
    name:                   any;
    /** (Required) The unique identifier of the firewall rule group. */
    firewall_rule_group_id: any;
    /** (Optional) If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections. Valid values: `ENABLED`, `DISABLED`. */
    mutation_protection?:   any;
    /** (Required) The setting that determines the processing order of the rule group among the rule groups that you associate with the specified VPC. DNS Firewall filters VPC traffic starting from the rule group with the lowest numeric priority setting. */
    priority:               any;
    /** (Required) The unique identifier of the VPC that you want to associate with the rule group. */
    vpc_id:                 any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
}