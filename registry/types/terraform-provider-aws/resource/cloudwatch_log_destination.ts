export interface CloudwatchLogDestination {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_log_destination: CloudwatchLogDestinationClass;
}

export interface CloudwatchLogDestinationClass {
    /** (Required) A name for the log destination. */
    name:       any;
    /** (Required) The ARN of an IAM role that grants Amazon CloudWatch Logs permissions to put data into the target. */
    role_arn:   any;
    /** (Required) The ARN of the target Amazon Kinesis stream resource for the destination. */
    target_arn: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:      any;
}