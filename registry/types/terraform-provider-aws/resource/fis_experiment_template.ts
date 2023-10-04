export interface FisExperimentTemplate {
    resource: Resource[];
}

export interface Resource {
    fis_experiment_template: FisExperimentTemplateClass;
}

export interface FisExperimentTemplateClass {
    /** (Required) Action to be performed during an experiment. See below. */
    action:                         any;
    /** (Required) Description for the experiment template. */
    description:                    any;
    /** (Required) ARN of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf. */
    role_arn:                       any;
    /** (Required) When an ongoing experiment should be stopped. See below. */
    stop_condition:                 any;
    /** (Optional) Key-value mapping of tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
    /** (Optional) Action's target, if applicable. See below. */
    target?:                        any;
    /** (Optional) The configuration for experiment logging. See below. */
    log_configuration?:             any;
    /** (Required) ID of the action. To find out what actions are supported see [AWS FIS actions reference](https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html). */
    action_id:                      any;
    /** (Required) Friendly name given to the target. */
    name:                           any;
    /** (Optional) Parameter(s) for the action, if applicable. See below. */
    parameter?:                     any;
    /** (Optional) Set of action names that must complete before this action can be executed. */
    start_after?:                   any;
    /** (Required) Tag key. */
    key:                            any;
    /** (Required) Tag value. */
    value:                          any;
    /** (Required) Source of the condition. One of `none`, `aws:cloudwatch:alarm`. */
    source:                         any;
    /** (Required) AWS resource type. The resource type must be supported for the specified action. To find out what resource types are supported, see [Targets for AWS FIS](https://docs.aws.amazon.com/fis/latest/userguide/targets.html#resource-types). */
    resource_type:                  any;
    /** (Required) Scopes the identified resources. Valid values are `ALL` (all identified resources), `COUNT(n)` (randomly select `n` of the identified resources), `PERCENT(n)` (randomly select `n` percent of the identified resources). */
    selection_mode:                 any;
    /** (Optional) Filter(s) for the target. Filters can be used to select resources based on specific attributes returned by the respective describe action of the resource type. For more information, see [Targets for AWS FIS](https://docs.aws.amazon.com/fis/latest/userguide/targets.html#target-filters). See below. */
    filter?:                        any;
    /** (Optional) Set of ARNs of the resources to target with an action. Conflicts with `resource_tag`. */
    resource_arns?:                 any;
    /** (Optional) Tag(s) the resources need to have to be considered a valid target for an action. Conflicts with `resource_arns`. See below. */
    resource_tag?:                  any;
    /** (Optional) The resource type parameters. */
    parameters?:                    any;
    /** (Required) Attribute path for the filter. */
    path:                           any;
    /** (Required) Set of attribute values for the filter. */
    values:                         any;
    /** (Required) The schema version. See [documentation](https://docs.aws.amazon.com/fis/latest/userguide/monitoring-logging.html#experiment-log-schema) for the list of schema versions. */
    log_schema_version:             any;
    /** (Optional) The configuration for experiment logging to Amazon CloudWatch Logs. See below. */
    cloudwatch_logs_configuration?: any;
    /** (Optional) The configuration for experiment logging to Amazon S3. See below. */
    s3_configuration?:              any;
    /** (Required) The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group. */
    log_group_arn:                  any;
    /** (Required) The name of the destination bucket. */
    bucket_name:                    any;
    /** (Optional) The bucket prefix. */
    prefix?:                        any;
}