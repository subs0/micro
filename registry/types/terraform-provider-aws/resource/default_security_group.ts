export interface DefaultSecurityGroup {
    resource: Resource[];
}

export interface Resource {
    default_security_group: DefaultSecurityGroupClass;
}

export interface DefaultSecurityGroupClass {
    /** (Optional, VPC only) Configuration block. Detailed below. */
    egress?:           any;
    /** (Optional) Configuration block. Detailed below. */
    ingress?:          any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
    /** (Optional, Forces new resource) VPC ID. **Note that changing the `vpc_id` will _not_ restore any default security group rules that were modified, added, or removed.** It will be left in its current state. */
    vpc_id?:           any;
    /** (Optional) List of CIDR blocks. */
    cidr_blocks?:      any;
    /** (Optional) Description of this rule. */
    description?:      any;
    /** (Required) Start port (or ICMP type number if protocol is `icmp`) */
    from_port:         any;
    /** (Optional) List of IPv6 CIDR blocks. */
    ipv6_cidr_blocks?: any;
    /** (Optional) List of prefix list IDs (for allowing access to VPC endpoints) */
    prefix_list_ids?:  any;
    /** (Required) Protocol. If you select a protocol of "-1" (semantically equivalent to `all`, which is not a valid value here), you must specify a `from_port` and `to_port` equal to `0`. If not `icmp`, `tcp`, `udp`, or `-1` use the [protocol number](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml). */
    protocol:          any;
    /** (Optional) List of security groups. A group name can be used relative to the default VPC. Otherwise, group ID. */
    security_groups?:  any;
    /** (Optional) Whether the security group itself will be added as a source to this egress rule. */
    self?:             any;
    /** (Required) End range port (or ICMP code if protocol is `icmp`). */
    to_port:           any;
}