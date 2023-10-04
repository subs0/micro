export interface AuditmanagerOrganizationAdminAccountRegistration {
    resource: Resource[];
}

export interface Resource {
    auditmanager_organization_admin_account_registration: AuditmanagerOrganizationAdminAccountRegistrationClass;
}

export interface AuditmanagerOrganizationAdminAccountRegistrationClass {
    /** (Required) Identifier for the organization administrator account. */
    admin_account_id: any;
}