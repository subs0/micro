export interface FsxOpenzfsVolume {
    resource: Resource[];
}

export interface Resource {
    fsx_openzfs_volume: FsxOpenzfsVolumeClass;
}

export interface FsxOpenzfsVolumeClass {
    /** (Required) The name of the Volume. You can use a maximum of 203 alphanumeric characters, plus the underscore (_) special character. */
    name:                       any;
    /** (Required) The volume id of volume that will be the parent volume for the volume being created, this could be the root volume created from the `aws_fsx_openzfs_file_system` resource with the `root_volume_id` or the `id` property of another `aws_fsx_openzfs_volume`. */
    parent_volume_id:           any;
    /** (Optional) The ARN of the source snapshot to create the volume from. */
    origin_snapshot?:           any;
    /** (Optional) A boolean flag indicating whether tags for the file system should be copied to snapshots. The default value is false. */
    copy_tags_to_snapshots?:    any;
    /** (Optional) Method used to compress the data on the volume. Valid values are `NONE` or `ZSTD`. Child volumes that don't specify compression option will inherit from parent volume. This option on file system applies to the root volume. */
    data_compression_type?:     any;
    /** (Optional) Whether to delete all child volumes and snapshots. Valid values: `DELETE_CHILD_VOLUMES_AND_SNAPSHOTS`. This configuration must be applied separately before attempting to delete the resource to have the desired behavior.. */
    delete_volume_options?:     any;
    /** (Optional) NFS export configuration for the root volume. Exactly 1 item. See [NFS Exports](#nfs-exports) Below. */
    nfs_exports?:               any;
    /** (Optional) specifies whether the volume is read-only. Default is false. */
    read_only?:                 any;
    /** (Optional) The record size of an OpenZFS volume, in kibibytes (KiB). Valid values are `4`, `8`, `16`, `32`, `64`, `128`, `256`, `512`, or `1024` KiB. The default is `128` KiB. */
    record_size_kib?:           any;
    /** (Optional) - Specify how much storage users or groups can use on the volume. Maximum of 100 items. See [User and Group Quotas](#user-and-group-quotas) Below. */
    user_and_group_quotas?:     any;
    /** (Optional) A map of tags to assign to the file system. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
    /** (Required) - A list of configuration objects that contain the client and options for mounting the OpenZFS file system. Maximum of 25 items. See [Client Configurations](#client configurations) Below. */
    client_configurations:      any;
    /** (Required) - A value that specifies who can mount the file system. You can provide a wildcard character (*), an IP address (0.0.0.0), or a CIDR address (192.0.2.0/24. By default, Amazon FSx uses the wildcard character when specifying the client. */
    clients:                    any;
    /** (Required) -  The options to use when mounting the file system. Maximum of 20 items. See the [Linix NFS exports man page](https://linux.die.net/man/5/exports) for more information. `crossmount` and `sync` are used by default. */
    options:                    any;
    /** (Required) - The ID of the user or group. Valid values between `0` and `2147483647` */
    id:                         any;
    /** (Required) - The amount of storage that the user or group can use in gibibytes (GiB). Valid values between `0` and `2147483647` */
    storage_capacity_quota_gib: any;
    /** (Required) - A value that specifies whether the quota applies to a user or group. Valid values are `USER` or `GROUP`. */
    Type:                       any;
}