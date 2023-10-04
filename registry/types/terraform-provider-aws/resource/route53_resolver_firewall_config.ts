export interface Route53ResolverFirewallConfig {
    resource: Resource[];
}

export interface Resource {
    route53_resolver_firewall_config: Route53ResolverFirewallConfigClass;
}

export interface Route53ResolverFirewallConfigClass {
    /** (Required) The ID of the VPC that the configuration is for. */
    resource_id:        any;
    /** (Required) Determines how Route 53 Resolver handles queries during failures, for example when all traffic that is sent to DNS Firewall fails to receive a reply. By default, fail open is disabled, which means the failure mode is closed. This approach favors security over availability. DNS Firewall blocks queries that it is unable to evaluate properly. If you enable this option, the failure mode is open. This approach favors availability over security. DNS Firewall allows queries to proceed if it is unable to properly evaluate them. Valid values: `ENABLED`, `DISABLED`. */
    firewall_fail_open: any;
}