export interface LambdaProvisionedConcurrencyConfig {
    resource: Resource[];
}

export interface Resource {
    lambda_provisioned_concurrency_config: LambdaProvisionedConcurrencyConfigClass;
}

export interface LambdaProvisionedConcurrencyConfigClass {
    /** (Required) Name or Amazon Resource Name (ARN) of the Lambda Function. */
    function_name:                     any;
    /** (Required) Amount of capacity to allocate. Must be greater than or equal to `1`. */
    provisioned_concurrent_executions: any;
    /** (Required) Lambda Function version or Lambda Alias name. */
    qualifier:                         any;
    /** (Optional) Whether to retain the provisoned concurrency configuration upon destruction. Defaults to `false`. If set to `true`, the resource in simply removed from state instead. */
    skip_destroy?:                     any;
}