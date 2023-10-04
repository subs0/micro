export interface Wafv2RegexPatternSet {
    data: Datum[];
}

export interface Datum {
    wafv2_regex_pattern_set: Wafv2RegexPatternSetClass;
}

export interface Wafv2RegexPatternSetClass {
    /** (Required) Name of the WAFv2 Regex Pattern Set. */
    name:  any;
    /** (Required) Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are `CLOUDFRONT` or `REGIONAL`. To work with CloudFront, you must also specify the region `us-east-1` (N. Virginia) on the AWS provider. */
    scope: any;
}