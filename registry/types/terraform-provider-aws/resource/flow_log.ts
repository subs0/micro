export interface FlowLog {
    resource: Resource[];
}

export interface Resource {
    flow_log: FlowLogClass;
}

export interface FlowLogClass {
    /** (Required) The type of traffic to capture. Valid values: `ACCEPT`,`REJECT`, `ALL`. */
    traffic_type:                   any;
    /** (Optional) ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts. */
    deliver_cross_account_role?:    any;
    /** (Optional) Elastic Network Interface ID to attach to */
    eni_id?:                        any;
    /** (Optional) The ARN for the IAM role that's used to post flow logs to a CloudWatch Logs log group */
    iam_role_arn?:                  any;
    /** (Optional) The type of the logging destination. Valid values: `cloud-watch-logs`, `s3`, `kinesis-data-firehose`. Default: `cloud-watch-logs`. */
    log_destination_type?:          any;
    /** (Optional) The ARN of the logging destination. Either `log_destination` or `log_group_name` must be set. */
    log_destination?:               any;
    /** (Optional) **Deprecated:** Use `log_destination` instead. The name of the CloudWatch log group. Either `log_group_name` or `log_destination` must be set. */
    log_group_name?:                any;
    /** (Optional) Subnet ID to attach to */
    subnet_id?:                     any;
    /** (Optional) Transit Gateway ID to attach to */
    transit_gateway_id?:            any;
    /** (Optional) Transit Gateway Attachment ID to attach to */
    transit_gateway_attachment_id?: any;
    /** (Optional) VPC ID to attach to */
    vpc_id?:                        any;
    /** (Optional) The fields to include in the flow log record, in the order in which they should appear. */
    log_format?:                    any;
    /** (Optional) The maximum interval of time */
    max_aggregation_interval?:      any;
    destination_options?:           DestinationOptions;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
}

export interface DestinationOptions {
    /** (Optional) The format for the flow log. Default value: `plain-text`. Valid values: `plain-text`, `parquet`. */
    file_format:                any;
    /** (Optional) Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3. Default value: `false`. */
    hive_compatible_partitions: any;
    /** (Optional) Indicates whether to partition the flow log per hour. This reduces the cost and response time for queries. Default value: `false`. */
    per_hour_partition:         any;
}