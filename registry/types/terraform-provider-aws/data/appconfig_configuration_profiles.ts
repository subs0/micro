export interface AppconfigConfigurationProfiles {
    data: Datum[];
}

export interface Datum {
    appconfig_configuration_profiles: AppconfigConfigurationProfilesClass;
}

export interface AppconfigConfigurationProfilesClass {
    /** (Required) ID of the AppConfig Application. */
    application_id: any;
}