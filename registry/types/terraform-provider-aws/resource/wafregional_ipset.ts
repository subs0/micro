export interface WafregionalIpset {
    resource: Resource[];
}

export interface Resource {
    wafregional_ipset: WafregionalIpsetClass;
}

export interface WafregionalIpsetClass {
    /** (Required) The name or description of the IPSet. */
    name:               any;
    /** (Optional) One or more pairs specifying the IP address type (IPV4 or IPV6) and the IP address range (in CIDR notation) from which web requests originate. */
    ip_set_descriptor?: any;
}