export interface SecurityhubMember {
    resource: Resource[];
}

export interface Resource {
    securityhub_member: SecurityhubMemberClass;
}

export interface SecurityhubMemberClass {
    /** (Required) The ID of the member AWS account. */
    account_id: any;
    /** (Optional) The email of the member AWS account. */
    email?:     any;
    /** (Optional) Boolean whether to invite the account to Security Hub as a member. Defaults to `false`. */
    invite?:    any;
}