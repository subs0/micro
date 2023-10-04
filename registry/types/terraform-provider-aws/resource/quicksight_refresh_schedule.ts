export interface QuicksightRefreshSchedule {
    resource: Resource[];
}

export interface Resource {
    quicksight_refresh_schedule: QuicksightRefreshScheduleClass;
}

export interface QuicksightRefreshScheduleClass {
    /** (Required, Forces new resource) The ID of the dataset. */
    data_set_id?:        any;
    /** (Required, Forces new resource) The ID of the refresh schedule. */
    schedule_id?:        any;
    schedule:            Schedule;
    /** (Optional, Forces new resource) AWS account ID. */
    aws_account_id?:     any;
    /** (Optional) The configuration of the [schedule frequency](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RefreshFrequency.html). See [schedule_frequency](#schedule_frequency). */
    schedule_frequency?: ScheduleFrequency;
    /** (Optional) The [refresh on entity](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ScheduleRefreshOnEntity.html) configuration for weekly or monthly schedules. See [refresh_on_day](#refresh_on_day). */
    refresh_on_day?:     RefreshOnDay;
}

export interface RefreshOnDay {
    /** (Optional) The day of the month that you want to schedule refresh on. */
    day_of_month: any;
    /** (Optional) The day of the week that you want to schedule a refresh on. Valid values are `SUNDAY`, `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY` and `SATURDAY`. */
    day_of_week:  any;
}

export interface Schedule {
    /** (Required) The type of refresh that the dataset undergoes. Valid values are `INCREMENTAL_REFRESH` and `FULL_REFRESH`. */
    refresh_type:        any;
    /** (Optional) The configuration of the [schedule frequency](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RefreshFrequency.html). See [schedule_frequency](#schedule_frequency). */
    schedule_frequency?: any;
}

export interface ScheduleFrequency {
    /** (Required) The interval between scheduled refreshes. Valid values are `MINUTE15`, `MINUTE30`, `HOURLY`, `DAILY`, `WEEKLY` and `MONTHLY`. */
    interval:        any;
    /** (Optional) The time of day that you want the dataset to refresh. This value is expressed in `HH:MM` format. This field is not required for schedules that refresh hourly. */
    time_of_the_day: any;
    /** (Optional) The timezone that you want the refresh schedule to use. */
    timezone:        any;
    /** (Optional) The [refresh on entity](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ScheduleRefreshOnEntity.html) configuration for weekly or monthly schedules. See [refresh_on_day](#refresh_on_day). */
    refresh_on_day:  any;
}