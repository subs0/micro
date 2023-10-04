export interface ChimeVoiceConnectorOrigination {
    resource: Resource[];
}

export interface Resource {
    chime_voice_connector_origination: ChimeVoiceConnectorOriginationClass;
}

export interface ChimeVoiceConnectorOriginationClass {
    /** (Required) The Amazon Chime Voice Connector ID. */
    voice_connector_id: any;
    /** (Required) Set of call distribution properties defined for your SIP hosts. See [route](#route) below for more details. Minimum of 1. Maximum of 20. */
    route:              any;
    /** (Optional) When origination settings are disabled, inbound calls are not enabled for your Amazon Chime Voice Connector. */
    disabled?:          any;
    /** (Required) The FQDN or IP address to contact for origination traffic. */
    host:               any;
    /** (Required) The designated origination route port. Defaults to `5060`. */
    port:               any;
    /** (Required) The priority associated with the host, with 1 being the highest priority. Higher priority hosts are attempted first. */
    priority:           any;
    /** (Required) The protocol to use for the origination route. Encryption-enabled Amazon Chime Voice Connectors use TCP protocol by default. */
    protocol:           any;
    /** (Required) The weight associated with the host. If hosts are equal in priority, calls are redistributed among them based on their relative weight. */
    weight:             any;
}