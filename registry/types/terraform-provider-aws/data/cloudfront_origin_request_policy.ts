export interface CloudfrontOriginRequestPolicy {
    data: Datum[];
}

export interface Datum {
    cloudfront_origin_request_policy: CloudfrontOriginRequestPolicyClass;
}

export interface CloudfrontOriginRequestPolicyClass {
    /** Unique name to identify the origin request policy. */
    name?: any;
    /** Identifier for the origin request policy. */
    id?:   any;
}