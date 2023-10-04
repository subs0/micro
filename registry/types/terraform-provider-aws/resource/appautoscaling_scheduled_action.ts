export interface AppautoscalingScheduledAction {
    resource: Resource[];
}

export interface Resource {
    appautoscaling_scheduled_action: AppautoscalingScheduledActionClass;
}

export interface AppautoscalingScheduledActionClass {
    /** (Required) Name of the scheduled action. */
    name:                   any;
    /** (Required) Namespace of the AWS service. Documentation can be found in the `ServiceNamespace` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html) Example: ecs */
    service_namespace:      any;
    /** (Required) Identifier of the resource associated with the scheduled action. Documentation can be found in the `ResourceId` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html) */
    resource_id:            any;
    /** (Required) Scalable dimension. Documentation can be found in the `ScalableDimension` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html) Example: ecs:service:DesiredCount */
    scalable_dimension:     any;
    /** (Required) New minimum and maximum capacity. You can set both values or just one. See [below](#scalable-target-action-arguments) */
    scalable_target_action: any;
    /** (Required) Schedule for this action. The following formats are supported: At expressions - at(yyyy-mm-ddThh:mm:ss), Rate expressions - rate(valueunit), Cron expressions - cron(fields). Times for at expressions and cron expressions are evaluated using the time zone configured in `timezone`. Documentation can be found in the `Timezone` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html) */
    schedule:               any;
    /** (Optional) Date and time for the scheduled action to start in RFC 3339 format. The timezone is not affected by the setting of `timezone`. */
    start_time?:            any;
    /** (Optional) Date and time for the scheduled action to end in RFC 3339 format. The timezone is not affected by the setting of `timezone`. */
    end_time?:              any;
    /** (Optional) Time zone used when setting a scheduled action by using an at or cron expression. Does not affect timezone for `start_time` and `end_time`. Valid values are the [canonical names of the IANA time zones supported by Joda-Time](https://www.joda.org/joda-time/timezones.html), such as `Etc/GMT+9` or `Pacific/Tahiti`. Default is `UTC`. */
    timezone?:              any;
    /** (Optional) Maximum capacity. At least one of `max_capacity` or `min_capacity` must be set. */
    max_capacity?:          any;
    /** (Optional) Minimum capacity. At least one of `min_capacity` or `max_capacity` must be set. */
    min_capacity?:          any;
}