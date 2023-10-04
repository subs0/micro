export interface CognitoUserPool {
    resource: Resource[];
}

export interface Resource {
    cognito_user_pool: CognitoUserPoolClass;
}

export interface CognitoUserPoolClass {
    account_recovery_setting?:         AccountRecoverySetting;
    admin_create_user_config?:         AdminCreateUserConfig;
    /** (Optional) Attributes supported as an alias for this user pool. Valid values: `phone_number`, `email`, or `preferred_username`. Conflicts with `username_attributes`. */
    alias_attributes?:                 any;
    /** (Optional) Attributes to be auto-verified. Valid values: `email`, `phone_number`. */
    auto_verified_attributes?:         any;
    /** (Optional) When active, DeletionProtection prevents accidental deletion of your user pool. Before you can delete a user pool that you have protected against deletion, you must deactivate this feature. Valid values are `ACTIVE` and `INACTIVE`, Default value is `INACTIVE`. */
    deletion_protection?:              any;
    device_configuration?:             DeviceConfiguration;
    email_configuration?:              EmailConfiguration;
    /** (Optional) String representing the email verification message. Conflicts with `verification_message_template` configuration block `email_message` argument. */
    email_verification_message?:       any;
    /** (Optional) String representing the email verification subject. Conflicts with `verification_message_template` configuration block `email_subject` argument. */
    email_verification_subject?:       any;
    lambda_config?:                    LambdaConfig;
    /** (Optional) Multi-Factor Authentication (MFA) configuration for the User Pool. Defaults of `OFF`. Valid values are `OFF` (MFA Tokens are not required), `ON` (MFA is required for all users to sign in; requires at least one of `sms_configuration` or `software_token_mfa_configuration` to be configured), or `OPTIONAL` (MFA Will be required only for individual users who have MFA Enabled; requires at least one of `sms_configuration` or `software_token_mfa_configuration` to be configured). */
    mfa_configuration?:                any;
    password_policy?:                  PasswordPolicy;
    schema?:                           Schema;
    /** (Optional) String representing the SMS authentication message. The Message must contain the `{####}` placeholder, which will be replaced with the code. */
    sms_authentication_message?:       any;
    sms_configuration?:                SMSConfiguration;
    /** (Optional) String representing the SMS verification message. Conflicts with `verification_message_template` configuration block `sms_message` argument. */
    sms_verification_message?:         any;
    software_token_mfa_configuration?: SoftwareTokenMfaConfiguration;
    /** (Optional) Map of tags to assign to the User Pool. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                             any;
    user_attribute_update_settings?:   UserAttributeUpdateSettings;
    user_pool_add_ons?:                UserPoolAddOns;
    /** (Optional) Whether email addresses or phone numbers can be specified as usernames when a user signs up. Conflicts with `alias_attributes`. */
    username_attributes?:              any;
    username_configuration?:           UsernameConfiguration;
    verification_message_template?:    VerificationMessageTemplate;
}

export interface AccountRecoverySetting {
    /** (Optional) List of Account Recovery Options of the following structure: */
    recovery_mechanism: any;
    /** (Required) Name of the attribute. */
    name:               any;
    /** (Required) Positive integer specifying priority of a method with 1 being the highest priority. */
    priority:           any;
}

export interface AdminCreateUserConfig {
    /** (Optional) Set to True if only the administrator is allowed to create user profiles. Set to False if users can sign themselves up via an app. */
    allow_admin_create_user_only: any;
    /** (Optional) Invite message template structure. [Detailed below](#invite_message_template). */
    invite_message_template:      any;
    /** (Optional) Email message template. Must contain the `{####}` placeholder. Conflicts with `email_verification_message` argument. */
    email_message:                any;
    /** (Optional) Subject line for the email message template. Conflicts with `email_verification_subject` argument. */
    email_subject:                any;
    /** (Optional) SMS message template. Must contain the `{####}` placeholder. Conflicts with `sms_verification_message` argument. */
    sms_message:                  any;
}

export interface DeviceConfiguration {
    /** (Optional) Whether a challenge is required on a new device. Only applicable to a new device. */
    challenge_required_on_new_device:      any;
    /** (Optional) Whether a device is only remembered on user prompt. `false` equates to "Always" remember, `true` is "User Opt In," and not using a `device_configuration` block is "No." */
    device_only_remembered_on_user_prompt: any;
}

