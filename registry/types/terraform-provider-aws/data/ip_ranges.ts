export interface IPRanges {
    data: Datum[];
}

export interface Datum {
    ip_ranges: IPRangesClass;
}

export interface IPRangesClass {
    /** (Optional) Filter IP ranges by regions (or include all regions, if */
    regions?: any;
    /** (Required) Filter IP ranges by services. Valid items are `amazon` */
    services: any;
    /** (Optional) Custom URL for source JSON file. Syntax must match [AWS IP Address Ranges documentation][1]. Defaults to `https://ip-ranges.amazonaws.com/ip-ranges.json`. */
    url?:     any;
}