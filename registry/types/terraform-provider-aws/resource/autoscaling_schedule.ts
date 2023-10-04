export interface AutoscalingSchedule {
    resource: Resource[];
}

export interface Resource {
    autoscaling_schedule: AutoscalingScheduleClass;
}

export interface AutoscalingScheduleClass {
    /** (Required) The name of the Auto Scaling group. */
    autoscaling_group_name: any;
    /** (Required) The name of this scaling action. */
    scheduled_action_name:  any;
    /** (Optional) The initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain. Set to `-1` if you don't want to change the desired capacity at the scheduled time. Defaults to `0`. */
    desired_capacity?:      any;
    /** (Optional) The date and time for the recurring schedule to end, in UTC with the format `"YYYY-MM-DDThh:mm:ssZ"` (e.g. `"2021-06-01T00:00:00Z"`). */
    end_time?:              any;
    /** (Optional) The maximum size of the Auto Scaling group. Set to `-1` if you don't want to change the maximum size at the scheduled time. Defaults to `0`. */
    max_size?:              any;
    /** (Optional) The minimum size of the Auto Scaling group. Set to `-1` if you don't want to change the minimum size at the scheduled time. Defaults to `0`. */
    min_size?:              any;
    /** (Optional) The recurring schedule for this action specified using the Unix cron syntax format. */
    recurrence?:            any;
    /** (Optional) The date and time for the recurring schedule to start, in UTC with the format `"YYYY-MM-DDThh:mm:ssZ"` (e.g. `"2021-06-01T00:00:00Z"`). */
    start_time?:            any;
    /** (Optional)  Specifies the time zone for a cron expression. Valid values are the canonical names of the IANA time zones (such as `Etc/GMT+9` or `Pacific/Tahiti`). */
    time_zone?:             any;
}