export interface CloudfrontResponseHeadersPolicy {
    data: Datum[];
}

export interface Datum {
    cloudfront_response_headers_policy: CloudfrontResponseHeadersPolicyClass;
}

export interface CloudfrontResponseHeadersPolicyClass {
    /** (Optional) Unique name to identify the response headers policy. */
    name?: any;
    /** (Optional) Identifier for the response headers policy. */
    id?:   any;
}