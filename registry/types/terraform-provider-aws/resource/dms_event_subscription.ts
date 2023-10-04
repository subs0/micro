export interface DmsEventSubscription {
    resource: Resource[];
}

export interface Resource {
    dms_event_subscription: DmsEventSubscriptionClass;
}

export interface DmsEventSubscriptionClass {
    /** (Required) Name of event subscription. */
    name:              any;
    /** (Optional, Default: true) Whether the event subscription should be enabled. */
    enabled?:          any;
    /** (Optional) List of event categories to listen for, see `DescribeEventCategories` for a canonical list. */
    event_categories?: any;
    /** (Optional, Default: all events) Type of source for events. Valid values: `replication-instance` or `replication-task` */
    source_type?:      any;
    /** (Required) Ids of sources to listen to. */
    source_ids:        any;
    /** (Required) SNS topic arn to send events on. */
    sns_topic_arn:     any;
    /** (Optional) Map of resource tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
}