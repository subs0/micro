export interface SsoadminAccountAssignment {
    resource: Resource[];
}

export interface Resource {
    ssoadmin_account_assignment: SsoadminAccountAssignmentClass;
}

export interface SsoadminAccountAssignmentClass {
    /** (Required, Forces new resource) The Amazon Resource Name (ARN) of the SSO Instance. */
    instance_arn?:       any;
    /** (Required, Forces new resource) The Amazon Resource Name (ARN) of the Permission Set that the admin wants to grant the principal access to. */
    permission_set_arn?: any;
    /** (Required, Forces new resource) An identifier for an object in SSO, such as a user or group. PrincipalIds are GUIDs (For example, `f81d4fae-7dec-11d0-a765-00a0c91e6bf6`). */
    principal_id?:       any;
    /** (Required, Forces new resource) The entity type for which the assignment will be created. Valid values: `USER`, `GROUP`. */
    principal_type?:     any;
    /** (Required, Forces new resource) An AWS account identifier, typically a 10-12 digit string. */
    target_id?:          any;
    /** (Optional, Forces new resource) The entity type for which the assignment will be created. Valid values: `AWS_ACCOUNT`. */
    target_type?:        any;
}