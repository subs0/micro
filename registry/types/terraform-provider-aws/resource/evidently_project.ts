export interface EvidentlyProject {
    resource: Resource[];
}

export interface Resource {
    evidently_project: EvidentlyProjectClass;
}

export interface EvidentlyProjectClass {
    /** (Optional) A block that contains information about where Evidently is to store evaluation events for longer term storage, if you choose to do so. If you choose not to store these events, Evidently deletes them after using them to produce metrics and other experiment results that you can view. See below. */
    data_delivery?:   any;
    /** (Optional) Specifies the description of the project. */
    description?:     any;
    /** (Required) A name for the project. */
    name:             any;
    /** (Optional) Tags to apply to the project. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:            any;
    /** (Optional) A block that defines the CloudWatch Log Group that stores the evaluation events. See below. */
    cloudwatch_logs?: any;
    /** (Optional) A block that defines the S3 bucket and prefix that stores the evaluation events. See below. */
    s3_destination?:  any;
    /** (Optional) The name of the log group where the project stores evaluation events. */
    log_group?:       any;
    /** (Optional) The name of the bucket in which Evidently stores evaluation events. */
    bucket?:          any;
    /** (Optional) The bucket prefix in which Evidently stores evaluation events. */
    prefix?:          any;
}