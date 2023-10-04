export interface CloudwatchMetricAlarm {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_metric_alarm: CloudwatchMetricAlarmClass;
}

export interface CloudwatchMetricAlarmClass {
    /** (Required) The descriptive name for the alarm. This name must be unique within the user's AWS account */
    alarm_name:                             any;
    /** (Required) The arithmetic operation to use when comparing the specified Statistic and Threshold. The specified Statistic value is used as the first operand. Either of the following is supported: `GreaterThanOrEqualToThreshold`, `GreaterThanThreshold`, `LessThanThreshold`, `LessThanOrEqualToThreshold`. Additionally, the values  `LessThanLowerOrGreaterThanUpperThreshold`, `LessThanLowerThreshold`, and `GreaterThanUpperThreshold` are used only for alarms based on anomaly detection models. */
    comparison_operator:                    any;
    /** (Required) The number of periods over which data is compared to the specified threshold. */
    evaluation_periods:                     any;
    /** (Required) The name for this metric. */
    metric_name:                            any;
    /** (Required) The namespace for this metric. See docs for the [list of namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/aws-namespaces.html). */
    namespace:                              any;
    /** (Required) Granularity in seconds of returned data points. */
    period:                                 any;
    /** (Optional) The statistic to apply to the alarm's associated metric. */
    statistic?:                             any;
    /** (Optional) The value against which the specified statistic is compared. This parameter is required for alarms based on static thresholds, but should not be used for alarms based on anomaly detection models. */
    threshold?:                             any;
    /** (Optional) If this is an alarm based on an anomaly detection model, make this value match the ID of the ANOMALY_DETECTION_BAND function. */
    threshold_metric_id?:                   any;
    /** (Optional) Indicates whether or not actions should be executed during any changes to the alarm's state. Defaults to `true`. */
    actions_enabled?:                       any;
    /** (Optional) The list of actions to execute when this alarm transitions into an ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN). */
    alarm_actions?:                         any;
    /** (Optional) The description for the alarm. */
    alarm_description?:                     any;
    /** (Optional) The number of datapoints that must be breaching to trigger the alarm. */
    datapoints_to_alarm?:                   any;
    /** (Optional) The dimensions for this metric.  For the list of available dimensions see the AWS documentation [here](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CW_Support_For_AWS.html). */
    dimensions?:                            any;
    /** (Optional) The list of actions to execute when this alarm transitions into an INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN). */
    insufficient_data_actions?:             any;
    /** (Optional) The list of actions to execute when this alarm transitions into an OK state from any other state. Each action is specified as an Amazon Resource Name (ARN). */
    ok_actions?:                            any;
    /** (Optional) The unit for this metric. */
    unit?:                                  any;
    /** (Optional) The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100. */
    extended_statistic?:                    any;
    /** (Optional) Sets how this alarm is to handle missing data points. The following values are supported: `missing`, `ignore`, `breaching` and `notBreaching`. Defaults to `missing`. */
    treat_missing_data?:                    any;
    /** (Optional) Used only for alarms based on percentiles. */
    evaluate_low_sample_count_percentiles?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                  any;
    /** (Required) A short name used to tie this object to the results in the response. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter. */
    id:                                     any;
    /** (Optional) The ID of the account where the metrics are located, if this is a cross-account alarm. */
    account_id?:                            any;
    /** (Optional) The math expression to be performed on the returned data, if this object is performing a math expression. This expression can use the id of the other metrics to refer to those metrics, and can also use the id of other expressions to use the result of those expressions. For more information about metric math expressions, see Metric Math Syntax and Functions in the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax). */
    expression?:                            any;
    /** (Optional) A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. */
    label?:                                 any;
    /** (Optional) The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data. */
    metric?:                                any;
    /** (Optional) Specify exactly one `metric_query` to be `true` to use that `metric_query` result as the alarm. */
    return_data?:                           any;
    /** (Required) The statistic to apply to this metric. */
    stat:                                   any;
}