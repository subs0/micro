export interface Route53ResolverConfig {
    resource: Resource[];
}

export interface Resource {
    route53_resolver_config: Route53ResolverConfigClass;
}

export interface Route53ResolverConfigClass {
    /** (Required) The ID of the VPC that the configuration is for. */
    resource_id:              any;
    /** (Required) Indicates whether or not the Resolver will create autodefined rules for reverse DNS lookups. Valid values: `ENABLE`, `DISABLE`. */
    autodefined_reverse_flag: any;
}