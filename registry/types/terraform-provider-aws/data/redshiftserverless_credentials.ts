export interface RedshiftserverlessCredentials {
    data: Datum[];
}

export interface Datum {
    redshiftserverless_credentials: RedshiftserverlessCredentialsClass;
}

export interface RedshiftserverlessCredentialsClass {
    /** (Required) The name of the workgroup associated with the database. */
    workgroup_name:    any;
    /** (Optional) The name of the database to get temporary authorization to log on to. */
    db_name?:          any;
    /** (Optional) The number of seconds until the returned temporary password expires. The minimum is 900 seconds, and the maximum is 3600 seconds. */
    duration_seconds?: any;
}