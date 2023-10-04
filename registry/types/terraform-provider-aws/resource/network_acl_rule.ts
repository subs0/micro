export interface NetworkACLRule {
    resource: Resource[];
}

export interface Resource {
    network_acl_rule: NetworkACLRuleClass;
}

export interface NetworkACLRuleClass {
    /** (Required) The ID of the network ACL. */
    network_acl_id:   any;
    /** (Required) The rule number for the entry (for example, 100). ACL entries are processed in ascending order by rule number. */
    rule_number:      any;
    /** (Optional, bool) Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet). Default `false`. */
    egress?:          any;
    /** (Required) The protocol. A value of -1 means all protocols. */
    protocol:         any;
    /** (Required) Indicates whether to allow or deny the traffic that matches the rule. Accepted values: `allow` | `deny` */
    rule_action:      any;
    /** (Optional) The network range to allow or deny, in CIDR notation (for example 172.16.0.0/24 ). */
    cidr_block?:      any;
    /** (Optional) The IPv6 CIDR block to allow or deny. */
    ipv6_cidr_block?: any;
    /** (Optional) The from port to match. */
    from_port?:       any;
    /** (Optional) The to port to match. */
    to_port?:         any;
    /** (Optional) ICMP protocol: The ICMP type. Required if specifying ICMP for the protocolE.g., -1 */
    icmp_type?:       any;
    /** (Optional) ICMP protocol: The ICMP code. Required if specifying ICMP for the protocolE.g., -1 */
    icmp_code?:       any;
}