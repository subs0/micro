export interface PinpointGcmChannel {
    resource: Resource[];
}

export interface Resource {
    pinpoint_gcm_channel: PinpointGcmChannelClass;
}

export interface PinpointGcmChannelClass {
    /** (Required) The application ID. */
    application_id: any;
    /** (Required) Platform credential API key from Google. */
    api_key:        any;
    /** (Optional) Whether the channel is enabled or disabled. Defaults to `true`. */
    enabled?:       any;
}