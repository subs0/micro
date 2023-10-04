export interface BatchJobDefinition {
    resource: Resource[];
}

export interface Resource {
    batch_job_definition: BatchJobDefinitionClass;
}

export interface BatchJobDefinitionClass {
    /** (Required) Specifies the name of the job definition. */
    name:                   any;
    /** (Required) The type of job definition. Must be `container`. */
    type:                   any;
    /** (Optional) A valid [container properties](http://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html) */
    container_properties?:  any;
    /** (Optional) Specifies the parameter substitution placeholders to set in the job definition. */
    parameters?:            any;
    /** (Optional) The platform capabilities required by the job definition. If no value is specified, it defaults to `EC2`. To run the job on Fargate resources, specify `FARGATE`. */
    platform_capabilities?: any;
    /** (Optional) Specifies whether to propagate the tags from the job definition to the corresponding Amazon ECS task. Default is `false`. */
    propagate_tags?:        any;
    retry_strategy?:        RetryStrategy;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
    /** (Optional) Specifies the timeout for jobs so that if a job runs longer, AWS Batch terminates the job. Maximum number of `timeout` is `1`. Defined below. */
    timeout?:               any;
}

export interface RetryStrategy {
    /** (Optional) The number of times to move a job to the `RUNNABLE` status. You may specify between `1` and `10` attempts. */
    attempts:                 any;
    /** (Optional) The [evaluate on exit](#evaluate_on_exit) conditions under which the job should be retried or failed. If this parameter is specified, then the `attempts` parameter must also be specified. You may specify up to 5 configuration blocks. */
    evaluate_on_exit:         any;
    /** (Required) Specifies the action to take if all of the specified conditions are met. The values are not case sensitive. Valid values: `RETRY`, `EXIT`. */
    action:                   any;
    /** (Optional) A glob pattern to match against the decimal representation of the exit code returned for a job. */
    on_exit_code:             any;
    /** (Optional) A glob pattern to match against the reason returned for a job. */
    on_reason:                any;
    /** (Optional) A glob pattern to match against the status reason returned for a job. */
    on_status_reason:         any;
    /** (Optional) The time duration in seconds after which AWS Batch terminates your jobs if they have not finished. The minimum value for the timeout is `60` seconds. */
    attempt_duration_seconds: any;
}