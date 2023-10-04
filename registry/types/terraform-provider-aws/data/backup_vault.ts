export interface BackupVault {
    data: Datum[];
}

export interface Datum {
    backup_vault: BackupVaultClass;
}

export interface BackupVaultClass {
    /** (Required) Name of the backup vault. */
    name: any;
}