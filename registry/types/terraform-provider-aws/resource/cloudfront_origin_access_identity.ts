export interface CloudfrontOriginAccessIdentity {
    resource: Resource[];
}

export interface Resource {
    cloudfront_origin_access_identity: CloudfrontOriginAccessIdentityClass;
}

export interface CloudfrontOriginAccessIdentityClass {
    "* `comment` (Optional) - An optional comment for the origin access identity."?: any;
}