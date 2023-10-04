export interface Route53ResolverEndpoint {
    resource: Resource[];
}

export interface Resource {
    route53_resolver_endpoint: Route53ResolverEndpointClass;
}

export interface Route53ResolverEndpointClass {
    /** (Required) The direction of DNS queries to or from the Route 53 Resolver endpoint. */
    direction:          any;
    /** (Required) The subnets and IP addresses in your VPC that you want DNS queries to pass through on the way from your VPCs */
    ip_address:         any;
    /** (Required) The ID of one or more security groups that you want to use to control access to this VPC. */
    security_group_ids: any;
    /** (Optional) The friendly name of the Route 53 Resolver endpoint. */
    name?:              any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
    /** (Required) The ID of the subnet that contains the IP address. */
    subnet_id:          any;
    /** (Optional) The IP address in the subnet that you want to use for DNS queries. */
    ip?:                any;
}