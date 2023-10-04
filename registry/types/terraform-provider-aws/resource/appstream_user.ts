export interface AppstreamUser {
    resource: Resource[];
}

export interface Resource {
    appstream_user: AppstreamUserClass;
}

export interface AppstreamUserClass {
    /** (Required) Authentication type for the user. You must specify USERPOOL. Valid values: `API`, `SAML`, `USERPOOL` */
    authentication_type:      any;
    /** (Required) Email address of the user. */
    user_name:                any;
    /** (Optional) Whether the user in the user pool is enabled. */
    enabled?:                 any;
    /** (Optional) First name, or given name, of the user. */
    first_name?:              any;
    /** (Optional) Last name, or surname, of the user. */
    last_name?:               any;
    /** (Optional) Send an email notification. */
    send_email_notification?: any;
}