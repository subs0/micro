export interface ChimeVoiceConnector {
    resource: Resource[];
}

export interface Resource {
    chime_voice_connector: ChimeVoiceConnectorClass;
}

export interface ChimeVoiceConnectorClass {
    /** (Required) The name of the Amazon Chime Voice Connector. */
    name:               any;
    /** (Required) When enabled, requires encryption for the Amazon Chime Voice Connector. */
    require_encryption: any;
    /** (Optional) The AWS Region in which the Amazon Chime Voice Connector is created. Default value: `us-east-1` */
    aws_region?:        any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
}