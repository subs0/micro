export interface EmrserverlessApplication {
    resource: Resource[];
}

export interface Resource {
    emrserverless_application: EmrserverlessApplicationClass;
}

export interface EmrserverlessApplicationClass {
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                    any;
    /** (Optional) Enables the application to automatically stop after a certain amount of time being idle. Defaults to `true`. */
    enabled?:                 any;
    /** (Optional) The amount of idle time in minutes after which your application will automatically stop. Defaults to `15` minutes. */
    idle_timeout_minutes?:    any;
    /** (Optional) The initial capacity configuration per worker. */
    initial_capacity_config?: any;
    /** (Required) The worker type for an analytics framework. For Spark applications, the key can either be set to `Driver` or `Executor`. For Hive applications, it can be set to `HiveDriver` or `TezTask`. */
    initial_capacity_type:    any;
    /** (Required) The CPU requirements for every worker instance of the worker type. */
    cpu:                      any;
    /** (Optional) The disk requirements for every worker instance of the worker type. */
    disk?:                    any;
    /** (Required) The memory requirements for every worker instance of the worker type. */
    memory:                   any;
    /** (Optional) The array of security group Ids for customer VPC connectivity. */
    security_group_ids?:      any;
    /** (Optional) The array of subnet Ids for customer VPC connectivity. */
    subnet_ids?:              any;
    /** (Required) The image URI. */
    image_uri:                any;
    /** (Optional) The resource configuration of the initial capacity configuration. */
    worker_configuration?:    any;
    /** (Required) The number of workers in the initial capacity configuration. */
    worker_count:             any;
}