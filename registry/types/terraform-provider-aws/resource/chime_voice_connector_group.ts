export interface ChimeVoiceConnectorGroup {
    resource: Resource[];
}

export interface Resource {
    chime_voice_connector_group: ChimeVoiceConnectorGroupClass;
}

export interface ChimeVoiceConnectorGroupClass {
    /** (Required) The name of the Amazon Chime Voice Connector group. */
    name:               any;
    /** (Optional) The Amazon Chime Voice Connectors to route inbound calls to. */
    connector?:         any;
    /** (Required) The Amazon Chime Voice Connector ID. */
    voice_connector_id: any;
    /** (Required) The priority associated with the Amazon Chime Voice Connector, with 1 being the highest priority. Higher priority Amazon Chime Voice Connectors are attempted first. */
    priority:           any;
}