export interface SsoadminPermissionSetInlinePolicy {
    resource: Resource[];
}

export interface Resource {
    ssoadmin_permission_set_inline_policy: SsoadminPermissionSetInlinePolicyClass;
}

export interface SsoadminPermissionSetInlinePolicyClass {
    /** (Required) The IAM inline policy to attach to a Permission Set. */
    inline_policy:       any;
    /** (Required, Forces new resource) The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed. */
    instance_arn?:       any;
    /** (Required, Forces new resource) The Amazon Resource Name (ARN) of the Permission Set. */
    permission_set_arn?: any;
}