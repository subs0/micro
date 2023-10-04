export interface AutoscalingplansScalingPlan {
    resource: Resource[];
}

export interface Resource {
    autoscalingplans_scaling_plan: AutoscalingplansScalingPlanClass;
}

export interface AutoscalingplansScalingPlanClass {
    /** (Required) Name of the scaling plan. Names cannot contain vertical bars, colons, or forward slashes. */
    name:                                     any;
    /** (Required) CloudFormation stack or set of tags. You can create one scaling plan per application source. */
    application_source:                       any;
    /** (Required) Scaling instructions. More details can be found in the [AWS Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_ScalingInstruction.html). */
    scaling_instruction:                      any;
    /** (Optional) ARN of a AWS CloudFormation stack. */
    cloudformation_stack_arn?:                any;
    /** (Optional) Set of tags. */
    tag_filter?:                              any;
    /** (Required) Tag key. */
    key:                                      any;
    /** (Optional) Tag values. */
    values?:                                  any;
    /** (Required) Maximum capacity of the resource. The exception to this upper limit is if you specify a non-default setting for `predictive_scaling_max_capacity_behavior`. */
    max_capacity:                             any;
    /** (Required) Minimum capacity of the resource. */
    min_capacity:                             any;
    /** (Required) ID of the resource. This string consists of the resource type and unique identifier. */
    resource_id:                              any;
    /** (Required) Scalable dimension associated with the resource. Valid values: `autoscaling:autoScalingGroup:DesiredCapacity`, `dynamodb:index:ReadCapacityUnits`, `dynamodb:index:WriteCapacityUnits`, `dynamodb:table:ReadCapacityUnits`, `dynamodb:table:WriteCapacityUnits`, `ecs:service:DesiredCount`, `ec2:spot-fleet-request:TargetCapacity`, `rds:cluster:ReadReplicaCount`. */
    scalable_dimension:                       any;
    /** (Required) Namespace of the AWS service. Valid values: `autoscaling`, `dynamodb`, `ecs`, `ec2`, `rds`. */
    service_namespace:                        any;
    /** (Required) Structure that defines new target tracking configurations. Each of these structures includes a specific scaling metric and a target value for the metric, along with various parameters to use with dynamic scaling. */
    target_tracking_configuration:            any;
    /** (Optional) Customized load metric to use for predictive scaling. You must specify either `customized_load_metric_specification` or `predefined_load_metric_specification` when configuring predictive scaling. */
    customized_load_metric_specification?:    any;
    /** (Optional) Boolean controlling whether dynamic scaling by AWS Auto Scaling is disabled. Defaults to `false`. */
    disable_dynamic_scaling?:                 any;
    /** (Optional) Predefined load metric to use for predictive scaling. You must specify either `predefined_load_metric_specification` or `customized_load_metric_specification` when configuring predictive scaling. */
    predefined_load_metric_specification?:    any;
    /** (Optional) Size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. */
    predictive_scaling_max_capacity_buffer?:  any;
    /** (Optional) Predictive scaling mode. Valid values: `ForecastAndScale`, `ForecastOnly`. */
    predictive_scaling_mode?:                 any;
    /** (Optional) Controls whether a resource's externally created scaling policies are kept or replaced. Valid values: `KeepExternalPolicies`, `ReplaceExternalPolicies`. Defaults to `KeepExternalPolicies`. */
    scaling_policy_update_behavior?:          any;
    /** (Optional) Amount of time, in seconds, to buffer the run time of scheduled scaling actions when scaling out. */
    scheduled_action_buffer_time?:            any;
    /** (Required) Name of the metric. */
    metric_name:                              any;
    /** (Required) Namespace of the metric. */
    namespace:                                any;
    /** (Required) Statistic of the metric. Valid values: `Average`, `Maximum`, `Minimum`, `SampleCount`, `Sum`. */
    statistic:                                any;
    /** (Optional) Dimensions of the metric. */
    dimensions?:                              any;
    /** (Optional) Unit of the metric. */
    unit?:                                    any;
    /** (Required) Metric type. Valid values: `ALBTargetGroupRequestCount`, `ASGTotalCPUUtilization`, `ASGTotalNetworkIn`, `ASGTotalNetworkOut`. */
    predefined_load_metric_type:              any;
    /** (Optional) Identifies the resource associated with the metric type. */
    resource_label?:                          any;
    /** (Required) Target value for the metric. */
    target_value:                             any;
    /** (Optional) Customized metric. You can specify either `customized_scaling_metric_specification` or `predefined_scaling_metric_specification`. */
    customized_scaling_metric_specification?: any;
    /** (Optional) Boolean indicating whether scale in by the target tracking scaling policy is disabled. Defaults to `false`. */
    disable_scale_in?:                        any;
    /** (Optional) Predefined metric. You can specify either `predefined_scaling_metric_specification` or `customized_scaling_metric_specification`. */
    predefined_scaling_metric_specification?: any;
    /** (Optional) Estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. */
    estimated_instance_warmup?:               any;
    /** (Optional) Amount of time, in seconds, after a scale in activity completes before another scale in activity can start. */
    scale_in_cooldown?:                       any;
    /** (Optional) Amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start. */
    scale_out_cooldown?:                      any;
    /** (Required) Metric type. Valid values: `ALBRequestCountPerTarget`, `ASGAverageCPUUtilization`, `ASGAverageNetworkIn`, `ASGAverageNetworkOut`, `DynamoDBReadCapacityUtilization`, `DynamoDBWriteCapacityUtilization`, `ECSServiceAverageCPUUtilization`, `ECSServiceAverageMemoryUtilization`, `EC2SpotFleetRequestAverageCPUUtilization`, `EC2SpotFleetRequestAverageNetworkIn`, `EC2SpotFleetRequestAverageNetworkOut`, `RDSReaderAverageCPUUtilization`, `RDSReaderAverageDatabaseConnections`. */
    predefined_scaling_metric_type:           any;
}