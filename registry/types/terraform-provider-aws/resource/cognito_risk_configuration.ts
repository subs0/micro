export interface CognitoRiskConfiguration {
    resource: Resource[];
}

export interface Resource {
    cognito_risk_configuration: CognitoRiskConfigurationClass;
}

export interface CognitoRiskConfigurationClass {
    /** (Required) The user pool ID. */
    user_pool_id:                                any;
    /** (Optional) The app client ID. When the client ID is not provided, the same risk configuration is applied to all the clients in the User Pool. */
    client_id?:                                  any;
    account_takeover_risk_configuration?:        AccountTakeoverRiskConfiguration;
    compromised_credentials_risk_configuration?: CompromisedCredentialsRiskConfiguration;
    risk_exception_configuration?:               RiskExceptionConfiguration;
}

export interface AccountTakeoverRiskConfiguration {
    /** (Required) The notify configuration used to construct email notifications. See details below. */
    notify_configuration: any;
    /** (Required) The compromised credentials risk configuration actions. See details below. */
    actions:              any;
    /** (Optional) Email template used when a detected risk event is blocked. See notify email type below. */
    block_email:          any;
    /** (Optional) The multi-factor authentication (MFA) email template used when MFA is challenged as part of a detected risk. See notify email type below. */
    mfa_email:            any;
    /** (Optional) The email template used when a detected risk event is allowed. See notify email type below. */
    no_action_email:      any;
    /** (Optional) The email address that is sending the email. The address must be either individually verified with Amazon Simple Email Service, or from a domain that has been verified with Amazon SES. */
    from:                 any;
    /** (Optional) The destination to which the receiver of an email should reply to. */
    reply_to:             any;
    /** (Required) The Amazon Resource Name (ARN) of the identity that is associated with the sending authorization policy. This identity permits Amazon Cognito to send for the email address specified in the From parameter. */
    source_arn:           any;
    /** (Required) The email HTML body. */
    html_body:            any;
    /** (Required) The email subject. */
    subject:              any;
    /** (Required) The email text body. */
    text_body:            any;
    /** (Optional) Action to take for a high risk. See action block below. */
    high_action:          any;
    /** (Optional) Action to take for a low risk. See action block below. */
    low_action:           any;
    /** (Optional) Action to take for a medium risk. See action block below. */
    medium_action:        any;
    /** (Optional) The event action. Valid values are `BLOCK` or `NO_ACTION`. */
    event_action:         any;
    /** (Required) Whether to send a notification. */
    notify:               any;
}

export interface CompromisedCredentialsRiskConfiguration {
    /** (Optional) Perform the action for these events. The default is to perform all events if no event filter is specified. Valid values are `SIGN_IN`, `PASSWORD_CHANGE`, and `SIGN_UP`. */
    event_filter: any;
    /** (Required) The compromised credentials risk configuration actions. See details below. */
    actions:      any;
    /** (Optional) The event action. Valid values are `BLOCK` or `NO_ACTION`. */
    event_action: any;
}

export interface RiskExceptionConfiguration {
    /** (Optional) Overrides the risk decision to always block the pre-authentication requests. */
    blocked_ip_range_list: any;
    /** (Optional) Risk detection isn't performed on the IP addresses in this range list. */
    skipped_ip_range_list: any;
}