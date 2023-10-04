export interface AuditmanagerFramework {
    data: Datum[];
}

export interface Datum {
    auditmanager_framework: AuditmanagerFrameworkClass;
}

export interface AuditmanagerFrameworkClass {
    /** (Required) Name of the framework. */
    name: any;
    /** (Required) Type of framework. Valid values are `Custom` and `Standard`. */
    type: any;
}