export interface SecurityGroupRule {
    resource: Resource[];
}

export interface Resource {
    security_group_rule: SecurityGroupRuleClass;
}

export interface SecurityGroupRuleClass {
    /** (Required) Start port (or ICMP type number if protocol is "icmp" or "icmpv6"). */
    from_port:                 any;
    /** (Required) Protocol. If not icmp, icmpv6, tcp, udp, or all use the [protocol number](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml) */
    protocol:                  any;
    /** (Required) Security group to apply this rule to. */
    security_group_id:         any;
    /** (Required) End port (or ICMP code if protocol is "icmp"). */
    to_port:                   any;
    /** (Required) Type of rule being created. Valid options are `ingress` (inbound) */
    type:                      any;
    /** (Optional) List of CIDR blocks. Cannot be specified with `source_security_group_id` or `self`. */
    cidr_blocks?:              any;
    /** (Optional) Description of the rule. */
    description?:              any;
    /** (Optional) List of IPv6 CIDR blocks. Cannot be specified with `source_security_group_id` or `self`. */
    ipv6_cidr_blocks?:         any;
    /** (Optional) List of Prefix List IDs. */
    prefix_list_ids?:          any;
    /** (Optional) Whether the security group itself will be added as a source to this ingress rule. Cannot be specified with `cidr_blocks`, `ipv6_cidr_blocks`, or `source_security_group_id`. */
    self?:                     any;
    /** (Optional) Security group id to allow access to/from, depending on the `type`. Cannot be specified with `cidr_blocks`, `ipv6_cidr_blocks`, or `self`. */
    source_security_group_id?: any;
}