export interface PinpointAdmChannel {
    resource: Resource[];
}

export interface Resource {
    pinpoint_adm_channel: PinpointAdmChannelClass;
}

export interface PinpointAdmChannelClass {
    /** (Required) The application ID. */
    application_id: any;
    /** (Required) Client ID (part of OAuth Credentials) obtained via Amazon Developer Account. */
    client_id:      any;
    /** (Required) Client Secret (part of OAuth Credentials) obtained via Amazon Developer Account. */
    client_secret:  any;
    /** (Optional) Specifies whether to enable the channel. Defaults to `true`. */
    enabled?:       any;
}