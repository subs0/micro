export interface Route53ResolverFirewallRule {
    resource: Resource[];
}

export interface Resource {
    route53_resolver_firewall_rule: Route53ResolverFirewallRuleClass;
}

export interface Route53ResolverFirewallRuleClass {
    /** (Required) A name that lets you identify the rule, to manage and use it. */
    name:                     any;
    /** (Required) The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list. Valid values: `ALLOW`, `BLOCK`, `ALERT`. */
    action:                   any;
    /** (Required if `block_response` is `OVERRIDE`) The DNS record's type. This determines the format of the record value that you provided in BlockOverrideDomain. Value values: `CNAME`. */
    block_override_dns_type?: any;
    /** (Required if `block_response` is `OVERRIDE`) The custom DNS record to send back in response to the query. */
    block_override_domain?:   any;
    /** (Required if `block_response` is `OVERRIDE`) The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Minimum value of 0. Maximum value of 604800. */
    block_override_ttl?:      any;
    /** (Required if `action` is `BLOCK`) The way that you want DNS Firewall to block the request. Valid values: `NODATA`, `NXDOMAIN`, `OVERRIDE`. */
    block_response?:          any;
    /** (Required) The ID of the domain list that you want to use in the rule. */
    firewall_domain_list_id:  any;
    /** (Required) The unique identifier of the firewall rule group where you want to create the rule. */
    firewall_rule_group_id:   any;
    /** (Required) The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting. */
    priority:                 any;
}