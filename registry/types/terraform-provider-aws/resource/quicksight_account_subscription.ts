export interface QuicksightAccountSubscription {
    resource: Resource[];
}

export interface Resource {
    quicksight_account_subscription: QuicksightAccountSubscriptionClass;
}

export interface QuicksightAccountSubscriptionClass {
    /** (Required) Name of your Amazon QuickSight account. This name is unique over all of AWS, and it appears only when users sign in. */
    account_name:           any;
    /** (Required) Method that you want to use to authenticate your Amazon QuickSight account. Currently, the valid values for this parameter are `IAM_AND_QUICKSIGHT`, `IAM_ONLY`, and `ACTIVE_DIRECTORY`. */
    authentication_method:  any;
    /** (Required) Edition of Amazon QuickSight that you want your account to have. Currently, you can choose from `STANDARD`, `ENTERPRISE` or `ENTERPRISE_AND_Q`. */
    edition:                any;
    /** (Required) Email address that you want Amazon QuickSight to send notifications to regarding your Amazon QuickSight account or Amazon QuickSight subscription. */
    notification_email:     any;
    /** (Optional) Name of your Active Directory. This field is required if `ACTIVE_DIRECTORY` is the selected authentication method of the new Amazon QuickSight account. */
    active_directory_name?: any;
    /** (Optional) Admin group associated with your Active Directory. This field is required if `ACTIVE_DIRECTORY` is the selected authentication method of the new Amazon QuickSight account. */
    admin_group?:           any;
    /** (Optional) Author group associated with your Active Directory. */
    author_group?:          any;
    /** (Optional) AWS account ID hosting the QuickSight account. Default to provider account. */
    aws_account_id?:        any;
    /** (Optional) A 10-digit phone number for the author of the Amazon QuickSight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon QuickSight account. */
    contact_number?:        any;
    /** (Optional) Active Directory ID that is associated with your Amazon QuickSight account. */
    directory_id?:          any;
    /** (Optional) Email address of the author of the Amazon QuickSight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon QuickSight account. */
    email_address?:         any;
    /** (Optional) First name of the author of the Amazon QuickSight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon QuickSight account. */
    first_name?:            any;
    /** (Optional) Last name of the author of the Amazon QuickSight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon QuickSight account. */
    last_name?:             any;
    /** (Optional) Reader group associated with your Active Direcrtory. */
    reader_group?:          any;
    /** (Optional) Realm of the Active Directory that is associated with your Amazon QuickSight account. */
    realm?:                 any;
}