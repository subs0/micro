export interface AppconfigConfigurationProfile {
    data: Datum[];
}

export interface Datum {
    appconfig_configuration_profile: AppconfigConfigurationProfileClass;
}

export interface AppconfigConfigurationProfileClass {
    /** (Required) ID of the AppConfig application to which this configuration profile belongs. */
    application_id:           any;
    /** (Required) ID of the Configuration Profile. */
    configuration_profile_id: any;
}