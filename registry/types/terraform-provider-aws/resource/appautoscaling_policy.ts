export interface AppautoscalingPolicy {
    resource: Resource[];
}

export interface Resource {
    appautoscaling_policy: AppautoscalingPolicyClass;
}

export interface AppautoscalingPolicyClass {
    /** (Required) Name of the dimension. */
    name:                                          any;
    /** (Optional) Policy type. Valid values are `StepScaling` and `TargetTrackingScaling`. Defaults to `StepScaling`. Certain services only support only one policy type. For more information see the [Target Tracking Scaling Policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html) and [Step Scaling Policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html) documentation. */
    policy_type?:                                  any;
    /** (Required) Resource type and unique identifier string for the resource associated with the scaling policy. Documentation can be found in the `ResourceId` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html) */
    resource_id:                                   any;
    /** (Required) Scalable dimension of the scalable target. Documentation can be found in the `ScalableDimension` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html) */
    scalable_dimension:                            any;
    /** (Required) AWS service namespace of the scalable target. Documentation can be found in the `ServiceNamespace` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html) */
    service_namespace:                             any;
    step_scaling_policy_configuration?:            StepScalingPolicyConfiguration;
    target_tracking_scaling_policy_configuration?: TargetTrackingScalingPolicyConfiguration;
    /** (Optional) Dimensions of the metric. */
    dimensions?:                                   any;
    /** (Required) Name of the metric. */
    metric_name:                                   any;
    /** (Required) Namespace of the metric. */
    namespace:                                     any;
    /** (Optional) Statistic of the metric. Valid values: `Average`, `Minimum`, `Maximum`, `SampleCount`, and `Sum`. */
    statistic?:                                    any;
    /** (Optional) Unit of the metrics to return. */
    unit?:                                         any;
    /** (Optional) Metrics to include, as a metric data query. */
    metrics?:                                      any;
    /** (Required) Value of the dimension. */
    value:                                         any;
    /** (Optional) Math expression used on the returned metric. You must specify either `expression` or `metric_stat`, but not both. */
    expression?:                                   any;
    /** (Required) Short name for the metric used in target tracking scaling policy. */
    id:                                            any;
    /** (Optional) Human-readable label for this metric or expression. */
    label?:                                        any;
    /** (Optional) Structure that defines CloudWatch metric to be used in target tracking scaling policy. You must specify either `expression` or `metric_stat`, but not both. */
    metric_stat?:                                  any;
    /** (Optional) Boolean that indicates whether to return the timestamps and raw data values of this metric, the default is true */
    return_data?:                                  any;
    /** (Required) Structure that defines the CloudWatch metric to return, including the metric name, namespace, and dimensions. */
    metric:                                        any;
    /** (Required) Statistic of the metrics to return. */
    stat:                                          any;
    /** (Required) Metric type. */
    predefined_metric_type:                        any;
    /** (Optional) Reserved for future use if the `predefined_metric_type` is not `ALBRequestCountPerTarget`. If the `predefined_metric_type` is `ALBRequestCountPerTarget`, you must specify this argument. Documentation can be found at: [AWS Predefined Scaling Metric Specification](https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_PredefinedScalingMetricSpecification.html). Must be less than or equal to 1023 characters in length. */
    resource_label?:                               any;
}

export interface StepScalingPolicyConfiguration {
    /** (Required) Whether the adjustment is an absolute number or a percentage of the current capacity. Valid values are `ChangeInCapacity`, `ExactCapacity`, and `PercentChangeInCapacity`. */
    adjustment_type:             any;
    /** (Required) Amount of time, in seconds, after a scaling activity completes and before the next scaling activity can start. */
    cooldown:                    any;
    /** (Optional) Aggregation type for the policy's metrics. Valid values are "Minimum", "Maximum", and "Average". Without a value, AWS will treat the aggregation type as "Average". */
    metric_aggregation_type:     any;
    /** (Optional) Minimum number to adjust your scalable dimension as a result of a scaling activity. If the adjustment type is PercentChangeInCapacity, the scaling policy changes the scalable dimension of the scalable target by this amount. */
    min_adjustment_magnitude:    any;
    /** (Optional) Set of adjustments that manage scaling. These have the following structure: */
    step_adjustment:             any;
    /** (Optional) Lower bound for the difference between the alarm threshold and the CloudWatch metric. Without a value, AWS will treat this bound as negative infinity. */
    metric_interval_lower_bound: any;
    /** (Optional) Upper bound for the difference between the alarm threshold and the CloudWatch metric. Without a value, AWS will treat this bound as infinity. The upper bound must be greater than the lower bound. */
    metric_interval_upper_bound: any;
    /** (Required) Number of members by which to scale, when the adjustment bounds are breached. A positive value scales up. A negative value scales down. */
    scaling_adjustment:          any;
}

export interface TargetTrackingScalingPolicyConfiguration {
    /** (Required) Target value for the metric. */
    target_value:                    any;
    /** (Optional) Whether scale in by the target tracking policy is disabled. If the value is true, scale in is disabled and the target tracking policy won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource. The default value is `false`. */
    disable_scale_in:                any;
    /** (Optional) Amount of time, in seconds, after a scale in activity completes before another scale in activity can start. */
    scale_in_cooldown:               any;
    /** (Optional) Amount of time, in seconds, after a scale out activity completes before another scale out activity can start. */
    scale_out_cooldown:              any;
    /** (Optional) Custom CloudWatch metric. Documentation can be found  at: [AWS Customized Metric Specification](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CustomizedMetricSpecification.html). See supported fields below. */
    customized_metric_specification: any;
    /** (Optional) Predefined metric. See supported fields below. */
    predefined_metric_specification: any;
}