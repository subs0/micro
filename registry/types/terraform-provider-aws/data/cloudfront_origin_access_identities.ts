export interface CloudfrontOriginAccessIdentities {
    data: Datum[];
}

export interface Datum {
    cloudfront_origin_access_identities: CloudfrontOriginAccessIdentitiesClass;
}

export interface CloudfrontOriginAccessIdentitiesClass {
    "* `comments` (Optional) - Filter origin access identities by comment."?: any;
}