export interface AuditmanagerAssessmentDelegation {
    resource: Resource[];
}

export interface Resource {
    auditmanager_assessment_delegation: AuditmanagerAssessmentDelegationClass;
}

export interface AuditmanagerAssessmentDelegationClass {
    /** (Required) Identifier for the assessment. */
    assessment_id:  any;
    /** (Required) Assessment control set name. This value is the control set name used during assessment creation (not the AWS-generated ID). The `_id` suffix on this attribute has been preserved to be consistent with the underlying AWS API. */
    control_set_id: any;
    /** (Required) Amazon Resource Name (ARN) of the IAM role. */
    role_arn:       any;
    /** (Required) Type of customer persona. For assessment delegation, type must always be `RESOURCE_OWNER`. */
    role_type:      any;
    /** (Optional) Comment describing the delegation request. */
    comment?:       any;
}