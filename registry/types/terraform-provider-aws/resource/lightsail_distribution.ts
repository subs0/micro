export interface LightsailDistribution {
    resource: Resource[];
}

export interface Resource {
    lightsail_distribution: LightsailDistributionClass;
}

export interface LightsailDistributionClass {
    /** (Required) Bundle ID to use for the distribution. */
    bundle_id:               any;
    default_cache_behavior:  DefaultCacheBehavior;
    origin:                  Origin;
    cache_behavior_settings: CacheBehaviorSettings;
    cache_behavior?:         CacheBehavior;
    /** (Optional) The name of the SSL/TLS certificate attached to the distribution, if any. */
    certificate_name?:       any;
    /** (Optional) The IP address type of the distribution. Default: `dualstack`. */
    ip_address_type?:        any;
    /** (Optional) Indicates whether the distribution is enabled. Default: `true`. */
    is_enabled?:             any;
    /** (Optional) Map of tags for the Lightsail Distribution. If */
    tags?:                   any;
}

export interface CacheBehavior {
    /** (Required) The cache behavior of the distribution. Valid values: `cache` and `dont-cache`. */
    behavior: any;
    /** (Required) The path to a directory or file to cached, or not cache. Use an asterisk symbol to specify wildcard directories (path/to/assets/\*), and file types (\*.html, \*jpg, \*js). Directories and file paths are case-sensitive. */
    path:     any;
}

export interface CacheBehaviorSettings {
    /** (Optional) The HTTP methods that are processed and forwarded to the distribution's origin. */
    allowed_http_methods?:      any;
    /** (Optional) The HTTP method responses that are cached by your distribution. */
    cached_http_methods?:       any;
    /** (Optional) The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated. */
    default_ttl?:               any;
    /** (Required) An object that describes the cookies that are forwarded to the origin. Your content is cached based on the cookies that are forwarded. [Detailed below](#forwarded_cookies) */
    forwarded_cookies:          any;
    /** (Required) An object that describes the headers that are forwarded to the origin. Your content is cached based on the headers that are forwarded. [Detailed below](#forwarded_headers) */
    forwarded_headers:          any;
    forwarded_query_anys:    string;
    /** (Optional) The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated. */
    maximum_ttl?:               any;
    /** (Optional) The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated. */
    minimum_ttl?:               any;
    /** (Required) The specific cookies to forward to your distribution's origin. */
    cookies_allow_list:         any;
    /** (Optional) Indicates whether the distribution forwards and caches based on query strings. */
    option?:                    any;
    /** (Required) The specific headers to forward to your distribution's origin. */
    headers_allow_list:         any;
    query_anys_allowed_list: string;
}

export interface DefaultCacheBehavior {
    /** (Required) The cache behavior of the distribution. Valid values: `cache` and `dont-cache`. */
    behavior: any;
}

export interface Origin {
    /** (Required) The name of the origin resource. Your origin can be an instance with an attached static IP, a bucket, or a load balancer that has at least one instance attached to it. */
    name:             any;
    /** (Optional) The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content. */
    protocol_policy?: any;
    /** (Required) The AWS Region name of the origin resource. */
    region_name:      any;
    /** (Computed) The resource type of the origin resource (e.g., Instance). */
    resource_type?:   any;
}