export interface EmailConfiguration {
    /** (Optional) Email configuration set name from SES. */
    configuration_set:      any;
    /** (Optional) Email delivery method to use. `COGNITO_DEFAULT` for the default email functionality built into Cognito or `DEVELOPER` to use your Amazon SES configuration. Required to be `DEVELOPER` if `from_email_address` is set. */
    email_sending_account:  any;
    /** (Optional) Sender’s email address or sender’s display name with their email address (e.g., `john@example.com`, `John Smith <john@example.com>` or `\"John Smith Ph.D.\" <john@example.com>`). Escaped double quotes are required around display names that contain certain characters as specified in [RFC 5322](https://tools.ietf.org/html/rfc5322). */
    from_email_address:     any;
    /** (Optional) REPLY-TO email address. */
    reply_to_email_address: any;
    /** (Optional) ARN of the SES verified email identity to use. Required if `email_sending_account` is set to `DEVELOPER`. */
    source_arn:             any;
}

export interface LambdaConfig {
    /** (Optional) ARN of the lambda creating an authentication challenge. */
    create_auth_challenge:          any;
    /** (Optional) Custom Message AWS Lambda trigger. */
    custom_message:                 any;
    /** (Optional) Defines the authentication challenge. */
    define_auth_challenge:          any;
    /** (Optional) Post-authentication AWS Lambda trigger. */
    post_authentication:            any;
    /** (Optional) Post-confirmation AWS Lambda trigger. */
    post_confirmation:              any;
    /** (Optional) Pre-authentication AWS Lambda trigger. */
    pre_authentication:             any;
    /** (Optional) Pre-registration AWS Lambda trigger. */
    pre_sign_up:                    any;
    /** (Optional) Allow to customize identity token claims before token generation. */
    pre_token_generation:           any;
    /** (Optional) User migration Lambda config type. */
    user_migration:                 any;
    /** (Optional) Verifies the authentication challenge response. */
    verify_auth_challenge_response: any;
    /** (Optional) The Amazon Resource Name of Key Management Service Customer master keys. Amazon Cognito uses the key to encrypt codes and temporary passwords sent to CustomEmailSender and CustomSMSSender. */
    kms_key_id:                     any;
    /** (Optional) A custom email sender AWS Lambda trigger. See [custom_email_sender](#custom_email_sender) Below. */
    custom_email_sender:            any;
    /** (Optional) A custom SMS sender AWS Lambda trigger. See [custom_sms_sender](#custom_sms_sender) Below. */
    custom_sms_sender:              any;
    /** (Required) The Lambda Amazon Resource Name of the Lambda function that Amazon Cognito triggers to send SMS notifications to users. */
    lambda_arn:                     any;
    /** (Required) The Lambda version represents the signature of the "request" attribute in the "event" information Amazon Cognito passes to your custom SMS Lambda function. The only supported value is `V1_0`. */
    lambda_version:                 any;
}

export interface PasswordPolicy {
    /** (Optional) Minimum length of the password policy that you have set. */
    minimum_length:                   any;
    /** (Optional) Whether you have required users to use at least one lowercase letter in their password. */
    require_lowercase:                any;
    /** (Optional) Whether you have required users to use at least one number in their password. */
    require_numbers:                  any;
    /** (Optional) Whether you have required users to use at least one symbol in their password. */
    require_symbols:                  any;
    /** (Optional) Whether you have required users to use at least one uppercase letter in their password. */
    require_uppercase:                any;
    /** (Optional) In the password policy you have set, refers to the number of days a temporary password is valid. If the user does not sign-in during this time, their password will need to be reset by an administrator. */
    temporary_password_validity_days: any;
}

