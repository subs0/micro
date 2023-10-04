export interface CognitoManagedUserPoolClient {
    resource: Resource[];
}

export interface Resource {
    cognito_managed_user_pool_client: CognitoManagedUserPoolClientClass;
}

export interface CognitoManagedUserPoolClientClass {
    /** (Required) User pool that the client belongs to. */
    user_pool_id:                                   any;
    /** (Required, one of `name_pattern` or `name_prefix`) Regular expression that matches the name of the desired User Pool Client. It must only match one User Pool Client. */
    name_pattern?:                                  any;
    /** (Required, one of `name_prefix` or `name_pattern`) String that matches the beginning of the name of the desired User Pool Client. It must match only one User Pool Client. */
    name_prefix?:                                   any;
    /** (Optional) Time limit, between 5 minutes and 1 day, after which the access token is no longer valid and cannot be used. By default, the unit is hours. The unit can be overridden by a value in `token_validity_units.access_token`. */
    access_token_validity?:                         any;
    /** (Optional) Whether the client is allowed to use the OAuth protocol when interacting with Cognito user pools. */
    allowed_oauth_flows_user_pool_client?:          any;
    /** (Optional) List of allowed OAuth flows, including code, implicit, and client_credentials. */
    allowed_oauth_flows?:                           any;
    /** (Optional) List of allowed OAuth scopes, including phone, email, openid, profile, and aws.cognito.signin.user.admin. */
    allowed_oauth_scopes?:                          any;
    analytics_configuration?:                       AnalyticsConfiguration;
    /** (Optional) Duration, in minutes, of the session token created by Amazon Cognito for each API request in an authentication flow. The session token must be responded to by the native user of the user pool before it expires. Valid values for `auth_session_validity` are between `3` and `15`, with a default value of `3`. */
    auth_session_validity?:                         any;
    /** (Optional) List of allowed callback URLs for the identity providers. */
    callback_urls?:                                 any;
    /** (Optional) Default redirect URI and must be included in the list of callback URLs. */
    default_redirect_uri?:                          any;
    /** (Optional) Enables or disables token revocation. */
    enable_token_revocation?:                       any;
    /** (Optional) Enables the propagation of additional user context data. */
    enable_propagate_additional_user_context_data?: any;
    /** (Optional) List of authentication flows. The available options include ADMIN_NO_SRP_AUTH, CUSTOM_AUTH_FLOW_ONLY, USER_PASSWORD_AUTH, ALLOW_ADMIN_USER_PASSWORD_AUTH, ALLOW_CUSTOM_AUTH, ALLOW_USER_PASSWORD_AUTH, ALLOW_USER_SRP_AUTH, and ALLOW_REFRESH_TOKEN_AUTH. */
    explicit_auth_flows?:                           any;
    /** (Optional) Boolean flag indicating whether an application secret should be generated. */
    generate_secret?:                               any;
    /** (Optional) Time limit, between 5 minutes and 1 day, after which the ID token is no longer valid and cannot be used. By default, the unit is hours. The unit can be overridden by a value in `token_validity_units.id_token`. */
    id_token_validity?:                             any;
    /** (Optional) List of allowed logout URLs for the identity providers. */
    logout_urls?:                                   any;
    /** (Optional) Setting determines the errors and responses returned by Cognito APIs when a user does not exist in the user pool during authentication, account confirmation, and password recovery. */
    prevent_user_existence_errors?:                 any;
    /** (Optional) List of user pool attributes that the application client can read from. */
    read_attributes?:                               any;
    /** (Optional) Time limit, between 60 minutes and 10 years, after which the refresh token is no longer valid and cannot be used. By default, the unit is days. The unit can be overridden by a value in `token_validity_units.refresh_token`. */
    refresh_token_validity?:                        any;
    /** (Optional) List of provider names for the identity providers that are supported on this client. It uses the `provider_name` attribute of the `aws_cognito_identity_provider` resource(s), or the equivalent string(s). */
    supported_identity_providers?:                  any;
    token_validity_units?:                          TokenValidityUnits;
    /** (Optional) List of user pool attributes that the application client can write to. */
    write_attributes?:                              any;
}

export interface AnalyticsConfiguration {
    /** (Optional) Application ARN for an Amazon Pinpoint application. It conflicts with `external_id` and `role_arn`. */
    application_arn:  any;
    /** (Optional) Unique identifier for an Amazon Pinpoint application. */
    application_id:   any;
    /** (Optional) ID for the Analytics Configuration and conflicts with `application_arn`. */
    external_id:      any;
    /** (Optional) ARN of an IAM role that authorizes Amazon Cognito to publish events to Amazon Pinpoint analytics. It conflicts with `application_arn`. */
    role_arn:         any;
    /** (Optional) If `user_data_shared` is set to `true`, Amazon Cognito will include user data in the events it publishes to Amazon Pinpoint analytics. */
    user_data_shared: any;
}

export interface TokenValidityUnits {
    /** (Optional) Time unit for the value in `access_token_validity` and defaults to `hours`. */
    access_token:  any;
    /** (Optional) Time unit for the value in `id_token_validity`, and it defaults to `hours`. */
    id_token:      any;
    /** (Optional) Time unit for the value in `refresh_token_validity` and defaults to `days`. */
    refresh_token: any;
}