export interface AuditmanagerFrameworkShare {
    resource: Resource[];
}

export interface Resource {
    auditmanager_framework_share: AuditmanagerFrameworkShareClass;
}

export interface AuditmanagerFrameworkShareClass {
    /** (Required) Amazon Web Services account of the recipient. */
    destination_account: any;
    /** (Required) Amazon Web Services region of the recipient. */
    destination_region:  any;
    /** (Required) Unique identifier for the shared custom framework. */
    framework_id:        any;
    /** (Optional) Comment from the sender about the share request. */
    comment?:            any;
}