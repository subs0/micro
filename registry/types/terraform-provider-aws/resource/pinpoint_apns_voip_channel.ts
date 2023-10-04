export interface PinpointApnsVoipChannel {
    resource: Resource[];
}

export interface Resource {
    pinpoint_apns_voip_channel: PinpointApnsVoipChannelClass;
}

export interface PinpointApnsVoipChannelClass {
    /** (Required) The application ID. */
    application_id:                 any;
    /** (Optional) Whether the channel is enabled or disabled. Defaults to `true`. */
    enabled?:                       any;
    /** (Optional) The default authentication method used for APNs. */
    default_authentication_method?: any;
    /** (Required) The pem encoded TLS Certificate from Apple. */
    certificate:                    any;
    /** (Required) The Certificate Private Key file (ie. `.key` file). */
    private_key:                    any;
    /** (Required) The ID assigned to your iOS app. To find this value, choose Certificates, IDs & Profiles, choose App IDs in the Identifiers section, and choose your app. */
    bundle_id:                      any;
    /** (Required) The ID assigned to your Apple developer account team. This value is provided on the Membership page. */
    team_id:                        any;
    /** (Required) The `.p8` file that you download from your Apple developer account when you create an authentication key. */
    token_key:                      any;
    /** (Required) The ID assigned to your signing key. To find this value, choose Certificates, IDs & Profiles, and choose your key in the Keys section. */
    token_key_id:                   any;
}