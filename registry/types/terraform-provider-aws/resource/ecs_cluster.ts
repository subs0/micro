export interface EcsCluster {
    resource: Resource[];
}

export interface Resource {
    ecs_cluster: EcsClusterClass;
}

export interface EcsClusterClass {
    /** (Optional) The execute command configuration for the cluster. Detailed below. */
    configuration?:                  any;
    /** (Required) Name of the setting to manage. Valid values: `containerInsights`. */
    name:                            any;
    /** (Optional) Configures a default Service Connect namespace. Detailed below. */
    service_connect_defaults?:       any;
    /** (Optional) Configuration block(s) with cluster settings. For example, this can be used to enable CloudWatch Container Insights for a cluster. Detailed below. */
    setting?:                        any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                           any;
    /** (Optional) The details of the execute command configuration. Detailed below. */
    execute_command_configuration?:  any;
    /** (Optional) The AWS Key Management Service key ID to encrypt the data between the local client and the container. */
    kms_key_id?:                     any;
    /** (Optional) The log configuration for the results of the execute command actions Required when `logging` is `OVERRIDE`. Detailed below. */
    log_configuration?:              any;
    /** (Optional) The log setting to use for redirecting logs for your execute command results. Valid values are `NONE`, `DEFAULT`, and `OVERRIDE`. */
    logging?:                        any;
    /** (Optional) Whether or not to enable encryption on the CloudWatch logs. If not specified, encryption will be disabled. */
    cloud_watch_encryption_enabled?: any;
    /** (Optional) The name of the CloudWatch log group to send logs to. */
    cloud_watch_log_group_name?:     any;
    /** (Optional) The name of the S3 bucket to send logs to. */
    s3_bucket_name?:                 any;
    /** (Optional) Whether or not to enable encryption on the logs sent to S3. If not specified, encryption will be disabled. */
    s3_bucket_encryption_enabled?:   any;
    /** (Optional) An optional folder in the S3 bucket to place logs in. */
    s3_key_prefix?:                  any;
    /**  (Required) The value to assign to the setting. Valid values are `enabled` and `disabled`. */
    value:                           any;
    /** (Required) The ARN of the [`aws_service_discovery_http_namespace`](/docs/providers/aws/r/service_discovery_http_namespace.html) that's used when you create a service and don't specify a Service Connect configuration. */
    namespace:                       any;
}