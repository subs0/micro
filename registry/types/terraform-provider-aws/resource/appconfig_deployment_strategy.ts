export interface AppconfigDeploymentStrategy {
    resource: Resource[];
}

export interface Resource {
    appconfig_deployment_strategy: AppconfigDeploymentStrategyClass;
}

export interface AppconfigDeploymentStrategyClass {
    /** (Required) Total amount of time for a deployment to last. Minimum value of 0, maximum value of 1440. */
    deployment_duration_in_minutes: any;
    /** (Required) Percentage of targets to receive a deployed configuration during each interval. Minimum value of 1.0, maximum value of 100.0. */
    growth_factor:                  any;
    /** (Required, Forces new resource) Name for the deployment strategy. Must be between 1 and 64 characters in length. */
    name?:                          any;
    /** (Required, Forces new resource) Where to save the deployment strategy. Valid values: `NONE` and `SSM_DOCUMENT`. */
    replicate_to?:                  any;
    /** (Optional) Description of the deployment strategy. Can be at most 1024 characters. */
    description?:                   any;
    /** (Optional) Amount of time AWS AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic roll back. Minimum value of 0, maximum value of 1440. */
    final_bake_time_in_minutes?:    any;
    /** (Optional) Algorithm used to define how percentage grows over time. Valid value: `LINEAR` and `EXPONENTIAL`. Defaults to `LINEAR`. */
    growth_type?:                   any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
}