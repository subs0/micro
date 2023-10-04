export interface Wafv2IPSet {
    resource: Resource[];
}

export interface Resource {
    wafv2_ip_set: Wafv2IPSetClass;
}

export interface Wafv2IPSetClass {
    /** (Required) A friendly name of the IP set. */
    name:               any;
    /** (Optional) A friendly description of the IP set. */
    description?:       any;
    /** (Required) Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are `CLOUDFRONT` or `REGIONAL`. To work with CloudFront, you must also specify the Region US East (N. Virginia). */
    scope:              any;
    /** (Required) Specify IPV4 or IPV6. Valid values are `IPV4` or `IPV6`. */
    ip_address_version: any;
    /** (Required) Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses. All addresses must be specified using Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for `/0`. */
    addresses:          any;
    /** (Optional) An array of key:value pairs to associate with the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
}