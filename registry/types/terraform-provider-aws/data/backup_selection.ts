export interface BackupSelection {
    data: Datum[];
}

export interface Datum {
    backup_selection: BackupSelectionClass;
}

export interface BackupSelectionClass {
    /** (Required) Backup plan ID associated with the selection of resources. */
    plan_id:      any;
    /** (Required) Backup selection ID. */
    selection_id: any;
}