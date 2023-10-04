export interface ChimeVoiceConnectorTerminationCredentials {
    resource: Resource[];
}

export interface Resource {
    chime_voice_connector_termination_credentials: ChimeVoiceConnectorTerminationCredentialsClass;
}

export interface ChimeVoiceConnectorTerminationCredentialsClass {
    /** (Required) Amazon Chime Voice Connector ID. */
    voice_connector_id: any;
    /** (Required) List of termination SIP credentials. */
    credentials:        any;
    /** (Required) RFC2617 compliant username associated with the SIP credentials. */
    username:           any;
    /** (Required) RFC2617 compliant password associated with the SIP credentials. */
    password:           any;
}