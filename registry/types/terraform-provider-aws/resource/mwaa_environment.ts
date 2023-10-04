export interface MwaaEnvironment {
    resource: Resource[];
}

export interface Resource {
    mwaa_environment: MwaaEnvironmentClass;
}

export interface MwaaEnvironmentClass {
    /** (Optional) The `airflow_configuration_options` parameter specifies airflow override options. Check the [Official documentation](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html#configuring-env-variables-reference) for all possible configuration options. */
    airflow_configuration_options?:    any;
    /** (Optional) Airflow version of your environment, will be set by default to the latest version that MWAA supports. */
    airflow_version?:                  any;
    /** (Required) The relative path to the DAG folder on your Amazon S3 storage bucket. For example, dags. For more information, see [Importing DAGs on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html). */
    dag_s3_path:                       any;
    /** (Optional) Environment class for the cluster. Possible options are `mw1.small`, `mw1.medium`, `mw1.large`. Will be set by default to `mw1.small`. Please check the [AWS Pricing](https://aws.amazon.com/de/managed-workflows-for-apache-airflow/pricing/) for more information about the environment classes. */
    environment_class?:                any;
    /** (Required) The Amazon Resource Name (ARN) of the task execution role that the Amazon MWAA and its environment can assume. Check the [official AWS documentation](https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html) for the detailed role specification. */
    execution_role_arn:                any;
    /** (Optional) The Amazon Resource Name (ARN) of your KMS key that you want to use for encryption. Will be set to the ARN of the managed KMS key `aws/airflow` by default. Please check the [Official Documentation](https://docs.aws.amazon.com/mwaa/latest/userguide/custom-keys-certs.html) for more information. */
    kms_key?:                          any;
    /** (Optional) The Apache Airflow logs you want to send to Amazon CloudWatch Logs. */
    logging_configuration?:            any;
    /** (Optional) The maximum number of workers that can be automatically scaled up. Value need to be between `1` and `25`. Will be `10` by default. */
    max_workers?:                      any;
    /** (Optional) The minimum number of workers that you want to run in your environment. Will be `1` by default. */
    min_workers?:                      any;
    /** (Required) The name of the Apache Airflow Environment */
    name:                              any;
    /** (Required) Specifies the network configuration for your Apache Airflow Environment. This includes two private subnets as well as security groups for the Airflow environment. Each subnet requires internet connection, otherwise the deployment will fail. See [Network configuration](#network-configuration) below for details. */
    network_configuration:             any;
    /** (Optional) The plugins.zip file version you want to use. */
    plugins_s3_object_version?:        any;
    /** (Optional) The relative path to the plugins.zip file on your Amazon S3 storage bucket. For example, plugins.zip. If a relative path is provided in the request, then plugins_s3_object_version is required. For more information, see [Importing DAGs on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html). */
    plugins_s3_path?:                  any;
    /** (Optional) The requirements.txt file version you want to use. */
    requirements_s3_object_version?:   any;
    /** (Optional) The relative path to the requirements.txt file on your Amazon S3 storage bucket. For example, requirements.txt. If a relative path is provided in the request, then requirements_s3_object_version is required. For more information, see [Importing DAGs on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import.html). */
    requirements_s3_path?:             any;
    /** (Optional) The number of schedulers that you want to run in your environment. v2.0.2 and above accepts `2` - `5`, default `2`. v1.10.12 accepts `1`. */
    schedulers?:                       any;
    /** (Required) The Amazon Resource Name (ARN) of your Amazon S3 storage bucket. For example, arn:aws:s3:::airflow-mybucketname. */
    source_bucket_arn:                 any;
    /** (Optional) The version of the startup shell script you want to use. You must specify the version ID that Amazon S3 assigns to the file every time you update the script. */
    startup_script_s3_object_version?: any;
    /** (Optional) The relative path to the script hosted in your bucket. The script runs as your environment starts before starting the Apache Airflow process. Use this script to install dependencies, modify configuration options, and set environment variables. See [Using a startup script](https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html). Supported for environment versions 2.x and later. */
    startup_script_s3_path?:           any;
    /** (Optional) Specifies whether the webserver should be accessible over the internet or via your specified VPC. Possible options: `PRIVATE_ONLY` (default) and `PUBLIC_ONLY`. */
    webserver_access_mode?:            any;
    /** (Optional) Specifies the start date for the weekly maintenance window. */
    weekly_maintenance_window_start?:  any;
    /** (Optional) A map of resource tags to associate with the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                             any;
    /** (Optional) (Optional) Log configuration options for processing DAGs. See [Module logging configuration](#module-logging-configuration) for more information. Disabled by default. */
    dag_processing_logs?:              any;
    /** (Optional) Log configuration options for the schedulers. See [Module logging configuration](#module-logging-configuration) for more information. Disabled by default. */
    scheduler_logs?:                   any;
    /** (Optional) Log configuration options for DAG tasks. See [Module logging configuration](#module-logging-configuration) for more information. Enabled by default with `INFO` log level. */
    task_logs?:                        any;
    /** (Optional) Log configuration options for the webservers. See [Module logging configuration](#module-logging-configuration) for more information. Disabled by default. */
    webserver_logs?:                   any;
    /** (Optional) Log configuration options for the workers. See [Module logging configuration](#module-logging-configuration) for more information. Disabled by default. */
    worker_logs?:                      any;
    /** (Required) Enabling or disabling the collection of logs */
    enabled:                           any;
    /** (Optional) Logging level. Valid values: `CRITICAL`, `ERROR`, `WARNING`, `INFO`, `DEBUG`. Will be `INFO` by default. */
    log_level?:                        any;
    /** (Required) Security groups IDs for the environment. At least one of the security group needs to allow MWAA resources to talk to each other, otherwise MWAA cannot be provisioned. */
    security_group_ids:                any;
    /** (Required)  The private subnet IDs in which the environment should be created. MWAA requires two subnets. */
    subnet_ids:                        any;
}