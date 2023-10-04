export interface MqConfiguration {
    resource: Resource[];
}

export interface Resource {
    mq_configuration: MqConfigurationClass;
}

export interface MqConfigurationClass {
    /** (Required) Broker configuration in XML format for `ActiveMQ` or [Cuttlefish](https://github.com/Kyorai/cuttlefish) format for `RabbitMQ`. See [official docs](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/amazon-mq-broker-configuration-parameters.html) for supported parameters and format of the XML. */
    data:                     any;
    /** (Required) Type of broker engine. Valid values are `ActiveMQ` and `RabbitMQ`. */
    engine_type:              any;
    /** (Required) Version of the broker engine. */
    engine_version:           any;
    /** (Required) Name of the configuration. */
    name:                     any;
    /** (Optional) Authentication strategy associated with the configuration. Valid values are `simple` and `ldap`. `ldap` is not supported for `engine_type` `RabbitMQ`. */
    authentication_strategy?: any;
    /** (Optional) Description of the configuration. */
    description?:             any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                    any;
}