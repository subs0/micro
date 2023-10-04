export interface APIGatewayMethodSettings {
    resource: Resource[];
}

export interface Resource {
    api_gateway_method_settings: APIGatewayMethodSettingsClass;
}

export interface APIGatewayMethodSettingsClass {
    /** (Required) ID of the REST API */
    rest_api_id:                                 any;
    /** (Required) Name of the stage */
    stage_name:                                  any;
    /** (Required) Method path defined as `{resource_path}/{http_method}` for an individual method override, or `*/*` for overriding all methods in the stage. Ensure to trim any leading forward slashes in the path (e.g., `trimprefix(aws_api_gateway_resource.example.path, "/")`). */
    method_path:                                 any;
    /** (Required) Settings block, see below. */
    settings:                                    any;
    /** (Optional) Whether Amazon CloudWatch metrics are enabled for this method. */
    metrics_enabled?:                            any;
    /** (Optional) Logging level for this method, which effects the log entries pushed to Amazon CloudWatch Logs. The available levels are `OFF`, `ERROR`, and `INFO`. */
    logging_level?:                              any;
    /** (Optional) Whether data trace logging is enabled for this method, which effects the log entries pushed to Amazon CloudWatch Logs. */
    data_trace_enabled?:                         any;
    /** (Optional) Throttling burst limit. Default: `-1` (throttling disabled). */
    throttling_burst_limit?:                     any;
    /** (Optional) Throttling rate limit. Default: `-1` (throttling disabled). */
    throttling_rate_limit?:                      any;
    /** (Optional) Whether responses should be cached and returned for requests. A cache cluster must be enabled on the stage for responses to be cached. */
    caching_enabled?:                            any;
    /** (Optional) Time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response will be cached. */
    cache_ttl_in_seconds?:                       any;
    /** (Optional) Whether the cached responses are encrypted. */
    cache_data_encrypted?:                       any;
    /** (Optional) Whether authorization is required for a cache invalidation request. */
    require_authorization_for_cache_control?:    any;
    /** (Optional) How to handle unauthorized requests for cache invalidation. The available values are `FAIL_WITH_403`, `SUCCEED_WITH_RESPONSE_HEADER`, `SUCCEED_WITHOUT_RESPONSE_HEADER`. */
    unauthorized_cache_control_header_strategy?: any;
}