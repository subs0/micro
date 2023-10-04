export interface CloudwatchLogSubscriptionFilter {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_log_subscription_filter: CloudwatchLogSubscriptionFilterClass;
}

export interface CloudwatchLogSubscriptionFilterClass {
    /** (Required) A name for the subscription filter */
    name:            any;
    /** (Required) The ARN of the destination to deliver matching log events to. Kinesis stream or Lambda function ARN. */
    destination_arn: any;
    /** (Required) A valid CloudWatch Logs filter pattern for subscribing to a filtered stream of log events. Use empty string `""` to match everything. For more information, see the [Amazon CloudWatch Logs User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html). */
    filter_pattern:  any;
    /** (Required) The name of the log group to associate the subscription filter with */
    log_group_name:  any;
    /** (Optional) The ARN of an IAM role that grants Amazon CloudWatch Logs permissions to deliver ingested log events to the destination. If you use Lambda as a destination, you should skip this argument and use `aws_lambda_permission` resource for granting access from CloudWatch logs to the destination Lambda function. */
    role_arn?:       any;
    /** (Optional) The method used to distribute log data to the destination. By default log data is grouped by log stream, but the grouping can be set to random for a more even distribution. This property is only applicable when the destination is an Amazon Kinesis stream. Valid values are "Random" and "ByLogStream". */
    distribution?:   any;
}