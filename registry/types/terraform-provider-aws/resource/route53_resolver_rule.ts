export interface Route53ResolverRule {
    resource: Resource[];
}

export interface Resource {
    route53_resolver_rule: Route53ResolverRuleClass;
}

export interface Route53ResolverRuleClass {
    /** (Required) DNS queries for this domain name are forwarded to the IP addresses that are specified using `target_ip`. */
    domain_name: any;
    /** (Required) The rule type. Valid values are `FORWARD`, `SYSTEM` and `RECURSIVE`. */
    rule_type:   any;
    /** (Optional) A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console. */
    name?:       any;
    /** (Optional) Configuration block(s) indicating the IPs that you want Resolver to forward DNS queries to (documented below). */
    target_ip?:  any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:       any;
    /** (Required) One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses. */
    ip:          any;
    /** (Optional) The port at `ip` that you want to forward DNS queries to. Default value is `53` */
    port?:       any;
}