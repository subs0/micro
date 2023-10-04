export interface WafregionalGeoMatchSet {
    resource: Resource[];
}

export interface Resource {
    wafregional_geo_match_set: WafregionalGeoMatchSetClass;
}

export interface WafregionalGeoMatchSetClass {
    /** (Required) The name or description of the Geo Match Set. */
    name:                  any;
    /** (Optional) The Geo Match Constraint objects which contain the country that you want AWS WAF to search for. */
    geo_match_constraint?: any;
}