export interface CloudwatchCompositeAlarm {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_composite_alarm: CloudwatchCompositeAlarmClass;
}

export interface CloudwatchCompositeAlarmClass {
    /** (Optional, Forces new resource) Indicates whether actions should be executed during any changes to the alarm state of the composite alarm. Defaults to `true`. */
    actions_enabled?:           any;
    /** (Optional) Actions will be suppressed if the suppressor alarm is in the ALARM state. */
    actions_suppressor?:        any;
    /** (Required) Can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm. */
    alarm:                      any;
    /** (Required) The maximum time in seconds that the composite alarm waits after suppressor alarm goes out of the `ALARM` state. After this time, the composite alarm performs its actions. */
    extension_period:           any;
    /** (Required) The maximum time in seconds that the composite alarm waits for the suppressor alarm to go into the `ALARM` state. After this time, the composite alarm performs its actions. */
    wait_period:                any;
    /** (Optional) The set of actions to execute when this alarm transitions to the `ALARM` state from any other state. Each action is specified as an ARN. Up to 5 actions are allowed. */
    alarm_actions?:             any;
    /** (Optional) The description for the composite alarm. */
    alarm_description?:         any;
    /** (Required) The name for the composite alarm. This name must be unique within the region. */
    alarm_name:                 any;
    /** (Required) An expression that specifies which other alarms are to be evaluated to determine this composite alarm's state. For syntax, see [Creating a Composite Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html). The maximum length is 10240 characters. */
    alarm_rule:                 any;
    /** (Optional) The set of actions to execute when this alarm transitions to the `INSUFFICIENT_DATA` state from any other state. Each action is specified as an ARN. Up to 5 actions are allowed. */
    insufficient_data_actions?: any;
    /** (Optional) The set of actions to execute when this alarm transitions to an `OK` state from any other state. Each action is specified as an ARN. Up to 5 actions are allowed. */
    ok_actions?:                any;
    /** (Optional) A map of tags to associate with the alarm. Up to 50 tags are allowed. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
}