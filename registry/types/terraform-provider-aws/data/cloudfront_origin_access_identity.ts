export interface CloudfrontOriginAccessIdentity {
    data: Datum[];
}

export interface Datum {
    cloudfront_origin_access_identity: CloudfrontOriginAccessIdentityClass;
}

export interface CloudfrontOriginAccessIdentityClass {
    "* `id` (Required) -  The identifier for the distribution. For example: `EDFDVBD632BHDS5`."?: any;
}