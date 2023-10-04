export interface DatasyncLocationFsxOpenzfsFileSystem {
    resource: Resource[];
}

export interface Resource {
    datasync_location_fsx_openzfs_file_system: DatasyncLocationFsxOpenzfsFileSystemClass;
}

export interface DatasyncLocationFsxOpenzfsFileSystemClass {
    /** (Required) The Amazon Resource Name (ARN) for the FSx for OpenZfs file system. */
    fsx_filesystem_arn:   any;
    protocol:             Protocol;
    /** (Optional) The Amazon Resource Names (ARNs) of the security groups that are to use to configure the FSx for openzfs file system. */
    security_group_arns?: any;
    /** (Optional) Subdirectory to perform actions as source or destination. Must start with `/fsx`. */
    subdirectory?:        any;
    /** (Optional) Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
    /** (Required) Represents the Network File System (NFS) protocol that DataSync uses to access your FSx for OpenZFS file system. See below. */
    nfs:                  NFS;
    /** (Required) Represents the mount options that are available for DataSync to access an NFS location. See below. */
    mount_options?:       MountOptions;
}

export interface MountOptions {
    /** (Optional) The specific NFS version that you want DataSync to use for mounting your NFS share. Valid values: `AUTOMATIC`, `NFS3`, `NFS4_0` and `NFS4_1`. Default: `AUTOMATIC` */
    version: any;
}

export interface NFS {
    /** (Required) Represents the mount options that are available for DataSync to access an NFS location. See below. */
    mount_options: any;
}

export interface Protocol {
    /** (Required) Represents the Network File System (NFS) protocol that DataSync uses to access your FSx for OpenZFS file system. See below. */
    nfs: any;
}