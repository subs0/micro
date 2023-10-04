export interface WafRegexPatternSet {
    resource: Resource[];
}

export interface Resource {
    waf_regex_pattern_set: WafRegexPatternSetClass;
}

export interface WafRegexPatternSetClass {
    /** (Required) The name or description of the Regex Pattern Set. */
    name:                   any;
    regex_pattern_anys?: string;
}