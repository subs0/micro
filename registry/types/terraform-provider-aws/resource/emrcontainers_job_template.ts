export interface EmrcontainersJobTemplate {
    resource: Resource[];
}

export interface Resource {
    emrcontainers_job_template: EmrcontainersJobTemplateClass;
}

export interface EmrcontainersJobTemplateClass {
    /** (Required) The job template data which holds values of StartJobRun API request. */
    job_template_data:                     any;
    /** (Optional) The KMS key ARN used to encrypt the job template. */
    kms_key_arn?:                          any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                 any;
    /** (Optional) The configuration settings that are used to override defaults configuration. */
    configuration_overrides?:              any;
    /** (Required) The execution role ARN of the job run. */
    execution_role_arn:                    any;
    /** (Required) Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver. */
    job_driver:                            any;
    /** (Optional) The tags assigned to jobs started using the job template. */
    job_tags?:                             any;
    /** (Required) The release version of Amazon EMR. */
    release_label:                         any;
    /** (Optional) The configurations for the application running by the job run. */
    application_configuration?:            any;
    /** (Optional) The configurations for monitoring. */
    monitoring_configuration?:             any;
    /** (Required) The classification within a configuration. */
    classification:                        any;
    /** (Optional) A list of additional configurations to apply within a configuration object. */
    configurations?:                       any;
    /** (Optional) A set of properties specified within a configuration classification. */
    properties?:                           any;
    /** (Optional) Monitoring configurations for CloudWatch. */
    cloud_watch_monitoring_configuration?: any;
    /** (Optional)  Monitoring configurations for the persistent application UI. */
    persistent_app_ui?:                    any;
    /** (Optional) Amazon S3 configuration for monitoring log publishing. */
    s3_monitoring_configuration?:          any;
    /** (Required) The name of the log group for log publishing. */
    log_group_name:                        any;
    /** (Optional) The specified name prefix for log streams. */
    log_stream_name_prefix?:               any;
    /** (Optional) Amazon S3 destination URI for log publishing. */
    log_uri?:                              any;
    /** (Optional) The job driver for job type. */
    spark_sql_job_driver?:                 any;
    /** (Optional) The job driver parameters specified for spark submit. */
    spark_submit_job_driver?:              any;
    /** (Required) The entry point of job application. */
    entry_point:                           any;
    /** (Optional) The Spark parameters to be included in the Spark SQL command. */
    spark_sql_parameters?:                 any;
    /** (Optional) The arguments for job application. */
    entry_point_arguments?:                any;
    /** (Optional) The Spark submit parameters that are used for job runs. */
    spark_submit_parameters?:              any;
}