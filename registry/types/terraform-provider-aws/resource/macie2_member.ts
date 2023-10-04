export interface Macie2Member {
    resource: Resource[];
}

export interface Resource {
    macie2_member: Macie2MemberClass;
}

export interface Macie2MemberClass {
    /** (Required) The AWS account ID for the account. */
    account_id:                             any;
    /** (Required) The email address for the account. */
    email:                                  any;
    /** (Optional) A map of key-value pairs that specifies the tags to associate with the account in Amazon Macie. */
    tags?:                                  any;
    /** (Optional) Specifies the status for the account. To enable Amazon Macie and start all Macie activities for the account, set this value to `ENABLED`. Valid values are `ENABLED` or `PAUSED`. */
    status?:                                any;
    /** (Optional) Send an invitation to a member */
    invite?:                                any;
    /** (Optional) A custom message to include in the invitation. Amazon Macie adds this message to the standard content that it sends for an invitation. */
    invitation_message?:                    any;
    /** (Optional) Specifies whether to send an email notification to the root user of each account that the invitation will be sent to. This notification is in addition to an alert that the root user receives in AWS Personal Health Dashboard. To send an email notification to the root user of each account, set this value to `true`. */
    invitation_disable_email_notification?: any;
}