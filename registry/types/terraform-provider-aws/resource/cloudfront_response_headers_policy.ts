export interface CloudfrontResponseHeadersPolicy {
    resource: Resource[];
}

export interface Resource {
    cloudfront_response_headers_policy: CloudfrontResponseHeadersPolicyClass;
}

export interface CloudfrontResponseHeadersPolicyClass {
    /** (Required) A unique name to identify the response headers policy. */
    name:                             any;
    /** (Optional) A comment to describe the response headers policy. The comment cannot be longer than 128 characters. */
    comment?:                         any;
    /** (Optional) A configuration for a set of HTTP response headers that are used for Cross-Origin Resource Sharing (CORS). See [Cors Config](#cors-config) for more information. */
    cors_config?:                     any;
    /** (Optional) Object that contains an attribute `items` that contains a list of custom headers. See [Custom Header](#custom-header) for more information. */
    custom_headers_config?:           any;
    /** (Optional) A configuration for a set of HTTP headers to remove from the HTTP response. Object that contains an attribute `items` that contains a list of headers. See [Remove Header](#remove-header) for more information. */
    remove_headers_config?:           any;
    /** (Optional) A configuration for a set of security-related HTTP response headers. See [Security Headers Config](#security-headers-config) for more information. */
    security_headers_config?:         any;
    /** (Optional) A configuration for enabling the Server-Timing header in HTTP responses sent from CloudFront. See [Server Timing Headers Config](#server-timing-headers-config) for more information. */
    server_timing_headers_config?:    any;
    /** (Required) A Boolean value that CloudFront uses as the value for the `Access-Control-Allow-Credentials` HTTP response header. */
    access_control_allow_credentials: any;
    /** (Required) Object that contains an attribute `items` that contains a list of HTTP header names that CloudFront includes as values for the `Access-Control-Allow-Headers` HTTP response header. */
    access_control_allow_headers:     any;
    /** (Required) Object that contains an attribute `items` that contains a list of HTTP methods that CloudFront includes as values for the `Access-Control-Allow-Methods` HTTP response header. Valid values: `GET` | `POST` | `OPTIONS` | `PUT` | `DELETE` | `HEAD` | `ALL` */
    access_control_allow_methods:     any;
    /** (Required) Object that contains an attribute `items` that contains a list of origins that CloudFront can use as the value for the `Access-Control-Allow-Origin` HTTP response header. */
    access_control_allow_origins:     any;
    /** (Optional) Object that contains an attribute `items` that contains a list of HTTP headers that CloudFront includes as values for the `Access-Control-Expose-Headers` HTTP response header. */
    access_control_expose_headers?:   any;
    /** (Required) A number that CloudFront uses as the value for the `max-age` directive in the `Strict-Transport-Security` HTTP response header. */
    access_control_max_age_sec:       any;
    /** (Required) A Boolean value that determines how CloudFront behaves for the HTTP response header. */
    origin_override:                  any;
    /** (Required) The HTTP header name. */
    header:                           any;
    /** (Required) Whether CloudFront overrides the `X-XSS-Protection` HTTP response header received from the origin with the one specified in this response headers policy. */
    override:                         any;
    /** (Required) The value for the HTTP response header. */
    value:                            any;
    /** (Required) The policy directives and their values that CloudFront includes as values for the `Content-Security-Policy` HTTP response header. */
    content_security_policy:          any;
    /** (Optional) Determines whether CloudFront includes the `X-Content-Type-Options` HTTP response header with its value set to `nosniff`. See [Content Type Options](#content-type-options) for more information. */
    content_type_options?:            any;
    /** (Optional) Determines whether CloudFront includes the `X-Frame-Options` HTTP response header and the header’s value. See [Frame Options](#frame-options) for more information. */
    frame_options?:                   any;
    /** (Required) The value of the `Referrer-Policy` HTTP response header. Valid Values: `no-referrer` | `no-referrer-when-downgrade` | `origin` | `origin-when-cross-origin` | `same-origin` | `strict-origin` | `strict-origin-when-cross-origin` | `unsafe-url` */
    referrer_policy:                  any;
    /** (Optional) Determines whether CloudFront includes the `Strict-Transport-Security` HTTP response header and the header’s value. See [Strict Transport Security](#strict-transport-security) for more information. */
    strict_transport_security?:       any;
    /** (Optional) Determine whether CloudFront includes the `X-XSS-Protection` HTTP response header and the header’s value. See [XSS Protection](#xss-protection) for more information. */
    xss_protection?:                  any;
    /** (Required) The value of the `X-Frame-Options` HTTP response header. Valid values: `DENY` | `SAMEORIGIN` */
    frame_option:                     any;
    /** (Optional) Whether CloudFront includes the `includeSubDomains` directive in the `Strict-Transport-Security` HTTP response header. */
    include_subdomains?:              any;
    /** (Optional) Whether CloudFront includes the `preload` directive in the `Strict-Transport-Security` HTTP response header. */
    preload?:                         any;
    /** (Optional) Whether CloudFront includes the `mode=block` directive in the `X-XSS-Protection` header. */
    mode_block?:                      any;
    /** (Required) A Boolean value that determines the value of the `X-XSS-Protection` HTTP response header. When this setting is `true`, the value of the `X-XSS-Protection` header is `1`. When this setting is `false`, the value of the `X-XSS-Protection` header is `0`. */
    protection:                       any;
    /** (Optional) A reporting URI, which CloudFront uses as the value of the report directive in the `X-XSS-Protection` header. You cannot specify a `report_uri` when `mode_block` is `true`. */
    report_uri?:                      any;
    /** (Required) A Whether CloudFront adds the `Server-Timing` header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy. */
    enabled:                          any;
    /** (Required) A number 0–100 (inclusive) that specifies the percentage of responses that you want CloudFront to add the Server-Timing header to. Valid range: Minimum value of 0.0. Maximum value of 100.0. */
    sampling_rate:                    any;
}