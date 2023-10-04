export interface Route53ResolverFirewallDomainList {
    data: Datum[];
}

export interface Datum {
    route53_resolver_firewall_domain_list: Route53ResolverFirewallDomainListClass;
}

export interface Route53ResolverFirewallDomainListClass {
    /** (Required) The ID of the domain list. */
    firewall_domain_list_id: any;
    /** The Amazon Resource Name (ARN) of the firewall domain list. */
    arn?:                    any;
    /** The date and time that the domain list was created, in Unix time format and Coordinated Universal Time (UTC). */
    creation_time?:          any;
    /** A unique string defined by you to identify the request. */
    creator_request_id?:     any;
    /** The number of domain names that are specified in the domain list. */
    domain_count?:           any;
    /** The name of the domain list. */
    name?:                   any;
    /** The owner of the list, used only for lists that are not managed by you. */
    managed_owner_name?:     any;
    /** The date and time that the domain list was last modified, in Unix time format and Coordinated Universal Time (UTC). */
    modification_time?:      any;
    /** The status of the domain list. */
    status?:                 any;
    /** Additional information about the status of the list, if available. */
    status_message?:         any;
}