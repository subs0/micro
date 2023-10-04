export interface AuditmanagerAccountRegistration {
    resource: Resource[];
}

export interface Resource {
    auditmanager_account_registration: AuditmanagerAccountRegistrationClass;
}

export interface AuditmanagerAccountRegistrationClass {
    /** (Optional) Identifier for the delegated administrator account. */
    delegated_admin_account?: any;
    /** (Optional) Flag to deregister AuditManager in the account upon destruction. Defaults to `false` (ie. AuditManager will remain active in the account, even if this resource is removed). */
    deregister_on_destroy?:   any;
    /** (Optional) KMS key identifier. */
    kms_key?:                 any;
}