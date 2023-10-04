export interface ApprunnerAutoScalingConfigurationVersion {
    resource: Resource[];
}

export interface Resource {
    apprunner_auto_scaling_configuration_version: ApprunnerAutoScalingConfigurationVersionClass;
}

export interface ApprunnerAutoScalingConfigurationVersionClass {
    /** (Required, Forces new resource) Name of the auto scaling configuration. */
    auto_scaling_configuration_name?: any;
    /** (Optional, Forces new resource) Maximal number of concurrent requests that you want an instance to process. When the number of concurrent requests goes over this limit, App Runner scales up your service. */
    max_concurrency?:                 any;
    /** (Optional, Forces new resource) Maximal number of instances that App Runner provisions for your service. */
    max_size?:                        any;
    /** (Optional, Forces new resource) Minimal number of instances that App Runner provisions for your service. */
    min_size?:                        any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
}