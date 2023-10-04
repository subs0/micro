export interface EFSMountTarget {
    resource: Resource[];
}

export interface Resource {
    efs_mount_target: EFSMountTargetClass;
}

export interface EFSMountTargetClass {
    /** (Required) The ID of the file system for which the mount target is intended. */
    file_system_id:   any;
    /** (Required) The ID of the subnet to add the mount target in. */
    subnet_id:        any;
    /** (Optional) The address (within the address range of the specified subnet) at */
    ip_address?:      any;
    /** (Optional) A list of up to 5 VPC security group IDs (that must */
    security_groups?: any;
}