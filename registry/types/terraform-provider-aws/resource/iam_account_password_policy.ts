export interface IamAccountPasswordPolicy {
    resource: Resource[];
}

export interface Resource {
    iam_account_password_policy: IamAccountPasswordPolicyClass;
}

export interface IamAccountPasswordPolicyClass {
    /** (Optional) Whether to allow users to change their own password */
    allow_users_to_change_password?: any;
    /** (Optional) Whether users are prevented from setting a new password after their password has expired (i.e., require administrator reset) */
    hard_expiry?:                    any;
    /** (Optional) The number of days that an user password is valid. */
    max_password_age?:               any;
    /** (Optional) Minimum length to require for user passwords. */
    minimum_password_length?:        any;
    /** (Optional) The number of previous passwords that users are prevented from reusing. */
    password_reuse_prevention?:      any;
    /** (Optional) Whether to require lowercase characters for user passwords. */
    require_lowercase_characters?:   any;
    /** (Optional) Whether to require numbers for user passwords. */
    require_numbers?:                any;
    /** (Optional) Whether to require symbols for user passwords. */
    require_symbols?:                any;
    /** (Optional) Whether to require uppercase characters for user passwords. */
    require_uppercase_characters?:   any;
}