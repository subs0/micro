export interface AuditmanagerControl {
    data: Datum[];
}

export interface Datum {
    auditmanager_control: AuditmanagerControlClass;
}

export interface AuditmanagerControlClass {
    /** (Required) Name of the control. */
    name: any;
    /** (Required) Type of control. Valid values are `Custom` and `Standard`. */
    type: any;
}