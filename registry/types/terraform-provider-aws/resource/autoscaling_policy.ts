export interface AutoscalingPolicy {
    resource: Resource[];
}

export interface Resource {
    autoscaling_policy: AutoscalingPolicyClass;
}

export interface AutoscalingPolicyClass {
    /** (Required) Name of the autoscaling group. */
    autoscaling_group_name:            any;
    /** (Optional) Whether the adjustment is an absolute number or a percentage of the current capacity. Valid values are `ChangeInCapacity`, `ExactCapacity`, and `PercentChangeInCapacity`. */
    adjustment_type?:                  any;
    /** (Optional) Policy type, either "SimpleScaling", "StepScaling", "TargetTrackingScaling", or "PredictiveScaling". If this value isn't provided, AWS will default to "SimpleScaling." */
    policy_type?:                      any;
    predictive_scaling_configuration?: PredictiveScalingConfiguration;
    /** (Optional) Estimated time, in seconds, until a newly launched instance will contribute CloudWatch metrics. Without a value, AWS will default to the group's specified cooldown period. */
    estimated_instance_warmup?:        any;
    /** (Optional) Whether the scaling policy is enabled or disabled. Default: `true`. */
    enabled?:                          any;
    /** (Optional) Minimum value to scale by when `adjustment_type` is set to `PercentChangeInCapacity`. */
    min_adjustment_magnitude?:         any;
    /** (Optional) Amount of time, in seconds, after a scaling activity completes and before the next scaling activity can start. */
    cooldown?:                         any;
    /** (Required) Number of members by which to */
    scaling_adjustment:                any;
    /** (Optional) Aggregation type for the policy's metrics. Valid values are "Minimum", "Maximum", and "Average". Without a value, AWS will treat the aggregation type as "Average". */
    metric_aggregation_type?:          any;
    /** (Optional) Set of adjustments that manage */
    step_adjustment?:                  any;
    /** (Optional) Lower bound for the */
    metric_interval_lower_bound?:      any;
    /** (Optional) Upper bound for the */
    metric_interval_upper_bound?:      any;
    /** (Optional) Target tracking policy. These have the following structure: */
    target_tracking_configuration?:    any;
    predefined_metric_specification?:  PredefinedMetricSpecification;
    customized_metric_specification?:  CustomizedMetricSpecification;
    /** (Required) Target value for the metric. */
    target_value:                      any;
    /** (Optional, Default: false) Whether scale in by the target tracking policy is disabled. */
    disable_scale_in?:                 any;
}

export interface CustomizedMetricSpecification {
    /** (Optional) Dimensions of the metric. */
    metric_dimension: any;
    /** (Required) Name of the metric. */
    metric_name:      any;
    /** (Required) Namespace of the metric. */
    namespace:        any;
    /** (Optional) Statistic of the metric. */
    statistic:        any;
    /** (Optional) Unit of the metrics to return. */
    unit:             any;
    /** (Optional) Metrics to include, as a metric data query. */
    metrics:          any;
    /** (Required) Name of the dimension. */
    name:             any;
    /** (Required) Value of the dimension. */
    value:            any;
    /** (Optional) Math expression used on the returned metric. You must specify either `expression` or `metric_stat`, but not both. */
    expression:       any;
    /** (Required) Short name for the metric used in target tracking scaling policy. */
    id:               any;
    /** (Optional) Human-readable label for this metric or expression. */
    label:            any;
    /** (Optional) Structure that defines CloudWatch metric to be used in target tracking scaling policy. You must specify either `expression` or `metric_stat`, but not both. */
    metric_stat:      any;
    /** (Optional) Boolean that indicates whether to return the timestamps and raw data values of this metric, the default is true */
    return_data:      any;
    /** (Required) Structure that defines the CloudWatch metric to return, including the metric name, namespace, and dimensions. */
    metric:           any;
    /** (Required) Statistic of the metrics to return. */
    stat:             any;
    /** (Optional) Dimensions of the metric. */
    dimensions:       any;
}

export interface PredefinedMetricSpecification {
    /** (Required) Metric type. */
    predefined_metric_type: any;
    /** (Optional) Identifies the resource associated with the metric type. */
    resource_label:         any;
}

export interface PredictiveScalingConfiguration {
    /** (Optional) Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity of the Auto Scaling group. Valid values are `HonorMaxCapacity` or `IncreaseMaxCapacity`. Default is `HonorMaxCapacity`. */
    max_capacity_breach_behavior:             any;
    /** (Optional) Size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. Valid range is `0` to `100`. If set to `0`, Amazon EC2 Auto Scaling may scale capacity higher than the maximum capacity to equal but not exceed forecast capacity. */
    max_capacity_buffer:                      any;
    /** (Required) This structure includes the metrics and target utilization to use for predictive scaling. */
    metric_specification:                     any;
    /** (Optional) Predictive scaling mode. Valid values are `ForecastAndScale` and `ForecastOnly`. Default is `ForecastOnly`. */
    mode:                                     any;
    /** (Optional) Amount of time, in seconds, by which the instance launch time can be advanced. Minimum is `0`. */
    scheduling_buffer_time:                   any;
    /** (Optional) Customized capacity metric specification. The field is only valid when you use `customized_load_metric_specification` */
    customized_capacity_metric_specification: any;
    /** (Optional) Customized load metric specification. */
    customized_load_metric_specification:     any;
    /** (Optional) Customized scaling metric specification. */
    customized_scaling_metric_specification:  any;
    /** (Optional) Predefined load metric specification. */
    predefined_load_metric_specification:     any;
    /** (Optional) Metric pair specification from which Amazon EC2 Auto Scaling determines the appropriate scaling metric and load metric to use. */
    predefined_metric_pair_specification:     any;
    /** (Optional) Predefined scaling metric specification. */
    predefined_scaling_metric_specification:  any;
    /** (Required) Metric type. */
    predefined_metric_type:                   any;
    /** (Optional) Identifies the resource associated with the metric type. */
    resource_label:                           any;
    /** (Required) List of up to 10 structures that defines custom capacity metric in predictive scaling policy */
    metric_data_queries:                      any;
    /** (Optional) Math expression used on the returned metric. You must specify either `expression` or `metric_stat`, but not both. */
    expression:                               any;
    /** (Required) Short name for the metric used in target tracking scaling policy. */
    id:                                       any;
    /** (Optional) Human-readable label for this metric or expression. */
    label:                                    any;
    /** (Optional) Structure that defines CloudWatch metric to be used in target tracking scaling policy. You must specify either `expression` or `metric_stat`, but not both. */
    metric_stat:                              any;
    /** (Optional) Boolean that indicates whether to return the timestamps and raw data values of this metric, the default is true */
    return_data:                              any;
    /** (Required) Structure that defines the CloudWatch metric to return, including the metric name, namespace, and dimensions. */
    metric:                                   any;
    /** (Required) Statistic of the metrics to return. */
    stat:                                     any;
    /** (Optional) Unit of the metrics to return. */
    unit:                                     any;
    /** (Optional) Dimensions of the metric. */
    dimensions:                               any;
    /** (Required) Name of the metric. */
    metric_name:                              any;
    /** (Required) Namespace of the metric. */
    namespace:                                any;
    /** (Required) Name of the dimension. */
    name:                                     any;
    /** (Required) Value of the dimension. */
    value:                                    any;
}