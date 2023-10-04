export interface DxHostedPublicVirtualInterface {
    resource: Resource[];
}

export interface Resource {
    dx_hosted_public_virtual_interface: DxHostedPublicVirtualInterfaceClass;
}

export interface DxHostedPublicVirtualInterfaceClass {
    /** (Required) The address family for the BGP peer. `ipv4 ` or `ipv6`. */
    address_family:        any;
    /** (Required) The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration. */
    bgp_asn:               any;
    /** (Required) The ID of the Direct Connect connection (or LAG) on which to create the virtual interface. */
    connection_id:         any;
    /** (Required) The name for the virtual interface. */
    name:                  any;
    /** (Required) The AWS account that will own the new virtual interface. */
    owner_account_id:      any;
    /** (Required) A list of routes to be advertised to the AWS network in this region. */
    route_filter_prefixes: any;
    /** (Required) The VLAN ID. */
    vlan:                  any;
    /** (Optional) The IPv4 CIDR address to use to send traffic to Amazon. Required for IPv4 BGP peers. */
    amazon_address?:       any;
    /** (Optional) The authentication key for BGP configuration. */
    bgp_auth_key?:         any;
    /** (Optional) The IPv4 CIDR destination address to which Amazon should send traffic. Required for IPv4 BGP peers. */
    customer_address?:     any;
}