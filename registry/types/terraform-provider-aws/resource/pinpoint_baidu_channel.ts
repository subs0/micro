export interface PinpointBaiduChannel {
    resource: Resource[];
}

export interface Resource {
    pinpoint_baidu_channel: PinpointBaiduChannelClass;
}

export interface PinpointBaiduChannelClass {
    /** (Required) The application ID. */
    application_id: any;
    /** (Optional) Specifies whether to enable the channel. Defaults to `true`. */
    enabled?:       any;
    /** (Required) Platform credential API key from Baidu. */
    api_key:        any;
    /** (Required) Platform credential Secret key from Baidu. */
    secret_key:     any;
}