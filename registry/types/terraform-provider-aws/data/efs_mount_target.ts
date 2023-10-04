export interface EFSMountTarget {
    data: Datum[];
}

export interface Datum {
    efs_mount_target: EFSMountTargetClass;
}

export interface EFSMountTargetClass {
    /** (Optional) ID or ARN of the access point whose mount target that you want to find. It must be included if a `file_system_id` and `mount_target_id` are not included. */
    access_point_id?: any;
    /** (Optional) ID or ARN of the file system whose mount target that you want to find. It must be included if an `access_point_id` and `mount_target_id` are not included. */
    file_system_id?:  any;
    /** (Optional) ID or ARN of the mount target that you want to find. It must be included in your request if an `access_point_id` and `file_system_id` are not included. */
    mount_target_id?: any;
}