export interface AppintegrationsEventIntegration {
    resource: Resource[];
}

export interface Resource {
    appintegrations_event_integration: AppintegrationsEventIntegrationClass;
}

export interface AppintegrationsEventIntegrationClass {
    /** (Optional) Description of the Event Integration. */
    description?:    any;
    /** (Required) EventBridge bus. */
    eventbridge_bus: any;
    /** (Required) Block that defines the configuration information for the event filter. The Event Filter block is documented below. */
    event_filter:    any;
    /** (Required) Name of the Event Integration. */
    name:            any;
    /** (Optional) Tags to apply to the Event Integration. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
    /** (Required) Source of the events. */
    source:          any;
}