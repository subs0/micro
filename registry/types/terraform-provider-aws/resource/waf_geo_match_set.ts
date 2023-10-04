export interface WafGeoMatchSet {
    resource: Resource[];
}

export interface Resource {
    waf_geo_match_set: WafGeoMatchSetClass;
}

export interface WafGeoMatchSetClass {
    /** (Required) The name or description of the GeoMatchSet. */
    name:                  any;
    /** (Optional) The GeoMatchConstraint objects which contain the country that you want AWS WAF to search for. */
    geo_match_constraint?: any;
}