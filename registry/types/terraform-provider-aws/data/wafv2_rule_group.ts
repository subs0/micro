export interface Wafv2RuleGroup {
    data: Datum[];
}

export interface Datum {
    wafv2_rule_group: Wafv2RuleGroupClass;
}

export interface Wafv2RuleGroupClass {
    /** (Required) Name of the WAFv2 Rule Group. */
    name:  any;
    /** (Required) Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are `CLOUDFRONT` or `REGIONAL`. To work with CloudFront, you must also specify the region `us-east-1` (N. Virginia) on the AWS provider. */
    scope: any;
}