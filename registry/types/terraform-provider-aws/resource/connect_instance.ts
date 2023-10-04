export interface ConnectInstance {
    resource: Resource[];
}

export interface Resource {
    connect_instance: ConnectInstanceClass;
}

export interface ConnectInstanceClass {
    /** (Optional) Specifies whether auto resolve best voices is enabled. Defaults to `true`. */
    auto_resolve_best_voices_enabled?: any;
    /** (Optional) Specifies whether contact flow logs are enabled. Defaults to `false`. */
    contact_flow_logs_enabled?:        any;
    /** (Optional) Specifies whether contact lens is enabled. Defaults to `true`. */
    contact_lens_enabled?:             any;
    /** (Optional) The identifier for the directory if identity_management_type is `EXISTING_DIRECTORY`. */
    directory_id?:                     any;
    /** (Optional) Specifies whether early media for outbound calls is enabled . Defaults to `true` if outbound calls is enabled. */
    early_media_enabled?:              any;
    /** (Required) Specifies the identity management type attached to the instance. Allowed Values are: `SAML`, `CONNECT_MANAGED`, `EXISTING_DIRECTORY`. */
    identity_management_type:          any;
    /** (Required) Specifies whether inbound calls are enabled. */
    inbound_calls_enabled:             any;
    /** (Optional) Specifies the name of the instance. Required if `directory_id` not specified. */
    instance_alias?:                   any;
    /** (Optional) Specifies whether multi-party calls/conference is enabled. Defaults to `false`. */
    multi_party_conference_enabled?:   any;
    /** (Required) Specifies whether outbound calls are enabled. */
    outbound_calls_enabled:            any;
    /** (Optional) Whether use custom tts voices is enabled. Defaults to `false` --> */
    use_custom_tts_voices?:            any;
}