export interface BackupVaultLockConfiguration {
    resource: Resource[];
}

export interface Resource {
    backup_vault_lock_configuration: BackupVaultLockConfigurationClass;
}

export interface BackupVaultLockConfigurationClass {
    /** (Required) Name of the backup vault to add a lock configuration for. */
    backup_vault_name:    any;
    /** (Optional) The number of days before the lock date. If omitted creates a vault lock in `governance` mode, otherwise it will create a vault lock in `compliance` mode. */
    changeable_for_days?: any;
    /** (Optional) The maximum retention period that the vault retains its recovery points. */
    max_retention_days?:  any;
    /** (Optional) The minimum retention period that the vault retains its recovery points. */
    min_retention_days?:  any;
}