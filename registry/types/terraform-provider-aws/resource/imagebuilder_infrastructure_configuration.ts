export interface ImagebuilderInfrastructureConfiguration {
    resource: Resource[];
}

export interface Resource {
    imagebuilder_infrastructure_configuration: ImagebuilderInfrastructureConfigurationClass;
}

export interface ImagebuilderInfrastructureConfigurationClass {
    /** (Required) Name of IAM Instance Profile. */
    instance_profile_name:          any;
    /** (Required) Name for the configuration. */
    name:                           any;
    /** (Optional) Description for the configuration. */
    description?:                   any;
    instance_metadata_options?:     InstanceMetadataOptions;
    /** (Optional) Set of EC2 Instance Types. */
    instance_types?:                any;
    /** (Optional) Name of EC2 Key Pair. */
    key_pair?:                      any;
    logging?:                       Logging;
    /** (Optional) Key-value map of resource tags to assign to infrastructure created by the configuration. */
    resource_tags?:                 any;
    /** (Optional) Set of EC2 Security Group identifiers. */
    security_group_ids?:            any;
    /** (Optional) Amazon Resource Name (ARN) of SNS Topic. */
    sns_topic_arn?:                 any;
    /** (Optional) EC2 Subnet identifier. Also requires `security_group_ids` argument. */
    subnet_id?:                     any;
    /** (Optional) Key-value map of resource tags to assign to the configuration. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
    /** (Optional) Enable if the instance should be terminated when the pipeline fails. Defaults to `false`. */
    terminate_instance_on_failure?: any;
    /** (Required) Configuration block with S3 logging settings. Detailed below. */
    s3_logs:                        S3Logs;
}

export interface InstanceMetadataOptions {
    /** The number of hops that an instance can traverse to reach its destonation. */
    http_put_response_hop_limit: any;
    /** Whether a signed token is required for instance metadata retrieval requests. Valid values: `required`, `optional`. */
    http_tokens:                 any;
}

export interface Logging {
    /** (Required) Configuration block with S3 logging settings. Detailed below. */
    s3_logs: any;
}

export interface S3Logs {
    /** (Required) Name of the S3 Bucket. */
    s3_bucket_name: any;
    /** (Optional) Prefix to use for S3 logs. Defaults to `/`. */
    s3_key_prefix?: any;
}