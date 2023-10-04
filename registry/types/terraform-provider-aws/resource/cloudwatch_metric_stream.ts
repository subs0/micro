export interface CloudwatchMetricStream {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_metric_stream: CloudwatchMetricStreamClass;
}

export interface CloudwatchMetricStreamClass {
    /** (Required) ARN of the Amazon Kinesis Firehose delivery stream to use for this metric stream. */
    firehose_arn:              any;
    /** (Required) ARN of the IAM role that this metric stream will use to access Amazon Kinesis Firehose resources. For more information about role permissions, see [Trust between CloudWatch and Kinesis Data Firehose](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-metric-streams-trustpolicy.html). */
    role_arn:                  any;
    /** (Required) Output format for the stream. Possible values are `json` and `opentelemetry0.7`. For more information about output formats, see [Metric streams output formats](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-metric-streams-formats.html). */
    output_format:             any;
    /** (Optional) List of exclusive metric filters. If you specify this parameter, the stream sends metrics from all metric namespaces except for the namespaces and the conditional metric names that you specify here. If you don't specify metric names or provide empty metric names whole metric namespace is excluded. Conflicts with `include_filter`. */
    exclude_filter?:           any;
    /** (Optional) List of inclusive metric filters. If you specify this parameter, the stream sends only the conditional metric names from the metric namespaces that you specify here. If you don't specify metric names or provide empty metric names whole metric namespace is included. Conflicts with `exclude_filter`. */
    include_filter?:           any;
    /** (Optional, Forces new resource) Friendly name of the metric stream. If omitted, Terraform will assign a random, unique name. Conflicts with `name_prefix`. */
    name?:                     any;
    /** (Optional, Forces new resource) Creates a unique friendly name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:              any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
    /** (Optional) For each entry in this array, you specify one or more metrics and the list of additional statistics to stream for those metrics. The additional statistics that you can stream depend on the stream's `output_format`. If the OutputFormat is `json`, you can stream any additional statistic that is supported by CloudWatch, listed in [CloudWatch statistics definitions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html.html). If the OutputFormat is `opentelemetry0.7`, you can stream percentile statistics (p99 etc.). See details below. */
    statistics_configuration?: any;
    /** (Required) The namespace of the metric. */
    namespace:                 any;
    /** (Optional) An array that defines the metrics you want to include for this metric namespace */
    metric_names?:             any;
    /** (Required) The additional statistics to stream for the metrics listed in `include_metrics`. */
    additional_statistics:     any;
    /** (Required) An array that defines the metrics that are to have additional statistics streamed. See details below. */
    include_metric:            any;
    /** (Required) The name of the metric. */
    metric_name:               any;
}