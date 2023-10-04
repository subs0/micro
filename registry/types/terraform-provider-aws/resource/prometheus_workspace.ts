export interface PrometheusWorkspace {
    resource: Resource[];
}

export interface Resource {
    prometheus_workspace: PrometheusWorkspaceClass;
}

export interface PrometheusWorkspaceClass {
    /** (Optional) The alias of the prometheus workspace. See more [in AWS Docs](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-onboard-create-workspace.html). */
    alias?:                 any;
    /** (Optional) Logging configuration for the workspace. See [Logging Configuration](#logging-configuration) below for details. */
    logging_configuration?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
    /** (Required) The ARN of the CloudWatch log group to which the vended log data will be published. This log group must exist. */
    log_group_arn:          any;
}