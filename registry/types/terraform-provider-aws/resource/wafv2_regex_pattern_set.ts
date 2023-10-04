export interface Wafv2RegexPatternSet {
    resource: Resource[];
}

export interface Resource {
    wafv2_regex_pattern_set: Wafv2RegexPatternSetClass;
}

export interface Wafv2RegexPatternSetClass {
    /** (Required) A friendly name of the regular expression pattern set. */
    name:                any;
    /** (Optional) A friendly description of the regular expression pattern set. */
    description?:        any;
    /** (Required) Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are `CLOUDFRONT` or `REGIONAL`. To work with CloudFront, you must also specify the region `us-east-1` (N. Virginia) on the AWS provider. */
    scope:               any;
    /** (Optional) One or more blocks of regular expression patterns that you want AWS WAF to search for, such as `B[a@]dB[o0]t`. See [Regular Expression](#regular-expression) below for details. A maximum of 10 `regular_expression` blocks may be specified. */
    regular_expression?: any;
    /** (Optional) An array of key:value pairs to associate with the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
    regex_any:        string;
}