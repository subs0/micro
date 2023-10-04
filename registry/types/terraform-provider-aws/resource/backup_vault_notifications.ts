export interface BackupVaultNotifications {
    resource: Resource[];
}

export interface Resource {
    backup_vault_notifications: BackupVaultNotificationsClass;
}

export interface BackupVaultNotificationsClass {
    /** (Required) Name of the backup vault to add notifications for. */
    backup_vault_name:   any;
    /** (Required) The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events */
    sns_topic_arn:       any;
    /** (Required) An array of events that indicate the status of jobs to back up resources to the backup vault. */
    backup_vault_events: any;
}