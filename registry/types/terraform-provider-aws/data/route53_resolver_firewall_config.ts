export interface Route53ResolverFirewallConfig {
    data: Datum[];
}

export interface Datum {
    route53_resolver_firewall_config: Route53ResolverFirewallConfigClass;
}

export interface Route53ResolverFirewallConfigClass {
    /** (Required) The ID of the VPC from Amazon VPC that the configuration is for. */
    resource_id:         any;
    /** Determines how DNS Firewall operates during failures, for example when all traffic that is sent to DNS Firewall fails to receive a reply. */
    firewall_fail_open?: any;
    /** The ID of the firewall configuration. */
    id?:                 any;
    /** The Amazon Web Services account ID of the owner of the VPC that this firewall configuration applies to. */
    owner_id?:           any;
}