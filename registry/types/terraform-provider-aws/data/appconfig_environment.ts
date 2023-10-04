export interface AppconfigEnvironment {
    data: Datum[];
}

export interface Datum {
    appconfig_environment: AppconfigEnvironmentClass;
}

export interface AppconfigEnvironmentClass {
    /** (Required) ID of the AppConfig Application to which this Environment belongs. */
    application_id: any;
    /** (Required) ID of the AppConfig Environment. */
    environment_id: any;
}