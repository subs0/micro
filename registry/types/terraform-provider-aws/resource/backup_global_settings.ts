export interface BackupGlobalSettings {
    resource: Resource[];
}

export interface Resource {
    backup_global_settings: BackupGlobalSettingsClass;
}

export interface BackupGlobalSettingsClass {
    /** (Required) A list of resources along with the opt-in preferences for the account. */
    global_settings: any;
}