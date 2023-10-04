export interface Route53ResolverQueryLogConfig {
    resource: Resource[];
}

export interface Resource {
    route53_resolver_query_log_config: Route53ResolverQueryLogConfigClass;
}

export interface Route53ResolverQueryLogConfigClass {
    /** (Required) The ARN of the resource that you want Route 53 Resolver to send query logs. */
    destination_arn: any;
    /** (Required) The name of the Route 53 Resolver query logging configuration. */
    name:            any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
}