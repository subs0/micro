export interface PinpointSMSChannel {
    resource: Resource[];
}

export interface Resource {
    pinpoint_sms_channel: PinpointSMSChannelClass;
}

export interface PinpointSMSChannelClass {
    /** (Required) ID of the application. */
    application_id: any;
    /** (Optional) Whether the channel is enabled or disabled. By default, it is set to `true`. */
    enabled?:       any;
    /** (Optional) Identifier of the sender for your messages. */
    sender_id?:     any;
    /** (Optional) Short Code registered with the phone provider. */
    short_code?:    any;
}