export interface InspectorAssessmentTemplate {
    resource: Resource[];
}

export interface Resource {
    inspector_assessment_template: InspectorAssessmentTemplateClass;
}

export interface InspectorAssessmentTemplateClass {
    /** (Required) The name of the assessment template. */
    name:                any;
    /** (Required) The assessment target ARN to attach the template to. */
    target_arn:          any;
    /** (Required) The duration of the inspector run. */
    duration:            any;
    /** (Required) The rules to be used during the run. */
    rules_package_arns:  any;
    /** (Optional) A block that enables sending notifications about a specified assessment template event to a designated SNS topic. See [Event Subscriptions](#event-subscriptions) for details. */
    event_subscription?: any;
    /** (Optional) Key-value map of tags for the Inspector assessment template. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
    /** (Required) The event for which you want to receive SNS notifications. Valid values are `ASSESSMENT_RUN_STARTED`, `ASSESSMENT_RUN_COMPLETED`, `ASSESSMENT_RUN_STATE_CHANGED`, and `FINDING_REPORTED`. */
    event:               any;
    /** (Required) The ARN of the SNS topic to which notifications are sent. */
    topic_arn:           any;
}