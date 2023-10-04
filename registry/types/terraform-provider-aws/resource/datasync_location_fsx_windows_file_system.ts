export interface DatasyncLocationFsxWindowsFileSystem {
    resource: Resource[];
}

export interface Resource {
    datasync_location_fsx_windows_file_system: DatasyncLocationFsxWindowsFileSystemClass;
}

export interface DatasyncLocationFsxWindowsFileSystemClass {
    /** (Required) The Amazon Resource Name (ARN) for the FSx for Windows file system. */
    fsx_filesystem_arn:   any;
    /** (Required) The password of the user who has the permissions to access files and folders in the FSx for Windows file system. */
    password:             any;
    /** (Required) The user who has the permissions to access files and folders in the FSx for Windows file system. */
    user:                 any;
    /** (Optional) The name of the Windows domain that the FSx for Windows server belongs to. */
    domain?:              any;
    /** (Optional) The Amazon Resource Names (ARNs) of the security groups that are to use to configure the FSx for Windows file system. */
    security_group_arns?: any;
    /** (Optional) Subdirectory to perform actions as source or destination. */
    subdirectory?:        any;
    /** (Optional) Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
}