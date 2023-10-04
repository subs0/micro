export interface RedshiftEventSubscription {
    resource: Resource[];
}

export interface Resource {
    redshift_event_subscription: RedshiftEventSubscriptionClass;
}

export interface RedshiftEventSubscriptionClass {
    /** (Required) The name of the Redshift event subscription. */
    name:              any;
    /** (Required) The ARN of the SNS topic to send events to. */
    sns_topic_arn:     any;
    /** (Optional) A list of identifiers of the event sources for which events will be returned. If not specified, then all sources are included in the response. If specified, a `source_type` must also be specified. */
    source_ids?:       any;
    /** (Optional) The type of source that will be generating the events. Valid options are `cluster`, `cluster-parameter-group`, `cluster-security-group`, `cluster-snapshot`, or `scheduled-action`. If not set, all sources will be subscribed to. */
    source_type?:      any;
    /** (Optional) The event severity to be published by the notification subscription. Valid options are `INFO` or `ERROR`. Default value of `INFO`. */
    severity?:         any;
    /** (Optional) A list of event categories for a SourceType that you want to subscribe to. See https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html or run `aws redshift describe-event-categories`. */
    event_categories?: any;
    /** (Optional) A boolean flag to enable/disable the subscription. Defaults to `true`. */
    enabled?:          any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
}