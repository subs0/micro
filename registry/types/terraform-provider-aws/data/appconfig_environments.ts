export interface AppconfigEnvironments {
    data: Datum[];
}

export interface Datum {
    appconfig_environments: AppconfigEnvironmentsClass;
}

export interface AppconfigEnvironmentsClass {
    /** (Required) ID of the AppConfig Application. */
    application_id: any;
}