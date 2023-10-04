export interface CodestarnotificationsNotificationRule {
    resource: Resource[];
}

export interface Resource {
    codestarnotifications_notification_rule: CodestarnotificationsNotificationRuleClass;
}

export interface CodestarnotificationsNotificationRuleClass {
    /** (Required) The level of detail to include in the notifications for this resource. Possible values are `BASIC` and `FULL`. */
    detail_type:    any;
    /** (Required) A list of event types associated with this notification rule. */
    event_type_ids: any;
    /** (Required) The name of notification rule. */
    name:           any;
    /** (Required) The ARN of the resource to associate with the notification rule. */
    resource:       any;
    /** (Optional) The status of the notification rule. Possible values are `ENABLED` and `DISABLED`, default is `ENABLED`. */
    status?:        any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:          any;
    /** (Optional) Configuration blocks containing notification target information. Can be specified multiple times. At least one target must be specified on creation. */
    target?:        any;
    /** (Required) The ARN of notification rule target. For example, a SNS Topic ARN. */
    address:        any;
    /** (Optional) The type of the notification target. Default value is `SNS`. */
    type?:          any;
}