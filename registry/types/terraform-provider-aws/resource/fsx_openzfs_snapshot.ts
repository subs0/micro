export interface FsxOpenzfsSnapshot {
    resource: Resource[];
}

export interface Resource {
    fsx_openzfs_snapshot: FsxOpenzfsSnapshotClass;
}

export interface FsxOpenzfsSnapshotClass {
    /** (Required) The name of the Snapshot. You can use a maximum of 203 alphanumeric characters plus either _ or -  or : or . for the name. */
    name:       any;
    /** (Optional) A map of tags to assign to the file system. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. If you have set `copy_tags_to_backups` to true, and you specify one or more tags, no existing file system tags are copied from the file system to the backup. */
    tags?:      any;
    /** (Optional) The ID of the volume to snapshot. This can be the root volume or a child volume. */
    volume_id?: any;
}