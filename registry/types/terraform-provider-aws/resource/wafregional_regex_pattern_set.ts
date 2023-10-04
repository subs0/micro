export interface WafregionalRegexPatternSet {
    resource: Resource[];
}

export interface Resource {
    wafregional_regex_pattern_set: WafregionalRegexPatternSetClass;
}

export interface WafregionalRegexPatternSetClass {
    /** (Required) The name or description of the Regex Pattern Set. */
    name:                   any;
    regex_pattern_anys?: string;
}