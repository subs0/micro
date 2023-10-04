export interface Wafv2WebACL {
    data: Datum[];
}

export interface Datum {
    wafv2_web_acl: Wafv2WebACLClass;
}

export interface Wafv2WebACLClass {
    /** (Required) Name of the WAFv2 Web ACL. */
    name:  any;
    /** (Required) Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are `CLOUDFRONT` or `REGIONAL`. To work with CloudFront, you must also specify the region `us-east-1` (N. Virginia) on the AWS provider. */
    scope: any;
}