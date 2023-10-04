export interface SsoadminPermissionSet {
    data: Datum[];
}

export interface Datum {
    ssoadmin_permission_set: SsoadminPermissionSetClass;
}

export interface SsoadminPermissionSetClass {
    /** (Optional) ARN of the permission set. */
    arn?:         any;
    /** (Required) ARN of the SSO Instance associated with the permission set. */
    instance_arn: any;
    /** (Optional) Name of the SSO Permission Set. */
    name?:        any;
}