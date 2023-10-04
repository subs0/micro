export interface DetectiveMember {
    resource: Resource[];
}

export interface Resource {
    detective_member: DetectiveMemberClass;
}

export interface DetectiveMemberClass {
    /** (Required) AWS account ID for the account. */
    account_id:                  any;
    /** (Required) Email address for the account. */
    email_address:               any;
    /** (Required) ARN of the behavior graph to invite the member accounts to contribute their data to. */
    graph_arn:                   any;
    /** (Optional) A custom message to include in the invitation. Amazon Detective adds this message to the standard content that it sends for an invitation. */
    message?:                    any;
    /** (Optional) If set to true, then the root user of the invited account will _not_ receive an email notification. This notification is in addition to an alert that the root user receives in AWS Personal Health Dashboard. By default, this is set to `false`. */
    disable_email_notification?: any;
}