export interface WafRegexMatchSet {
    resource: Resource[];
}

export interface Resource {
    waf_regex_match_set: WafRegexMatchSetClass;
}

export interface WafRegexMatchSetClass {
    /** (Required) The name or description of the Regex Match Set. */
    name:                 any;
    /** (Required) The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. See below. */
    regex_match_tuple:    any;
    /** (Required) The part of a web request that you want to search, such as a specified header or a query string. */
    field_to_match:       any;
    /** (Required) The ID of a [Regex Pattern Set](/docs/providers/aws/r/waf_regex_pattern_set.html). */
    regex_pattern_set_id: any;
    /** (Required) Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. */
    text_transformation:  any;
    /** (Optional) When `type` is `HEADER`, enter the name of the header that you want to search, e.g., `User-Agent` or `Referer`. */
    data?:                any;
    /** (Required) The part of the web request that you want AWS WAF to search for a specified string. */
    type:                 any;
}