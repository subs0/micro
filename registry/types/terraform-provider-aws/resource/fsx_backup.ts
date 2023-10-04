export interface FsxBackup {
    resource: Resource[];
}

export interface Resource {
    fsx_backup: FsxBackupClass;
}

export interface FsxBackupClass {
    /** (Optional) The ID of the file system to back up. Required if backing up Lustre or Windows file systems. */
    file_system_id?: any;
    /** (Optional) A map of tags to assign to the file system. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. If you have set `copy_tags_to_backups` to true, and you specify one or more tags, no existing file system tags are copied from the file system to the backup. */
    tags?:           any;
    /** (Optional) The ID of the volume to back up. Required if backing up a ONTAP Volume. */
    volume_id?:      any;
}