export interface WafIpset {
    data: Datum[];
}

export interface Datum {
    waf_ipset: WafIpsetClass;
}

export interface WafIpsetClass {
    /** (Required) Name of the WAF IP set. */
    name: any;
}