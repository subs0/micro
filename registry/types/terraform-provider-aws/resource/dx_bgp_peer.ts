export interface DxBGPPeer {
    resource: Resource[];
}

export interface Resource {
    dx_bgp_peer: DxBGPPeerClass;
}

export interface DxBGPPeerClass {
    /** (Required) The address family for the BGP peer. `ipv4 ` or `ipv6`. */
    address_family:       any;
    /** (Required) The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration. */
    bgp_asn:              any;
    /** (Required) The ID of the Direct Connect virtual interface on which to create the BGP peer. */
    virtual_interface_id: any;
    /** (Optional) The IPv4 CIDR address to use to send traffic to Amazon. */
    amazon_address?:      any;
    /** (Optional) The authentication key for BGP configuration. */
    bgp_auth_key?:        any;
    /** (Optional) The IPv4 CIDR destination address to which Amazon should send traffic. */
    customer_address?:    any;
}