export interface EFSAccessPoint {
    data: Datum[];
}

export interface Datum {
    efs_access_point: EFSAccessPointClass;
}

export interface EFSAccessPointClass {
    /** (Required) ID that identifies the file system. */
    access_point_id: any;
}