export interface WafIpset {
    resource: Resource[];
}

export interface Resource {
    waf_ipset: WafIpsetClass;
}

export interface WafIpsetClass {
    /** (Required) The name or description of the IPSet. */
    name:                any;
    /** (Optional) One or more pairs specifying the IP address type (IPV4 or IPV6) and the IP address range (in CIDR format) from which web requests originate. */
    ip_set_descriptors?: any;
}