export interface IvschatLoggingConfiguration {
    resource: Resource[];
}

export interface Resource {
    ivschat_logging_configuration: IvschatLoggingConfigurationClass;
}

export interface IvschatLoggingConfigurationClass {
    /** (Required) Object containing destination configuration for where chat activity will be logged. This object must contain exactly one of the following children arguments: */
    destination_configuration: any;
    /** An Amazon CloudWatch Logs destination configuration where chat activity will be logged. */
    cloudwatch_logs?:          any;
    /** Name of the Amazon Cloudwatch Logs destination where chat activity will be logged. */
    log_group_name?:           any;
    /** An Amazon Kinesis Data Firehose destination configuration where chat activity will be logged. */
    firehose?:                 any;
    /** Name of the Amazon Kinesis Firehose delivery stream where chat activity will be logged. */
    delivery_stream_name?:     any;
    /** An Amazon S3 destination configuration where chat activity will be logged. */
    s3?:                       any;
    /** Name of the Amazon S3 bucket where chat activity will be logged. */
    bucket_name?:              any;
    /** (Optional) Logging Configuration name. */
    name?:                     any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
}