export interface Route53ResolverFirewallRuleGroupAssociation {
    data: Datum[];
}

export interface Datum {
    route53_resolver_firewall_rule_group_association: Route53ResolverFirewallRuleGroupAssociationClass;
}

export interface Route53ResolverFirewallRuleGroupAssociationClass {
    /** (Required) The identifier for the association. */
    firewall_rule_group_association_id: any;
    /** The Amazon Resource Name (ARN) of the firewall rule group association. */
    arn?:                               any;
    /** The date and time that the association was created, in Unix time format and Coordinated Universal Time (UTC). */
    creation_time?:                     any;
    /** A unique string defined by you to identify the request. */
    creator_request_id?:                any;
    /** The unique identifier of the firewall rule group. */
    firewall_rule_group_id?:            any;
    /** The owner of the association, used only for associations that are not managed by you. */
    managed_owner_name?:                any;
    /** The date and time that the association was last modified, in Unix time format and Coordinated Universal Time (UTC). */
    modification_time?:                 any;
    /** If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections. */
    mutation_protection?:               any;
    /** The name of the association. */
    name?:                              any;
    /** The setting that determines the processing order of the rule group among the rule groups that are associated with a single VPC. */
    priority?:                          any;
    /** The current status of the association. */
    status?:                            any;
    /** Additional information about the status of the response, if available. */
    status_message?:                    any;
    /** The unique identifier of the VPC that is associated with the rule group. */
    vpc_id?:                            any;
}