export interface EFSAccessPoints {
    data: Datum[];
}

export interface Datum {
    efs_access_points: EFSAccessPointsClass;
}

export interface EFSAccessPointsClass {
    /** (Required) EFS File System identifier. */
    file_system_id: any;
}