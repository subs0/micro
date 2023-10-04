export interface DatasyncLocationFsxLustreFileSystem {
    resource: Resource[];
}

export interface Resource {
    datasync_location_fsx_lustre_file_system: DatasyncLocationFsxLustreFileSystemClass;
}

export interface DatasyncLocationFsxLustreFileSystemClass {
    /** (Required) The Amazon Resource Name (ARN) for the FSx for Lustre file system. */
    fsx_filesystem_arn:   any;
    /** (Optional) The Amazon Resource Names (ARNs) of the security groups that are to use to configure the FSx for Lustre file system. */
    security_group_arns?: any;
    /** (Optional) Subdirectory to perform actions as source or destination. */
    subdirectory?:        any;
    /** (Optional) Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
}