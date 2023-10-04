export interface ApprunnerObservabilityConfiguration {
    resource: Resource[];
}

export interface Resource {
    apprunner_observability_configuration: ApprunnerObservabilityConfigurationClass;
}

export interface ApprunnerObservabilityConfigurationClass {
    /** (Required, Forces new resource) Name of the observability configuration. */
    observability_configuration_name?: any;
    /** (Optional) Configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing. See [Trace Configuration](#trace-configuration) below for more details. */
    trace_configuration?:              any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                             any;
    /** (Required) Implementation provider chosen for tracing App Runner services. Valid values: `AWSXRAY`. */
    vendor:                            any;
}