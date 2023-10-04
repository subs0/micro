export interface DocdbEventSubscription {
    resource: Resource[];
}

export interface Resource {
    docdb_event_subscription: DocdbEventSubscriptionClass;
}

export interface DocdbEventSubscriptionClass {
    /** (Optional) The name of the DocumentDB event subscription. By default generated by Terraform. */
    name?:             any;
    /** (Optional) The name of the DocumentDB event subscription. Conflicts with `name`. */
    name_prefix?:      any;
    /** (Required) The SNS topic to send events to. */
    sns_topic:         any;
    /** (Optional) A list of identifiers of the event sources for which events will be returned. If not specified, then all sources are included in the response. If specified, a source_type must also be specified. */
    source_ids?:       any;
    /** (Optional) The type of source that will be generating the events. Valid options are `db-instance`, `db-cluster`, `db-parameter-group`, `db-security-group`,` db-cluster-snapshot`. If not set, all sources will be subscribed to. */
    source_type?:      any;
    /** (Optional) A list of event categories for a SourceType that you want to subscribe to. See https://docs.aws.amazon.com/documentdb/latest/developerguide/API_Event.html or run `aws docdb describe-event-categories`. */
    event_categories?: any;
    /** (Optional) A boolean flag to enable/disable the subscription. Defaults to true. */
    enabled?:          any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
}