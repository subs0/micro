export interface BackupRegionSettings {
    resource: Resource[];
}

export interface Resource {
    backup_region_settings: BackupRegionSettingsClass;
}

export interface BackupRegionSettingsClass {
    /** (Required) A map of services along with the opt-in preferences for the Region. */
    resource_type_opt_in_preference:      any;
    /** (Optional) A map of services along with the management preferences for the Region. For more information, see the [AWS Documentation](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRegionSettings.html#API_UpdateRegionSettings_RequestSyntax). */
    resource_type_management_preference?: any;
}