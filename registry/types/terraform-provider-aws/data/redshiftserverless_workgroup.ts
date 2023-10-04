export interface RedshiftserverlessWorkgroup {
    data: Datum[];
}

export interface Datum {
    redshiftserverless_workgroup: RedshiftserverlessWorkgroupClass;
}

export interface RedshiftserverlessWorkgroupClass {
    /** (Required) The name of the workgroup associated with the database. */
    workgroup_name: any;
}