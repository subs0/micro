export interface CognitoUserPoolClient {
    resource: Resource[];
}

export interface Resource {
    cognito_user_pool_client: CognitoUserPoolClientClass;
}

export interface CognitoUserPoolClientClass {
    /** (Required) Name of the application client. */
    name:                                           any;
    /** (Required) User pool the client belongs to. */
    user_pool_id:                                   any;
    /** (Optional) Time limit, between 5 minutes and 1 day, after which the access token is no longer valid and cannot be used. */
    access_token_validity?:                         any;
    /** (Optional) Whether the client is allowed to follow the OAuth protocol when interacting with Cognito user pools. */
    allowed_oauth_flows_user_pool_client?:          any;
    /** (Optional) List of allowed OAuth flows (code, implicit, client_credentials). */
    allowed_oauth_flows?:                           any;
    /** (Optional) List of allowed OAuth scopes (phone, email, openid, profile, and aws.cognito.signin.user.admin). */
    allowed_oauth_scopes?:                          any;
    analytics_configuration?:                       AnalyticsConfiguration;
    /** (Optional) Amazon Cognito creates a session token for each API request in an authentication flow. AuthSessionValidity is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires. Valid values between `3` and `15`. Default value is `3`. */
    auth_session_validity?:                         any;
    /** (Optional) List of allowed callback URLs for the identity providers. */
    callback_urls?:                                 any;
    /** (Optional) Default redirect URI. Must be in the list of callback URLs. */
    default_redirect_uri?:                          any;
    /** (Optional) Enables or disables token revocation. */
    enable_token_revocation?:                       any;
    /** (Optional) Activates the propagation of additional user context data. */
    enable_propagate_additional_user_context_data?: any;
    /** (Optional) List of authentication flows (ADMIN_NO_SRP_AUTH, CUSTOM_AUTH_FLOW_ONLY, USER_PASSWORD_AUTH, ALLOW_ADMIN_USER_PASSWORD_AUTH, ALLOW_CUSTOM_AUTH, ALLOW_USER_PASSWORD_AUTH, ALLOW_USER_SRP_AUTH, ALLOW_REFRESH_TOKEN_AUTH). */
    explicit_auth_flows?:                           any;
    /** (Optional) Should an application secret be generated. */
    generate_secret?:                               any;
    /** (Optional) Time limit, between 5 minutes and 1 day, after which the ID token is no longer valid and cannot be used. */
    id_token_validity?:                             any;
    /** (Optional) List of allowed logout URLs for the identity providers. */
    logout_urls?:                                   any;
    /** (Optional) Choose which errors and responses are returned by Cognito APIs during authentication, account confirmation, and password recovery when the user does not exist in the user pool. When set to `ENABLED` and the user does not exist, authentication returns an error indicating either the username or password was incorrect, and account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to `LEGACY`, those APIs will return a `UserNotFoundException` exception if the user does not exist in the user pool. */
    prevent_user_existence_errors?:                 any;
    /** (Optional) List of user pool attributes the application client can read from. */
    read_attributes?:                               any;
    /** (Optional) Time limit, between 60 minutes and 10 years, after which the refresh token is no longer valid and cannot be used. */
    refresh_token_validity?:                        any;
    /** (Optional) List of provider names for the identity providers that are supported on this client. Uses the `provider_name` attribute of `aws_cognito_identity_provider` resource(s), or the equivalent string(s). */
    supported_identity_providers?:                  any;
    token_validity_units?:                          TokenValidityUnits;
    /** (Optional) List of user pool attributes the application client can write to. */
    write_attributes?:                              any;
}

export interface AnalyticsConfiguration {
    /** (Optional) Application ARN for an Amazon Pinpoint application. Conflicts with `external_id` and `role_arn`. */
    application_arn: any;
    /** (Optional) Application ID for an Amazon Pinpoint application. */
    application_id:  any;
    /** (Optional) ID for the Analytics Configuration. Conflicts with `application_arn`. */
    external_id:     any;
    /** (Optional) ARN of an IAM role that authorizes Amazon Cognito to publish events to Amazon Pinpoint analytics. Conflicts with `application_arn`. */
    role_arn:        any;
}

export interface TokenValidityUnits {
    /** (Optional) Time unit in for the value in `access_token_validity`, defaults to `hours`. */
    access_token:  any;
    /** (Optional) Time unit in for the value in `id_token_validity`, defaults to `hours`. */
    id_token:      any;
    /** (Optional) Time unit in for the value in `refresh_token_validity`, defaults to `days`. */
    refresh_token: any;
}