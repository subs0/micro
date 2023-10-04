export interface ElasticBeanstalkEnvironment {
    resource: Resource[];
}

export interface Resource {
    elastic_beanstalk_environment: ElasticBeanstalkEnvironmentClass;
}

export interface ElasticBeanstalkEnvironmentClass {
    /** (Required) A unique name for this Environment. This name is used */
    name:                    any;
    /** (Optional) Prefix to use for the fully qualified DNS name of */
    cname_prefix?:           any;
    /** (Optional) Short description of the Environment */
    description?:            any;
    /** (Optional) Elastic Beanstalk Environment tier. Valid values are `Worker` */
    tier?:                   any;
    /** (Default `20m`) The maximum */
    wait_for_ready_timeout?: any;
    /** (Optional) The name of the Elastic Beanstalk Application Version */
    version_label?:          any;
    /** (Optional) A set of tags to apply to the Environment. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                   any;
}