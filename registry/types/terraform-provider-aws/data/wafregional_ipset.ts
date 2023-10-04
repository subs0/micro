export interface WafregionalIpset {
    data: Datum[];
}

export interface Datum {
    wafregional_ipset: WafregionalIpsetClass;
}

export interface WafregionalIpsetClass {
    /** (Required) Name of the WAF Regional IP set. */
    name: any;
}