export interface CloudfrontCachePolicy {
    resource: Resource[];
}

export interface Resource {
    cloudfront_cache_policy: CloudfrontCachePolicyClass;
}

export interface CloudfrontCachePolicyClass {
    /** (Required) Unique name used to identify the cache policy. */
    name:                                            any;
    /** (Required) Minimum amount of time, in seconds, that objects should remain in the CloudFront cache before a new request is sent to the origin to check for updates. */
    min_ttl:                                         any;
    /** (Optional) Maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. */
    max_ttl?:                                        any;
    /** (Optional) Amount of time, in seconds, that objects are allowed to remain in the CloudFront cache before CloudFront sends a new request to the origin server to check if the object has been updated. */
    default_ttl?:                                    any;
    /** (Optional) Description for the cache policy. */
    comment?:                                        any;
    /** (Required) Configuration for including HTTP headers, cookies, and URL query strings in the cache key. For more information, refer to the [Parameters In Cache Key And Forwarded To Origin](#parameters-in-cache-key-and-forwarded-to-origin) section. */
    parameters_in_cache_key_and_forwarded_to_origin: any;
    /** (Required) Whether any cookies in viewer requests are included in the cache key and automatically included in requests that CloudFront sends to the origin. See [Cookies Config](#cookies-config) for more information. */
    cookies_config:                                  any;
    /** (Required) Whether any HTTP headers are included in the cache key and automatically included in requests that CloudFront sends to the origin. See [Headers Config](#headers-config) for more information. */
    headers_config:                                  any;
    query_anys_config:                            string;
    /** (Optional) Flag determines whether the Accept-Encoding HTTP header is included in the cache key and in requests that CloudFront sends to the origin. */
    enable_accept_encoding_brotli?:                  any;
    /** (Optional) Whether the Accept-Encoding HTTP header is included in the cache key and in requests sent to the origin by CloudFront. */
    enable_accept_encoding_gzip?:                    any;
    /** (Required) Whether any cookies in viewer requests are included in the cache key and automatically included in requests that CloudFront sends to the origin. Valid values for `cookie_behavior` are `none`, `whitelist`, `allExcept`, and `all`. */
    cookie_behavior:                                 any;
    /** (Optional) Object that contains a list of cookie names. See [Items](#items) for more information. */
    cookies?:                                        any;
    /** (Required) Whether any HTTP headers are included in the cache key and automatically included in requests that CloudFront sends to the origin. Valid values for `header_behavior` are `none` and `whitelist`. */
    header_behavior:                                 any;
    /** (Optional) Object contains a list of header names. See [Items](#items) for more information. */
    headers?:                                        any;
    query_any_behavior:                           string;
    query_anys?:                                  string;
    /** (Required) List of item names, such as cookies, headers, or query strings. */
    items:                                           any;
}