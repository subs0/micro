export interface SsoadminPermissionsBoundaryAttachment {
    resource: Resource[];
}

export interface Resource {
    ssoadmin_permissions_boundary_attachment: SsoadminPermissionsBoundaryAttachmentClass;
}

export interface SsoadminPermissionsBoundaryAttachmentClass {
    /** (Required, Forces new resource) The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed. */
    instance_arn?:                      any;
    /** (Required, Forces new resource) The Amazon Resource Name (ARN) of the Permission Set. */
    permission_set_arn?:                any;
    /** (Required, Forces new resource) The permissions boundary policy. See below. */
    permissions_boundary?:              any;
    /** (Optional) AWS-managed IAM policy ARN to use as the permissions boundary. */
    managed_policy_arn?:                any;
    /** (Optional) Specifies the name and path of a customer managed policy. See below. */
    customer_managed_policy_reference?: any;
    /** (Required, Forces new resource) Name of the customer managed IAM Policy to be attached. */
    name?:                              any;
    /** (Optional, Forces new resource) The path to the IAM policy to be attached. The default is `/`. See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) for more information. */
    path?:                              any;
}