export interface Route53ResolverQueryLogConfigAssociation {
    resource: Resource[];
}

export interface Resource {
    route53_resolver_query_log_config_association: Route53ResolverQueryLogConfigAssociationClass;
}

export interface Route53ResolverQueryLogConfigAssociationClass {
    /** (Required) The ID of the [Route 53 Resolver query logging configuration](route53_resolver_query_log_config.html) that you want to associate a VPC with. */
    resolver_query_log_config_id: any;
    /** (Required) The ID of a VPC that you want this query logging configuration to log queries for. */
    resource_id:                  any;
}