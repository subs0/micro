export interface FinspaceKxEnvironment {
    resource: Resource[];
}

export interface Resource {
    finspace_kx_environment: FinspaceKxEnvironmentClass;
}

export interface FinspaceKxEnvironmentClass {
    /** (Required) Name of the KX environment that you want to create. */
    name:                                  any;
    /** (Required) KMS key ID to encrypt your data in the FinSpace environment. */
    kms_key_id:                            any;
    custom_dns_configuration?:             CustomDNSConfiguration;
    /** (Optional) Description for the KX environment. */
    description?:                          any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                 any;
    transit_gateway_configuration?:        TransitGatewayConfiguration;
    /** (Optional) Rules that define how you manage outbound traffic from kdb network to your internal network. Defined below. */
    attachment_network_acl_configuration?: AttachmentNetworkACLConfiguration;
    /** (Optional) Defines the ICMP protocol that consists of the ICMP type and code. Defined below. */
    icmp_type_code?:                       ICMPTypeCode;
    /** (Optional) Range of ports the rule applies to. Defined below. */
    port_range?:                           PortRange;
}

export interface AttachmentNetworkACLConfiguration {
    /** (Required) The IPv4 network range to allow or deny, in CIDR notation. The specified CIDR block is modified to its canonical form. For example, `100.68.0.18/18` will be converted to `100.68.0.0/18`. */
    cidr_block:     any;
    /** (Required) Protocol number. A value of `1` means all the protocols. */
    protocol:       any;
    /** (Required) Indicates whether to `allow` or `deny` the traffic that matches the rule. */
    rule_action:    any;
    /** (Required) Rule number for the entry. All the network ACL entries are processed in ascending order by rule number. */
    rule_number:    any;
    /** (Optional) Defines the ICMP protocol that consists of the ICMP type and code. Defined below. */
    icmp_type_code: any;
    /** (Optional) Range of ports the rule applies to. Defined below. */
    port_range:     any;
}

export interface CustomDNSConfiguration {
    /** (Required) IP address of the DNS server. */
    custom_dns_server_ip:   any;
    /** (Required) Name of the DNS server. */
    custom_dns_server_name: any;
}

export interface ICMPTypeCode {
    /** (Required) ICMP code. A value of `-1` means all codes for the specified ICMP type. */
    code: any;
    /** (Required) ICMP type. A value of `-1` means all types. */
    type: any;
}

export interface PortRange {
    /** (Required) First port in the range. */
    from: any;
    /** (Required) Last port in the range. */
    to:   any;
}

export interface TransitGatewayConfiguration {
    /** (Required) Routing CIDR on behalf of KX environment. It could be any “/26 range in the 100.64.0.0 CIDR space. After providing, it will be added to the customer’s transit gateway routing table so that the traffics could be routed to KX network. */
    routable_cidr_space:                  any;
    /** (Required) Identifier of the transit gateway created by the customer to connect outbound traffics from KX network to your internal network. */
    transit_gateway_id:                   any;
    /** (Optional) Rules that define how you manage outbound traffic from kdb network to your internal network. Defined below. */
    attachment_network_acl_configuration: any;
}