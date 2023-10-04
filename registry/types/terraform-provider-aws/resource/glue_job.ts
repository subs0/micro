export interface GlueJob {
    resource: Resource[];
}

export interface Resource {
    glue_job: GlueJobClass;
}

export interface GlueJobClass {
    /** (Optional) The version of glue to use, for example "1.0". Ray jobs should set this to 4.0 or greater. For information about available versions, see the [AWS Glue Release Notes](https://docs.aws.amazon.com/glue/latest/dg/release-notes.html). */
    glue_version?:           any;
    /** (Optional) Indicates whether the job is run with a standard or flexible execution class. The standard execution class is ideal for time-sensitive workloads that require fast job startup and dedicated resources. Valid value: `FLEX`, `STANDARD`. */
    execution_class?:        any;
    /** (Optional) Notification property of the job. Defined below. */
    notification_property?:  any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                   any;
    /** (Optional) The name of the Security Configuration to be associated with the job. */
    security_configuration?: any;
    /** (Optional) The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, G.2X, or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs. */
    worker_type?:            any;
    /** (Optional) The number of workers of a defined workerType that are allocated when a job runs. */
    number_of_workers?:      any;
    /** (Optional) The name of the job command. Defaults to `glueetl`. Use `pythonshell` for Python Shell Job Type, `glueray` for Ray Job Type, or `gluestreaming` for Streaming Job Type. `max_capacity` needs to be set if `pythonshell` is chosen. */
    name?:                   any;
    /** (Required) Specifies the S3 path to a script that executes a job. */
    script_location:         any;
    /** (Optional) The Python version being used to execute a Python shell job. Allowed values are 2, 3 or 3.9. Version 3 refers to Python 3.6. */
    python_version?:         any;
    /** (Optional) In Ray jobs, runtime is used to specify the versions of Ray, Python and additional libraries available in your environment. This field is not used in other job types. For supported runtime environment values, see [Working with Ray jobs](https://docs.aws.amazon.com/glue/latest/dg/ray-jobs-section.html#author-job-ray-runtimes) in the Glue Developer Guide. */
    runtime?:                any;
    /** (Optional) The maximum number of concurrent runs allowed for a job. The default is 1. */
    max_concurrent_runs?:    any;
    /** (Optional) After a job run starts, the number of minutes to wait before sending a job run delay notification. */
    notify_delay_after?:     any;
}