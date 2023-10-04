export interface AppsyncResolver {
    resource: Resource[];
}

export interface Resource {
    appsync_resolver: AppsyncResolverClass;
}

export interface AppsyncResolverClass {
    /** (Required) API ID for the GraphQL API. */
    api_id:                          any;
    /** (Optional) The function code that contains the request and response functions. When code is used, the runtime is required. The runtime value must be APPSYNC_JS. */
    code?:                           any;
    /** (Required) Type name from the schema defined in the GraphQL API. */
    type:                            any;
    /** (Required) Field name from the schema defined in the GraphQL API. */
    field:                           any;
    /** (Optional) Request mapping template for UNIT resolver or 'before mapping template' for PIPELINE resolver. Required for non-Lambda resolvers. */
    request_template?:               any;
    /** (Optional) Response mapping template for UNIT resolver or 'after mapping template' for PIPELINE resolver. Required for non-Lambda resolvers. */
    response_template?:              any;
    /** (Optional) Data source name. */
    data_source?:                    any;
    /** (Optional) Maximum batching size for a resolver. Valid values are between `0` and `2000`. */
    max_batch_size?:                 any;
    /** (Optional) Describes a Sync configuration for a resolver. See [Sync Config](#sync-config). */
    sync_config?:                    any;
    /** (Optional) The caching configuration for the resolver. See [Pipeline Config](#pipeline-config). */
    pipeline_config?:                any;
    /** (Optional) The Caching Config. See [Caching Config](#caching-config). */
    caching_config?:                 any;
    /** (Optional) Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. See [Runtime](#runtime). */
    runtime?:                        any;
    /** (Optional) The caching keys for a resolver that has caching activated. Valid values are entries from the $context.arguments, $context.source, and $context.identity maps. */
    caching_keys?:                   any;
    /** (Optional) The TTL in seconds for a resolver that has caching activated. Valid values are between `1` and `3600` seconds. */
    ttl?:                            any;
    /** (Optional) A list of Function objects. */
    functions?:                      any;
    /** (Optional) Conflict Detection strategy to use. Valid values are `NONE` and `VERSION`. */
    conflict_detection?:             any;
    /** (Optional) Conflict Resolution strategy to perform in the event of a conflict. Valid values are `NONE`, `OPTIMISTIC_CONCURRENCY`, `AUTOMERGE`, and `LAMBDA`. */
    conflict_handler?:               any;
    /** (Optional) Lambda Conflict Handler Config when configuring `LAMBDA` as the Conflict Handler. See [Lambda Conflict Handler Config](#lambda-conflict-handler-config). */
    lambda_conflict_handler_config?: any;
    /** (Optional) ARN for the Lambda function to use as the Conflict Handler. */
    lambda_conflict_handler_arn?:    any;
    /** (Optional) The name of the runtime to use. Currently, the only allowed value is `APPSYNC_JS`. */
    name?:                           any;
    /** (Optional) The version of the runtime to use. Currently, the only allowed version is `1.0.0`. */
    runtime_version?:                any;
}