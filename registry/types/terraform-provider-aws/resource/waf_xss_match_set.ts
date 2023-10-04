export interface WafXSSMatchSet {
    resource: Resource[];
}

export interface Resource {
    waf_xss_match_set: WafXSSMatchSetClass;
}

export interface WafXSSMatchSetClass {
    /** (Required) The name or description of the SizeConstraintSet. */
    name:              any;
    /** (Optional) The parts of web requests that you want to inspect for cross-site scripting attacks. */
    xss_match_tuples?: any;
}