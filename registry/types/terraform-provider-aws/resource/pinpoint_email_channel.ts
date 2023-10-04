export interface PinpointEmailChannel {
    resource: Resource[];
}

export interface Resource {
    pinpoint_email_channel: PinpointEmailChannelClass;
}

export interface PinpointEmailChannelClass {
    /** (Required) The application ID. */
    application_id:     any;
    /** (Optional) Whether the channel is enabled or disabled. Defaults to `true`. */
    enabled?:           any;
    /** (Optional) The ARN of the Amazon SES configuration set that you want to apply to messages that you send through the channel. */
    configuration_set?: any;
    /** (Required) The email address used to send emails from. You can use email only (`user@example.com`) or friendly address (`User <user@example.com>`). This field comply with [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt). */
    from_address:       any;
    /** (Required) The ARN of an identity verified with SES. */
    identity:           any;
    /** (Optional) The ARN of an IAM Role used to submit events to Mobile Analytics' event ingestion service. */
    role_arn?:          any;
}