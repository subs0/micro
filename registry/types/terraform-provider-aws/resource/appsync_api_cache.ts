export interface AppsyncAPICache {
    resource: Resource[];
}

export interface Resource {
    appsync_api_cache: AppsyncAPICacheClass;
}

export interface AppsyncAPICacheClass {
    /** (Required) GraphQL API ID. */
    api_id:                      any;
    /** (Required) Caching behavior. Valid values are `FULL_REQUEST_CACHING` and `PER_RESOLVER_CACHING`. */
    api_caching_behavior:        any;
    /** (Required) Cache instance type. Valid values are `SMALL`, `MEDIUM`, `LARGE`, `XLARGE`, `LARGE_2X`, `LARGE_4X`, `LARGE_8X`, `LARGE_12X`, `T2_SMALL`, `T2_MEDIUM`, `R4_LARGE`, `R4_XLARGE`, `R4_2XLARGE`, `R4_4XLARGE`, `R4_8XLARGE`. */
    type:                        any;
    /** (Required) TTL in seconds for cache entries. */
    ttl:                         any;
    /** (Optional) At-rest encryption flag for cache. You cannot update this setting after creation. */
    at_rest_encryption_enabled?: any;
    /** (Optional) Transit encryption flag when connecting to cache. You cannot update this setting after creation. */
    transit_encryption_enabled?: any;
}