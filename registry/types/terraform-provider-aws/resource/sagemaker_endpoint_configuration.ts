export interface SagemakerEndpointConfiguration {
    resource: Resource[];
}

export interface Resource {
    sagemaker_endpoint_configuration: SagemakerEndpointConfigurationClass;
}

export interface SagemakerEndpointConfigurationClass {
    production_variants:         ProductionVariants;
    /** (Optional) Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. */
    kms_key_arn?:                any;
    /** (Optional) The name of the endpoint configuration. If omitted, Terraform will assign a random, unique name. Conflicts with `name_prefix`. */
    name?:                       any;
    /** (Optional) Creates a unique endpoint configuration name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:                any;
    /** (Optional) A mapping of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                       any;
    data_capture_config?:        DataCaptureConfig;
    async_inference_config?:     AsyncInferenceConfig;
    /** (Optional) Array of ProductionVariant objects. There is one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on ProductionVariants.If you use this field, you can only specify one variant for ProductionVariants and one variant for ShadowProductionVariants. Fields are documented below. */
    shadow_production_variants?: any;
}

export interface AsyncInferenceConfig {
    /** (Required) Specifies the configuration for asynchronous inference invocation outputs. */
    output_config:                           any;
    /** (Optional) Configures the behavior of the client used by Amazon SageMaker to interact with the model container during asynchronous inference. */
    client_config:                           any;
    /** (Optional) The maximum number of concurrent requests sent by the SageMaker client to the model container. If no value is provided, Amazon SageMaker will choose an optimal value for you. */
    max_concurrent_invocations_per_instance: any;
    /** (Required) The Amazon S3 location to upload inference responses to. */
    s3_output_path:                          any;
    /** (Optional) The Amazon S3 location to upload failure inference responses to. */
    s3_failure_path:                         any;
    /** (Required) The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that SageMaker uses to encrypt the core dump data at rest using Amazon S3 server-side encryption. */
    kms_key_id:                              any;
    /** (Optional) Specifies the configuration for notifications of inference results for asynchronous inference. */
    notification_config:                     any;
    /** (Optional) The Amazon SNS topics where you want the inference response to be included. Valid values are `SUCCESS_NOTIFICATION_TOPIC` and `ERROR_NOTIFICATION_TOPIC`. */
    include_inference_response_in:           any;
    /** (Optional) Amazon SNS topic to post a notification to when inference fails. If no topic is provided, no notification is sent on failure. */
    error_topic:                             any;
    /** (Optional) Amazon SNS topic to post a notification to when inference completes successfully. If no topic is provided, no notification is sent on success. */
    success_topic:                           any;
}

export interface DataCaptureConfig {
    /** (Required) Portion of data to capture. Should be between 0 and 100. */
    initial_sampling_percentage: any;
    /** (Required) The Amazon S3 bucket to send the core dump to. */
    destination_s3_uri:          any;
    /** (Required) Specifies what data to capture. Fields are documented below. */
    capture_options:             any;
    /** (Required) The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that SageMaker uses to encrypt the core dump data at rest using Amazon S3 server-side encryption. */
    kms_key_id:                  any;
    /** (Optional) Flag to enable data capture. Defaults to `false`. */
    enable_capture:              any;
    /** (Optional) The content type headers to capture. Fields are documented below. */
    capture_content_type_header: any;
    /** (Required) Specifies the data to be captured. Should be one of `Input` or `Output`. */
    capture_mode:                any;
    /** (Optional) The CSV content type headers to capture. */
    csv_content_types:           any;
    /** (Optional) The JSON content type headers to capture. */
    json_content_types:          any;
}

export interface ProductionVariants {
    /** (Optional) The size of the Elastic Inference (EI) instance to use for the production variant. */
    accelerator_type?:                                  any;
    /** (Optional) The timeout value, in seconds, for your inference container to pass health check by SageMaker Hosting. For more information about health check, see [How Your Container Should Respond to Health Check (Ping) Requests](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html#your-algorithms-inference-algo-ping-requests). Valid values between `60` and `3600`. */
    container_startup_health_check_timeout_in_seconds?: any;
    /** (Optional) Specifies configuration for a core dump from the model container when the process crashes. Fields are documented below. */
    core_dump_config?:                                  any;
    /** (Optional) You can use this parameter to turn on native Amazon Web Services Systems Manager (SSM) access for a production variant behind an endpoint. By default, SSM access is disabled for all production variants behind an endpoints. */
    enable_ssm_access?:                                 any;
    /** (Optional) Initial number of instances used for auto-scaling. */
    initial_instance_count?:                            any;
    /** (Optional)  The type of instance to start. */
    instance_type?:                                     any;
    /** (Optional) Determines initial traffic distribution among all of the models that you specify in the endpoint configuration. If unspecified, it defaults to `1.0`. */
    initial_variant_weight?:                            any;
    /** (Optional) The timeout value, in seconds, to download and extract the model that you want to host from Amazon S3 to the individual inference instance associated with this production variant. Valid values between `60` and `3600`. */
    model_data_download_timeout_in_seconds?:            any;
    /** (Required) The name of the model to use. */
    model_name:                                         any;
    /** (Optional) Specifies configuration for how an endpoint performs asynchronous inference. */
    serverless_config?:                                 any;
    /** (Optional) The name of the variant. If omitted, Terraform will assign a random, unique name. */
    variant_name?:                                      any;
    /** (Optional) The size, in GB, of the ML storage volume attached to individual inference instance associated with the production variant. Valid values between `1` and `512`. */
    volume_size_in_gb?:                                 any;
    /** (Required) The Amazon S3 bucket to send the core dump to. */
    destination_s3_uri:                                 any;
    /** (Required) The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that SageMaker uses to encrypt the core dump data at rest using Amazon S3 server-side encryption. */
    kms_key_id:                                         any;
    /** (Required) The maximum number of concurrent invocations your serverless endpoint can process. Valid values are between `1` and `200`. */
    max_concurrency:                                    any;
    /** (Required) The memory size of your serverless endpoint. Valid values are in 1 GB increments: `1024` MB, `2048` MB, `3072` MB, `4096` MB, `5120` MB, or `6144` MB. */
    memory_size_in_mb:                                  any;
    /** The amount of provisioned concurrency to allocate for the serverless endpoint. Should be less than or equal to `max_concurrency`. Valid values are between `1` and `200`. */
    provisioned_concurrency?:                           any;
}