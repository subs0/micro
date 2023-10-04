export interface SagemakerMonitoringSchedule {
    resource: Resource[];
}

export interface Resource {
    sagemaker_monitoring_schedule: SagemakerMonitoringScheduleClass;
}

export interface SagemakerMonitoringScheduleClass {
    monitoring_schedule_config: MonitoringScheduleConfig;
    /** (Optional) The name of the monitoring schedule. The name must be unique within an AWS Region within an AWS account. If omitted, Terraform will assign a random, unique name. */
    name?:                      any;
    /** (Optional) A mapping of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
}

export interface MonitoringScheduleConfig {
    /** (Required) The name of the monitoring job definition to schedule. */
    monitoring_job_definition_name: any;
    /** (Required) The type of the monitoring job definition to schedule. Valid values are `DataQuality`, `ModelQuality`, `ModelBias` or `ModelExplainability` */
    monitoring_type:                any;
    /** (Optional) Configures the monitoring schedule. Fields are documented below. */
    schedule_config?:               any;
    /** (Required) A cron expression that describes details about the monitoring schedule. For example, and hourly schedule would be `cron(0 * ? * * *)`. */
    schedule_expression:            any;
}