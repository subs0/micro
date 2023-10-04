export interface CloudwatchEventRule {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_event_rule: CloudwatchEventRuleClass;
}

export interface CloudwatchEventRuleClass {
    /** (Optional) The name of the rule. If omitted, Terraform will assign a random, unique name. Conflicts with `name_prefix`. */
    name?:                any;
    /** (Optional) Creates a unique name beginning with the specified prefix. Conflicts with `name`. **Note**: Due to the length of the generated suffix, must be 38 characters or less. */
    name_prefix?:         any;
    /** (Optional) The scheduling expression. For example, `cron(0 20 * * ? *)` or `rate(5 minutes)`. At least one of `schedule_expression` or `event_pattern` is required. Can only be used on the default event bus. For more information, refer to the AWS documentation [Schedule Expressions for Rules](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html). */
    schedule_expression?: any;
    /** (Optional) The name or ARN of the event bus to associate with this rule. */
    event_bus_name?:      any;
    /** (Optional) The event pattern described a JSON object. At least one of `schedule_expression` or `event_pattern` is required. See full documentation of [Events and Event Patterns in EventBridge](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) for details. */
    event_pattern?:       any;
    /** (Optional) The description of the rule. */
    description?:         any;
    /** (Optional) The Amazon Resource Name (ARN) associated with the role that is used for target invocation. */
    role_arn?:            any;
    /** (Optional) Whether the rule should be enabled (defaults to `true`). */
    is_enabled?:          any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
}