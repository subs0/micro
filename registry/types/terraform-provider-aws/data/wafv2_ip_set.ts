export interface Wafv2IPSet {
    data: Datum[];
}

export interface Datum {
    wafv2_ip_set: Wafv2IPSetClass;
}

export interface Wafv2IPSetClass {
    /** (Required) Name of the WAFv2 IP Set. */
    name:  any;
    /** (Required) Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are `CLOUDFRONT` or `REGIONAL`. To work with CloudFront, you must also specify the region `us-east-1` (N. Virginia) on the AWS provider. */
    scope: any;
}