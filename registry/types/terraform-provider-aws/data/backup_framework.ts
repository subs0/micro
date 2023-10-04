export interface BackupFramework {
    data: Datum[];
}

export interface Datum {
    backup_framework: BackupFrameworkClass;
}

export interface BackupFrameworkClass {
    /** (Required) Backup framework name. */
    name: any;
}