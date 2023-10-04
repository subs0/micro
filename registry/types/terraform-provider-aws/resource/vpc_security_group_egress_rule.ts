export interface VpcSecurityGroupEgressRule {
    resource: Resource[];
}

export interface Resource {
    vpc_security_group_egress_rule: VpcSecurityGroupEgressRuleClass;
}

export interface VpcSecurityGroupEgressRuleClass {
    /** (Optional) The destination IPv4 CIDR range. */
    cidr_ipv4?:                    any;
    /** (Optional) The destination IPv6 CIDR range. */
    cidr_ipv6?:                    any;
    /** (Optional) The security group rule description. */
    description?:                  any;
    /** (Optional) The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type. */
    from_port?:                    any;
    /** (Optional) The IP protocol name or number. Use `-1` to specify all protocols. Note that if `ip_protocol` is set to `-1`, it translates to all protocols, all port ranges, and `from_port` and `to_port` values should not be defined. */
    ip_protocol?:                  any;
    /** (Optional) The ID of the destination prefix list. */
    prefix_list_id?:               any;
    /** (Optional) The destination security group that is referenced in the rule. */
    referenced_security_group_id?: any;
    /** (Required) The ID of the security group. */
    security_group_id:             any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                         any;
    /** (Optional) The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. */
    to_port?:                      any;
}