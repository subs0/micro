export interface CloudfrontOriginRequestPolicy {
    resource: Resource[];
}

export interface Resource {
    cloudfront_origin_request_policy: CloudfrontOriginRequestPolicyClass;
}

export interface CloudfrontOriginRequestPolicyClass {
    /** (Required) Unique name to identify the origin request policy. */
    name:                 any;
    /** (Optional) Comment to describe the origin request policy. */
    comment?:             any;
    /** (Required) Object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the origin request key and automatically included in requests that CloudFront sends to the origin. See [Cookies Config](#cookies-config) for more information. */
    cookies_config:       any;
    /** (Required) Object that determines whether any HTTP headers (and if so, which headers) are included in the origin request key and automatically included in requests that CloudFront sends to the origin. See [Headers Config](#headers-config) for more information. */
    headers_config:       any;
    query_anys_config: string;
}