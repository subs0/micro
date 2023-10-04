export interface Route53ResolverFirewallRuleGroup {
    data: Datum[];
}

export interface Datum {
    route53_resolver_firewall_rule_group: Route53ResolverFirewallRuleGroupClass;
}

export interface Route53ResolverFirewallRuleGroupClass {
    /** (Required) The ID of the rule group. */
    firewall_rule_group_id: any;
    /** The ARN (Amazon Resource Name) of the rule group. */
    arn?:                   any;
    /** The date and time that the rule group was created, in Unix time format and Coordinated Universal Time (UTC). */
    creation_time?:         any;
    /** A unique string defined by you to identify the request. */
    creator_request_id?:    any;
    /** The name of the rule group. */
    name?:                  any;
    /** The date and time that the rule group was last modified, in Unix time format and Coordinated Universal Time (UTC). */
    modification_time?:     any;
    /** The Amazon Web Services account ID for the account that created the rule group. When a rule group is shared with your account, this is the account that has shared the rule group with you. */
    owner_id?:              any;
    /** The number of rules in the rule group. */
    rule_count?:            any;
    /** Whether the rule group is shared with other Amazon Web Services accounts, or was shared with the current account by another Amazon Web Services account. */
    share_status?:          any;
    /** The status of the rule group. */
    status?:                any;
    /** Additional information about the status of the rule group, if available. */
    status_message?:        any;
}