export interface ChimeVoiceConnectorTermination {
    resource: Resource[];
}

export interface Resource {
    chime_voice_connector_termination: ChimeVoiceConnectorTerminationClass;
}

export interface ChimeVoiceConnectorTerminationClass {
    /** (Required) The Amazon Chime Voice Connector ID. */
    voice_connector_id:    any;
    /** (Required) The IP addresses allowed to make calls, in CIDR format. */
    cidr_allow_list:       any;
    /** (Required) The countries to which calls are allowed, in ISO 3166-1 alpha-2 format. */
    calling_regions:       any;
    /** (Optional) When termination settings are disabled, outbound calls can not be made. */
    disabled?:             any;
    /** (Optional) The default caller ID phone number. */
    default_phone_number?: any;
    /** (Optional) The limit on calls per second. Max value based on account service quota. Default value of `1`. */
    cps_limit?:            any;
}