export interface DxPublicVirtualInterface {
    resource: Resource[];
}

export interface Resource {
    dx_public_virtual_interface: DxPublicVirtualInterfaceClass;
}

export interface DxPublicVirtualInterfaceClass {
    /** (Required) The address family for the BGP peer. `ipv4 ` or `ipv6`. */
    address_family:        any;
    /** (Required) The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration. */
    bgp_asn:               any;
    /** (Required) The ID of the Direct Connect connection (or LAG) on which to create the virtual interface. */
    connection_id:         any;
    /** (Required) The name for the virtual interface. */
    name:                  any;
    /** (Required) The VLAN ID. */
    vlan:                  any;
    /** (Optional) The IPv4 CIDR address to use to send traffic to Amazon. Required for IPv4 BGP peers. */
    amazon_address?:       any;
    /** (Optional) The authentication key for BGP configuration. */
    bgp_auth_key?:         any;
    /** (Optional) The IPv4 CIDR destination address to which Amazon should send traffic. Required for IPv4 BGP peers. */
    customer_address?:     any;
    /** (Required) A list of routes to be advertised to the AWS network in this region. */
    route_filter_prefixes: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                 any;
}