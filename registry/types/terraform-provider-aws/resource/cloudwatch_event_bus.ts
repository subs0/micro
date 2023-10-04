export interface CloudwatchEventBus {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_event_bus: CloudwatchEventBusClass;
}

export interface CloudwatchEventBusClass {
    /** (Required) The name of the new event bus. The names of custom event buses can't contain the / character. To create a partner event bus, ensure the `name` matches the `event_source_name`. */
    name:  any;
    /** (Optional)  A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?: any;
}