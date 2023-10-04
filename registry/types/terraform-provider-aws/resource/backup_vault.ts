export interface BackupVault {
    resource: Resource[];
}

export interface Resource {
    backup_vault: BackupVaultClass;
}

export interface BackupVaultClass {
    /** (Optional, Default: `false`) A boolean that indicates that all recovery points stored in the vault are deleted so that the vault can be destroyed without error. */
    force_destroy?: any;
    /** (Optional) The server-side encryption key that is used to protect your backups. */
    kms_key_arn?:   any;
    /** (Required) Name of the backup vault to create. */
    name:           any;
    /** (Optional) Metadata that you can assign to help organize the resources that you create. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:          any;
}