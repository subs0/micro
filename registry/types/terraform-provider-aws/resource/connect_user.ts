export interface ConnectUser {
    resource: Resource[];
}

export interface Resource {
    connect_user: ConnectUserClass;
}

export interface ConnectUserClass {
    /** (Optional) The identifier of the user account in the directory used for identity management. If Amazon Connect cannot access the directory, you can specify this identifier to authenticate users. If you include the identifier, we assume that Amazon Connect cannot access the directory. Otherwise, the identity information is used to authenticate users from your directory. This parameter is required if you are using an existing directory for identity management in Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for identity management and include this parameter, an error is returned. */
    directory_user_id?:             any;
    /** (Optional) The identifier of the hierarchy group for the user. */
    hierarchy_group_id?:            any;
    /** (Optional) A block that contains information about the identity of the user. Documented below. */
    identity_info?:                 any;
    /** (Required) Specifies the identifier of the hosting Amazon Connect Instance. */
    instance_id:                    any;
    /** (Required) The user name for the account. For instances not using SAML for identity management, the user name can include up to 20 characters. If you are using SAML for identity management, the user name can include up to 64 characters from `[a-zA-Z0-9_-.\@]+`. */
    name:                           any;
    /** (Optional) The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password. */
    password?:                      any;
    /** (Required) A block that contains information about the phone settings for the user. Documented below. */
    phone_config:                   any;
    /** (Required) The identifier of the routing profile for the user. */
    routing_profile_id:             any;
    /** (Required) A list of identifiers for the security profiles for the user. Specify a minimum of 1 and maximum of 10 security profile ids. For more information, see [Best Practices for Security Profiles](https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-best-practices.html) in the Amazon Connect Administrator Guide. */
    security_profile_ids:           any;
    /** (Optional) Tags to apply to the user. If configured with a provider */
    tags?:                          any;
    /** (Optional) The email address. If you are using SAML for identity management and include this parameter, an error is returned. Note that updates to the `email` is supported. From the [UpdateUserIdentityInfo API documentation](https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserIdentityInfo.html) it is strongly recommended to limit who has the ability to invoke `UpdateUserIdentityInfo`. Someone with that ability can change the login credentials of other users by changing their email address. This poses a security risk to your organization. They can change the email address of a user to the attacker's email address, and then reset the password through email. For more information, see [Best Practices for Security Profiles](https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-best-practices.html) in the Amazon Connect Administrator Guide. */
    email?:                         any;
    /** (Optional) The first name. This is required if you are using Amazon Connect or SAML for identity management. Minimum length of 1. Maximum length of 100. */
    first_name?:                    any;
    /** (Optional) The last name. This is required if you are using Amazon Connect or SAML for identity management. Minimum length of 1. Maximum length of 100. */
    last_name?:                     any;
    /** (Optional) The After Call Work (ACW) timeout setting, in seconds. Minimum value of 0. */
    after_contact_work_time_limit?: any;
    /** (Optional) When Auto-Accept Call is enabled for an available agent, the agent connects to contacts automatically. */
    auto_accept?:                   any;
    /** (Optional) The phone number for the user's desk phone. Required if `phone_type` is set as `DESK_PHONE`. */
    desk_phone_number?:             any;
    /** (Required) The phone type. Valid values are `DESK_PHONE` and `SOFT_PHONE`. */
    phone_type:                     any;
}