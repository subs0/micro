export interface Route53ResolverFirewallDomainList {
    resource: Resource[];
}

export interface Resource {
    route53_resolver_firewall_domain_list: Route53ResolverFirewallDomainListClass;
}

export interface Route53ResolverFirewallDomainListClass {
    /** (Required) A name that lets you identify the domain list, to manage and use it. */
    name:     any;
    /** (Optional) A array of domains for the firewall domain list. */
    domains?: any;
    /** (Optional) A map of tags to assign to the resource. f configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:    any;
}