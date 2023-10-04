export interface SsoadminManagedPolicyAttachment {
    resource: Resource[];
}

export interface Resource {
    ssoadmin_managed_policy_attachment: SsoadminManagedPolicyAttachmentClass;
}

export interface SsoadminManagedPolicyAttachmentClass {
    /** (Required, Forces new resource) The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed. */
    instance_arn?:       any;
    /** (Required, Forces new resource) The IAM managed policy Amazon Resource Name (ARN) to be attached to the Permission Set. */
    managed_policy_arn?: any;
    /** (Required, Forces new resource) The Amazon Resource Name (ARN) of the Permission Set. */
    permission_set_arn?: any;
}