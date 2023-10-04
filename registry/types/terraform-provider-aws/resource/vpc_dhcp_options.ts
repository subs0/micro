export interface VpcDHCPOptions {
    resource: Resource[];
}

export interface Resource {
    vpc_dhcp_options: VpcDHCPOptionsClass;
}

export interface VpcDHCPOptionsClass {
    /** (Optional) the suffix domain name to use by default when resolving non Fully Qualified Domain Names. In other words, this is what ends up being the `search` value in the `/etc/resolv.conf` file. */
    domain_name?:          any;
    /** (Optional) List of name servers to configure in `/etc/resolv.conf`. If you want to use the default AWS nameservers you should set this to `AmazonProvidedDNS`. */
    domain_name_servers?:  any;
    /** (Optional) List of NTP servers to configure. */
    ntp_servers?:          any;
    /** (Optional) List of NETBIOS name servers. */
    netbios_name_servers?: any;
    /** (Optional) The NetBIOS node type (1, 2, 4, or 8). AWS recommends to specify 2 since broadcast and multicast are not supported in their network. For more information about these node types, see [RFC 2132](http://www.ietf.org/rfc/rfc2132.txt). */
    netbios_node_type?:    any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                 any;
}