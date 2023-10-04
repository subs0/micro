export interface DefaultNetworkACL {
    resource: Resource[];
}

export interface Resource {
    default_network_acl: DefaultNetworkACLClass;
}

export interface DefaultNetworkACLClass {
    /** (Required) Network ACL ID to manage. This attribute is exported from `aws_vpc`, or manually found via the AWS Console. */
    default_network_acl_id: any;
    /** (Optional) Configuration block for an egress rule. Detailed below. */
    egress?:                any;
    /** (Optional) Configuration block for an ingress rule. Detailed below. */
    ingress?:               any;
    /** (Optional) List of Subnet IDs to apply the ACL to. See the notes above on Managing Subnets in the Default Network ACL */
    subnet_ids?:            any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
    /** (Required) The action to take. */
    action:                 any;
    /** (Required) The from port to match. */
    from_port:              any;
    /** (Required) The protocol to match. If using the -1 'all' protocol, you must specify a from and to port of 0. */
    protocol:               any;
    /** (Required) The rule number. Used for ordering. */
    rule_no:                any;
    /** (Required) The to port to match. */
    to_port:                any;
    /** (Optional) The CIDR block to match. This must be a valid network mask. */
    cidr_block?:            any;
    /** (Optional) The ICMP type code to be used. Default 0. */
    icmp_code?:             any;
    /** (Optional) The ICMP type to be used. Default 0. */
    icmp_type?:             any;
    /** (Optional) The IPv6 CIDR block. */
    ipv6_cidr_block?:       any;
}