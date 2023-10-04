export interface ChimeVoiceConnectorStreaming {
    resource: Resource[];
}

export interface Resource {
    chime_voice_connector_streaming: ChimeVoiceConnectorStreamingClass;
}

export interface ChimeVoiceConnectorStreamingClass {
    /** (Required) The Amazon Chime Voice Connector ID. */
    voice_connector_id:              any;
    /** (Optional) The streaming notification targets. Valid Values: `EventBridge | SNS | SQS` */
    streaming_notification_targets?: any;
    media_insights_configuration?:   MediaInsightsConfiguration;
}

export interface MediaInsightsConfiguration {
    /** (Optional) When `true`, the media insights configuration is not enabled. Defaults to `false`. */
    disabled:          any;
    /** (Optional) The media insights configuration that will be invoked by the Voice Connector. */
    configuration_arn: any;
}