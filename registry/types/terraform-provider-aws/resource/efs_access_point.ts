export interface EFSAccessPoint {
    resource: Resource[];
}

export interface Resource {
    efs_access_point: EFSAccessPointClass;
}

export interface EFSAccessPointClass {
    /** (Required) ID of the file system for which the access point is intended. */
    file_system_id: any;
    posix_user?:    POSIXUser;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:          any;
    creation_info?: CreationInfo;
    /** (Optional) Path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide `creation_info`. */
    path?:          any;
}

export interface CreationInfo {
    /** (Required) POSIX group ID to apply to the `root_directory`. */
    owner_gid:   any;
    /** (Required) POSIX user ID to apply to the `root_directory`. */
    owner_uid:   any;
    /** (Required) POSIX permissions to apply to the RootDirectory, in the format of an octal number representing the file's mode bits. */
    permissions: any;
}

export interface POSIXUser {
    /** (Required) POSIX group ID used for all file system operations using this access point. */
    gid:            any;
    /** (Optional) Secondary POSIX group IDs used for all file system operations using this access point. */
    secondary_gids: any;
    /** (Required) POSIX user ID used for all file system operations using this access point. */
    uid:            any;
}