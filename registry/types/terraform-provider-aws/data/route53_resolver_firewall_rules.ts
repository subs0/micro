export interface Route53ResolverFirewallRules {
    data: Datum[];
}

export interface Datum {
    route53_resolver_firewall_rules: Route53ResolverFirewallRulesClass;
}

export interface Route53ResolverFirewallRulesClass {
    /** (Required) The unique identifier of the firewall rule group that you want to retrieve the rules for. */
    firewall_rule_group_id: any;
    /** (Optional) The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list. */
    action?:                any;
    /** (Optional) The setting that determines the processing order of the rules in a rule group. */
    priority?:              any;
}