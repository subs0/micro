export interface ConfigConfigurationRecorderStatus {
    resource: Resource[];
}

export interface Resource {
    config_configuration_recorder_status: ConfigConfigurationRecorderStatusClass;
}

export interface ConfigConfigurationRecorderStatusClass {
    /** (Required) The name of the recorder */
    name:       any;
    /** (Required) Whether the configuration recorder should be enabled or disabled. */
    is_enabled: any;
}