export interface WafregionalXSSMatchSet {
    resource: Resource[];
}

export interface Resource {
    wafregional_xss_match_set: WafregionalXSSMatchSetClass;
}

export interface WafregionalXSSMatchSetClass {
    /** (Required) The name of the set */
    name:                any;
    /** (Optional) The parts of web requests that you want to inspect for cross-site scripting attacks. */
    xss_match_tuple?:    any;
    /** (Required) Specifies where in a web request to look for cross-site scripting attacks. */
    field_to_match:      any;
    /** (Required) Which text transformation, if any, to perform on the web request before inspecting the request for cross-site scripting attacks. */
    text_transformation: any;
    /** (Optional) When the value of `type` is `HEADER`, enter the name of the header that you want the WAF to search, for example, `User-Agent` or `Referer`. If the value of `type` is any other value, omit `data`. */
    data?:               any;
    /** (Required) The part of the web request that you want AWS WAF to search for a specified stringE.g., `HEADER` or `METHOD` */
    type:                any;
}