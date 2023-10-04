export interface AppsyncFunction {
    resource: Resource[];
}

export interface Resource {
    appsync_function: AppsyncFunctionClass;
}

export interface AppsyncFunctionClass {
    /** (Required) ID of the associated AppSync API. */
    api_id:                          any;
    /** (Optional) The function code that contains the request and response functions. When code is used, the runtime is required. The runtime value must be APPSYNC_JS. */
    code?:                           any;
    /** (Required) Function data source name. */
    data_source:                     any;
    /** (Optional) Maximum batching size for a resolver. Valid values are between `0` and `2000`. */
    max_batch_size?:                 any;
    /** (Required) Function name. The function name does not have to be unique. */
    name:                            any;
    /** (Optional) Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template. */
    request_mapping_template?:       any;
    /** (Optional) Function response mapping template. */
    response_mapping_template?:      any;
    /** (Optional) Function description. */
    description?:                    any;
    /** (Optional) Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. See [Runtime](#runtime). */
    runtime?:                        any;
    /** (Optional) Describes a Sync configuration for a resolver. See [Sync Config](#sync-config). */
    sync_config?:                    any;
    /** (Optional) Version of the request mapping template. Currently the supported value is `2018-05-29`. Does not apply when specifying `code`. */
    function_version?:               any;
    /** (Optional) The version of the runtime to use. Currently, the only allowed version is `1.0.0`. */
    runtime_version?:                any;
    /** (Optional) Conflict Detection strategy to use. Valid values are `NONE` and `VERSION`. */
    conflict_detection?:             any;
    /** (Optional) Conflict Resolution strategy to perform in the event of a conflict. Valid values are `NONE`, `OPTIMISTIC_CONCURRENCY`, `AUTOMERGE`, and `LAMBDA`. */
    conflict_handler?:               any;
    /** (Optional) Lambda Conflict Handler Config when configuring `LAMBDA` as the Conflict Handler. See [Lambda Conflict Handler Config](#lambda-conflict-handler-config). */
    lambda_conflict_handler_config?: any;
    /** (Optional) ARN for the Lambda function to use as the Conflict Handler. */
    lambda_conflict_handler_arn?:    any;
}