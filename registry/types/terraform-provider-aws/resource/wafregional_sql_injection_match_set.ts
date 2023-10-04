export interface WafregionalSQLInjectionMatchSet {
    resource: Resource[];
}

export interface Resource {
    wafregional_sql_injection_match_set: WafregionalSQLInjectionMatchSetClass;
}

export interface WafregionalSQLInjectionMatchSetClass {
    /** (Required) The name or description of the SizeConstraintSet. */
    name:                       any;
    /** (Optional) The parts of web requests that you want AWS WAF to inspect for malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. */
    sql_injection_match_tuple?: any;
    /** (Required) Specifies where in a web request to look for snippets of malicious SQL code. */
    field_to_match:             any;
    /** (Required) Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. */
    text_transformation:        any;
    /** (Optional) When `type` is `HEADER`, enter the name of the header that you want to search, e.g., `User-Agent` or `Referer`. */
    data?:                      any;
    /** (Required) The part of the web request that you want AWS WAF to search for a specified string. */
    type:                       any;
}