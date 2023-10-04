export interface BackupReportPlan {
    data: Datum[];
}

export interface Datum {
    backup_report_plan: BackupReportPlanClass;
}

export interface BackupReportPlanClass {
    /** (Required) Backup report plan name. */
    name: any;
}