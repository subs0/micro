export interface BackupVaultPolicy {
    resource: Resource[];
}

export interface Resource {
    backup_vault_policy: BackupVaultPolicyClass;
}

export interface BackupVaultPolicyClass {
    /** (Required) Name of the backup vault to add policy for. */
    backup_vault_name: any;
    /** (Required) The backup vault access policy document in JSON format. */
    policy:            any;
}