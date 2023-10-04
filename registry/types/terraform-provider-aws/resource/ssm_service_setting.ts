export interface SsmServiceSetting {
    resource: Resource[];
}

export interface Resource {
    ssm_service_setting: SsmServiceSettingClass;
}

export interface SsmServiceSettingClass {
    /** (Required) ID of the service setting. */
    setting_id:    any;
    /** (Required) Value of the service setting. */
    setting_value: any;
}