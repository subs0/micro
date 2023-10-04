export interface EFSBackupPolicy {
    resource: Resource[];
}

export interface Resource {
    efs_backup_policy: EFSBackupPolicyClass;
}

export interface EFSBackupPolicyClass {
    /** (Required) The ID of the EFS file system. */
    file_system_id: any;
    /** (Required) A backup_policy object (documented below). */
    backup_policy:  any;
    /** (Required) A status of the backup policy. Valid values: `ENABLED`, `DISABLED`. */
    status:         any;
}