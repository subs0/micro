export interface DefaultVpcDHCPOptions {
    resource: Resource[];
}

export interface Resource {
    default_vpc_dhcp_options: DefaultVpcDHCPOptionsClass;
}

export interface DefaultVpcDHCPOptionsClass {
    /** (Optional) List of NETBIOS name servers. */
    netbios_name_servers?: any;
    /** (Optional) The NetBIOS node type (1, 2, 4, or 8). AWS recommends to specify 2 since broadcast and multicast are not supported in their network. For more information about these node types, see [RFC 2132](http://www.ietf.org/rfc/rfc2132.txt). */
    netbios_node_type?:    any;
    /** The ID of the AWS account that owns the DHCP options set. */
    owner_id?:             any;
    /** (Optional) A map of tags to assign to the resource. */
    tags?:                 any;
}