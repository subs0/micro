export interface GuarddutyMember {
    resource: Resource[];
}

export interface Resource {
    guardduty_member: GuarddutyMemberClass;
}

export interface GuarddutyMemberClass {
    /** (Required) AWS account ID for member account. */
    account_id:                  any;
    /** (Required) The detector ID of the GuardDuty account where you want to create member accounts. */
    detector_id:                 any;
    /** (Required) Email address for member account. */
    email:                       any;
    /** (Optional) Boolean whether to invite the account to GuardDuty as a member. Defaults to `false`. To detect if an invitation needs to be (re-)sent, the Terraform state value is `true` based on a `relationship_status` of `Disabled`, `Enabled`, `Invited`, or `EmailVerificationInProgress`. */
    invite?:                     any;
    /** (Optional) Message for invitation. */
    invitation_message?:         any;
    /** (Optional) Boolean whether an email notification is sent to the accounts. Defaults to `false`. */
    disable_email_notification?: any;
}