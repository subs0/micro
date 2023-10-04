export interface NetworkACL {
    resource: Resource[];
}

export interface Resource {
    network_acl: NetworkACLClass;
}

export interface NetworkACLClass {
    /** (Required) The ID of the associated VPC. */
    vpc_id:           any;
    /** (Optional) A list of Subnet IDs to apply the ACL to */
    subnet_ids?:      any;
    /** (Optional) Specifies an ingress rule. Parameters defined below. */
    ingress?:         any;
    /** (Optional) Specifies an egress rule. Parameters defined below. */
    egress?:          any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:            any;
    /** (Required) The from port to match. */
    from_port:        any;
    /** (Required) The to port to match. */
    to_port:          any;
    /** (Required) The rule number. Used for ordering. */
    rule_no:          any;
    /** (Required) The action to take. */
    action:           any;
    /** (Required) The protocol to match. If using the -1 'all' */
    protocol:         any;
    /** (Optional) The CIDR block to match. This must be a */
    cidr_block?:      any;
    /** (Optional) The IPv6 CIDR block. */
    ipv6_cidr_block?: any;
    /** (Optional) The ICMP type to be used. Default 0. */
    icmp_type?:       any;
    /** (Optional) The ICMP type code to be used. Default 0. */
    icmp_code?:       any;
}