export interface Schema {
    /** (Required) Attribute data type. Must be one of `Boolean`, `Number`, `String`, `DateTime`. */
    attribute_data_type:          any;
    /** (Optional) Whether the attribute type is developer only. */
    developer_only_attribute:     any;
    /** (Optional) Whether the attribute can be changed once it has been created. */
    mutable:                      any;
    /** (Required) Name of the attribute. */
    name:                         any;
    /** (Required when `attribute_data_type` is `Number`) Configuration block for the constraints for an attribute of the number type. [Detailed below](#number_attribute_constraints). */
    number_attribute_constraints: any;
    /** (Optional) Whether a user pool attribute is required. If the attribute is required and the user does not provide a value, registration or sign-in will fail. */
    required:                     any;
    any_attribute_constraints: string;
    /** (Optional) Maximum value of an attribute that is of the number data type. */
    max_value:                    any;
    /** (Optional) Minimum value of an attribute that is of the number data type. */
    min_value:                    any;
    /** (Optional) Maximum length of an attribute value of the string type. */
    max_length:                   any;
    /** (Optional) Minimum length of an attribute value of the string type. */
    min_length:                   any;
}

export interface SMSConfiguration {
    /** (Required) External ID used in IAM role trust relationships. For more information about using external IDs, see [How to Use an External ID When Granting Access to Your AWS Resources to a Third Party](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html). */
    external_id:    any;
    /** (Required) ARN of the Amazon SNS caller. This is usually the IAM role that you've given Cognito permission to assume. */
    sns_caller_arn: any;
    /** (Optional) The AWS Region to use with Amazon SNS integration. You can choose the same Region as your user pool, or a supported Legacy Amazon SNS alternate Region. Amazon Cognito resources in the Asia Pacific (Seoul) AWS Region must use your Amazon SNS configuration in the Asia Pacific (Tokyo) Region. For more information, see [SMS message settings for Amazon Cognito user pools](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html). */
    sns_region:     any;
}

export interface SoftwareTokenMfaConfiguration {
    /** (Required) Boolean whether to enable software token Multi-Factor (MFA) tokens, such as Time-based One-Time Password (TOTP). To disable software token MFA When `sms_configuration` is not present, the `mfa_configuration` argument must be set to `OFF` and the `software_token_mfa_configuration` configuration block must be fully removed. */
    enabled: any;
}

export interface UserAttributeUpdateSettings {
    /** (Required) A list of attributes requiring verification before update. If set, the provided value(s) must also be set in `auto_verified_attributes`. Valid values: `email`, `phone_number`. */
    attributes_require_verification_before_update: any;
}

export interface UserPoolAddOns {
    /** (Required) Mode for advanced security, must be one of `OFF`, `AUDIT` or `ENFORCED`. */
    advanced_security_mode: any;
}

export interface UsernameConfiguration {
    /** (Required) Whether username case sensitivity will be applied for all users in the user pool through Cognito APIs. */
    case_sensitive: any;
}

export interface VerificationMessageTemplate {
    /** (Optional) Default email option. Must be either `CONFIRM_WITH_CODE` or `CONFIRM_WITH_LINK`. Defaults to `CONFIRM_WITH_CODE`. */
    default_email_option:      any;
    /** (Optional) Email message template. Must contain the `{####}` placeholder. Conflicts with `email_verification_message` argument. */
    email_message:             any;
    /** (Optional) Email message template for sending a confirmation link to the user, it must contain the `{##Click Here##}` placeholder. */
    email_message_by_link:     any;
    /** (Optional) Subject line for the email message template. Conflicts with `email_verification_subject` argument. */
    email_subject:             any;
    /** (Optional) Subject line for the email message template for sending a confirmation link to the user. */
    email_subject_by_link:     any;
    /** (Optional) SMS message template. Must contain the `{####}` placeholder. Conflicts with `sms_verification_message` argument. */
    sms_message:               any;
    /** ARN of the user pool. */
    arn:                       any;
    /** Date the user pool was created. */
    creation_date:             any;
    /** A custom domain name that you provide to Amazon Cognito. This parameter applies only if you use a custom domain to host the sign-up and sign-in pages for your application. For example: `auth.example.com`. */
    custom_domain:             any;
    /** Holds the domain prefix if the user pool has a domain associated with it. */
    domain:                    any;
    /** Endpoint name of the user pool. Example format: `cognito-idp.REGION.amazonaws.com/xxxx_yyyyy` */
    endpoint:                  any;
    /** A number estimating the size of the user pool. */
    estimated_number_of_users: any;
    /** ID of the user pool. */
    id:                        any;
    /** Date the user pool was last modified. */
    last_modified_date:        any;
    /** A map of tags assigned to the resource, including those inherited from the provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block). */
    tags_all:                  any;
}