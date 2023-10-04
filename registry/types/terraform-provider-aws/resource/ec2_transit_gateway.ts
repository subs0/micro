export interface Ec2TransitGateway {
    resource: Resource[];
}

export interface Resource {
    ec2_transit_gateway: Ec2TransitGatewayClass;
}

export interface Ec2TransitGatewayClass {
    /** (Optional) Private Autonomous System Number (ASN) for the Amazon side of a BGP session. The range is `64512` to `65534` for 16-bit ASNs and `4200000000` to `4294967294` for 32-bit ASNs. Default value: `64512`. */
    amazon_side_asn?:                 any;
    /** (Optional) Whether resource attachment requests are automatically accepted. Valid values: `disable`, `enable`. Default value: `disable`. */
    auto_accept_shared_attachments?:  any;
    /** (Optional) Whether resource attachments are automatically associated with the default association route table. Valid values: `disable`, `enable`. Default value: `enable`. */
    default_route_table_association?: any;
    /** (Optional) Whether resource attachments automatically propagate routes to the default propagation route table. Valid values: `disable`, `enable`. Default value: `enable`. */
    default_route_table_propagation?: any;
    /** (Optional) Description of the EC2 Transit Gateway. */
    description?:                     any;
    /** (Optional) Whether DNS support is enabled. Valid values: `disable`, `enable`. Default value: `enable`. */
    dns_support?:                     any;
    /** (Optional) Whether Multicast support is enabled. Required to use `ec2_transit_gateway_multicast_domain`. Valid values: `disable`, `enable`. Default value: `disable`. */
    multicast_support?:               any;
    /** (Optional) Key-value tags for the EC2 Transit Gateway. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
    /** (Optional) One or more IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6. */
    transit_gateway_cidr_blocks?:     any;
    /** (Optional) Whether VPN Equal Cost Multipath Protocol support is enabled. Valid values: `disable`, `enable`. Default value: `enable`. */
    vpn_ecmp_support?:                any;
}