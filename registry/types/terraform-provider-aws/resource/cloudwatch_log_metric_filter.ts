export interface CloudwatchLogMetricFilter {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_log_metric_filter: CloudwatchLogMetricFilterClass;
}

export interface CloudwatchLogMetricFilterClass {
    /** (Required) The name of the CloudWatch metric to which the monitored log information should be published (e.g., `ErrorCount`) */
    name:                  any;
    /** (Required) A valid [CloudWatch Logs filter pattern](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/FilterAndPatternSyntax.html) */
    pattern:               any;
    /** (Required) The name of the log group to associate the metric filter with. */
    log_group_name:        any;
    /** (Required) A block defining collection of information needed to define how metric data gets emitted. See below. */
    metric_transformation: any;
    /** (Required) The destination namespace of the CloudWatch metric. */
    namespace:             any;
    /** (Required) What to publish to the metric. For example, if you're counting the occurrences of a particular term like "Error", the value will be "1" for each occurrence. If you're counting the bytes transferred the published value will be the value in the log event. */
    value:                 any;
    /** (Optional) The value to emit when a filter pattern does not match a log event. Conflicts with `dimensions`. */
    default_value?:        any;
    /** (Optional) Map of fields to use as dimensions for the metric. Up to 3 dimensions are allowed. Conflicts with `default_value`. */
    dimensions?:           any;
    /** (Optional) The unit to assign to the metric. If you omit this, the unit is set as `None`. */
    unit?:                 any;
}