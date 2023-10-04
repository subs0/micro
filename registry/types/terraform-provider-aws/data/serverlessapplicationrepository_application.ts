export interface ServerlessapplicationrepositoryApplication {
    data: Datum[];
}

export interface Datum {
    serverlessapplicationrepository_application: ServerlessapplicationrepositoryApplicationClass;
}

export interface ServerlessapplicationrepositoryApplicationClass {
    /** (Required) ARN of the application. */
    application_id:    any;
    /** (Optional) Requested version of the application. By default, retrieves the latest version. */
    semantic_version?: any;
}