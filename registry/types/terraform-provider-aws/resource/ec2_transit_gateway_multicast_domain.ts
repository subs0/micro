export interface Ec2TransitGatewayMulticastDomain {
    resource: Resource[];
}

export interface Resource {
    ec2_transit_gateway_multicast_domain: Ec2TransitGatewayMulticastDomainClass;
}

export interface Ec2TransitGatewayMulticastDomainClass {
    /** (Required) EC2 Transit Gateway identifier. The EC2 Transit Gateway must have `multicast_support` enabled. */
    transit_gateway_id:               any;
    /** (Optional) Whether to automatically accept cross-account subnet associations that are associated with the EC2 Transit Gateway Multicast Domain. Valid values: `disable`, `enable`. Default value: `disable`. */
    auto_accept_shared_associations?: any;
    /** (Optional) Whether to enable Internet Group Management Protocol (IGMP) version 2 for the EC2 Transit Gateway Multicast Domain. Valid values: `disable`, `enable`. Default value: `disable`. */
    igmpv2_support?:                  any;
    /** (Optional) Whether to enable support for statically configuring multicast group sources for the EC2 Transit Gateway Multicast Domain. Valid values: `disable`, `enable`. Default value: `disable`. */
    static_sources_support?:          any;
    /** (Optional) Key-value tags for the EC2 Transit Gateway Multicast Domain. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
}