export interface MskConfiguration {
    resource: Resource[];
}

export interface Resource {
    msk_configuration: MskConfigurationClass;
}

export interface MskConfigurationClass {
    /** (Required) Contents of the server.properties file. Supported properties are documented in the [MSK Developer Guide](https://docs.aws.amazon.com/msk/latest/developerguide/msk-configuration-properties.html). */
    server_properties: any;
    /** (Required) List of Apache Kafka versions which can use this configuration. */
    kafka_versions:    any;
    /** (Required) Name of the configuration. */
    name:              any;
    /** (Optional) Description of the configuration. */
    description?:      any;
}