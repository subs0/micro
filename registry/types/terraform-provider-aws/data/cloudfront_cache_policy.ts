export interface CloudfrontCachePolicy {
    data: Datum[];
}

export interface Datum {
    cloudfront_cache_policy: CloudfrontCachePolicyClass;
}

export interface CloudfrontCachePolicyClass {
    /** (Optional) Unique name to identify the cache policy. */
    name?: any;
    /** (Optional) Identifier for the cache policy. */
    id?:   any;
}