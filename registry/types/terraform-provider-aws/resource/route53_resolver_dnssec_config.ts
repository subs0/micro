export interface Route53ResolverDnssecConfig {
    resource: Resource[];
}

export interface Resource {
    route53_resolver_dnssec_config: Route53ResolverDnssecConfigClass;
}

export interface Route53ResolverDnssecConfigClass {
    /** (Required) The ID of the virtual private cloud (VPC) that you're updating the DNSSEC validation status for. */
    resource_id: any;
}