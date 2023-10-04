export interface BackupPlan {
    data: Datum[];
}

export interface Datum {
    backup_plan: BackupPlanClass;
}

export interface BackupPlanClass {
    /** (Required) Backup plan ID. */
    plan_id: any;
}