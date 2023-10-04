export interface ChimeVoiceConnectorLogging {
    resource: Resource[];
}

export interface Resource {
    chime_voice_connector_logging: ChimeVoiceConnectorLoggingClass;
}

export interface ChimeVoiceConnectorLoggingClass {
    /** (Required) The Amazon Chime Voice Connector ID. */
    voice_connector_id:        any;
    /** (Optional) When true, enables SIP message logs for sending to Amazon CloudWatch Logs. */
    enable_sip_logs?:          any;
    /** (Optional) When true, enables logging of detailed media metrics for Voice Connectors to Amazon CloudWatch logs. */
    enable_media_metric_logs?: any;
}