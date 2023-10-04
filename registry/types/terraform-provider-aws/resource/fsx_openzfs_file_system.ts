export interface FsxOpenzfsFileSystem {
    resource: Resource[];
}

export interface Resource {
    fsx_openzfs_file_system: FsxOpenzfsFileSystemClass;
}

export interface FsxOpenzfsFileSystemClass {
    /** (Required) - The filesystem deployment type. Valid values: `SINGLE_AZ_1`, `SINGLE_AZ_2` and `MULTI_AZ_1`. */
    deployment_type:                    any;
    /** (Required) The storage capacity (GiB) of the file system. Valid values between `64` and `524288`. */
    storage_capacity:                   any;
    /** (Required) A list of IDs for the subnets that the file system will be accessible from. */
    subnet_ids:                         any;
    /** (Required) Throughput (MB/s) of the file system. Valid values depend on `deployment_type`. Must be one of `64`, `128`, `256`, `512`, `1024`, `2048`, `3072`, `4096` for `SINGLE_AZ_1`. Must be one of `160`, `320`, `640`, `1280`, `2560`, `3840`, `5120`, `7680`, `10240` for `SINGLE_AZ_2`. */
    throughput_capacity:                any;
    /** (Optional) The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 90 days. */
    automatic_backup_retention_days?:   any;
    /** (Optional) The ID of the source backup to create the filesystem from. */
    backup_id?:                         any;
    /** (Optional) A boolean flag indicating whether tags for the file system should be copied to backups. The default value is false. */
    copy_tags_to_backups?:              any;
    /** (Optional) A boolean flag indicating whether tags for the file system should be copied to snapshots. The default value is false. */
    copy_tags_to_volumes?:              any;
    /** (Optional) A recurring daily time, in the format HH:MM. HH is the zero-padded hour of the day (0-23), and MM is the zero-padded minute of the hour. For example, 05:00 specifies 5 AM daily. Requires `automatic_backup_retention_days` to be set. */
    daily_automatic_backup_start_time?: any;
    /** (Optional) The SSD IOPS configuration for the Amazon FSx for OpenZFS file system. See [Disk Iops Configuration](#disk-iops-configuration) below. */
    disk_iops_configuration?:           any;
    /** (Optional) (Multi-AZ only) Specifies the IP address range in which the endpoints to access your file system will be created. */
    endpoint_ip_address_range?:         any;
    /** (Optional) ARN for the KMS Key to encrypt the file system at rest, Defaults to an AWS managed KMS Key. */
    kms_key_id?:                        any;
    /** (Optional) (Multi-AZ only) Required when `deployment_type` is set to `MULTI_AZ_1`. This specifies the subnet in which you want the preferred file server to be located. */
    preferred_subnet_id?:               any;
    /** (Optional) The configuration for the root volume of the file system. All other volumes are children or the root volume. See [Root Volume Configuration](#root-volume-configuration) below. */
    root_volume_configuration?:         any;
    /** (Optional) (Multi-AZ only) Specifies the route tables in which Amazon FSx creates the rules for routing traffic to the correct file server. You should specify all virtual private cloud (VPC) route tables associated with the subnets in which your clients are located. By default, Amazon FSx selects your VPC's default route table. */
    route_table_ids?:                   any;
    /** (Optional) A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces. */
    security_group_ids?:                any;
    /** (Optional) The filesystem storage type. Only `SSD` is supported. */
    storage_type?:                      any;
    /** (Optional) A map of tags to assign to the file system. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                              any;
    /** (Optional) The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone. */
    weekly_maintenance_start_time?:     any;
    /** (Optional) - The total number of SSD IOPS provisioned for the file system. */
    iops?:                              any;
    /** (Optional) - Specifies whether the number of IOPS for the file system is using the system. Valid values are `AUTOMATIC` and `USER_PROVISIONED`. Default value is `AUTOMATIC`. */
    mode?:                              any;
    /** (Optional) - A boolean flag indicating whether tags for the file system should be copied to snapshots. The default value is false. */
    copy_tags_to_snapshots?:            any;
    /** (Optional) - Method used to compress the data on the volume. Valid values are `LZ4`, `NONE` or `ZSTD`. Child volumes that don't specify compression option will inherit from parent volume. This option on file system applies to the root volume. */
    data_compression_type?:             any;
    /** (Optional) - NFS export configuration for the root volume. Exactly 1 item. See [NFS Exports](#nfs-exports) Below. */
    nfs_exports?:                       any;
    /** (Optional) - specifies whether the volume is read-only. Default is false. */
    read_only?:                         any;
    /** (Optional) - Specifies the record size of an OpenZFS root volume, in kibibytes (KiB). Valid values are `4`, `8`, `16`, `32`, `64`, `128`, `256`, `512`, or `1024` KiB. The default is `128` KiB. */
    record_size_kib?:                   any;
    /** (Optional) - Specify how much storage users or groups can use on the volume. Maximum of 100 items. See [User and Group Quotas](#user-and-group-quotas) Below. */
    user_and_group_quotas?:             any;
    /** (Required) - A list of configuration objects that contain the client and options for mounting the OpenZFS file system. Maximum of 25 items. See [Client Configurations](#client configurations) Below. */
    client_configurations:              any;
    /** (Required) - A value that specifies who can mount the file system. You can provide a wildcard character (*), an IP address (0.0.0.0), or a CIDR address (192.0.2.0/24. By default, Amazon FSx uses the wildcard character when specifying the client. */
    clients:                            any;
    /** (Required) -  The options to use when mounting the file system. Maximum of 20 items. See the [Linix NFS exports man page](https://linux.die.net/man/5/exports) for more information. `crossmount` and `sync` are used by default. */
    options:                            any;
    /** (Required) - The ID of the user or group. Valid values between `0` and `2147483647` */
    id:                                 any;
    /** (Required) - The amount of storage that the user or group can use in gibibytes (GiB). Valid values between `0` and `2147483647` */
    storage_capacity_quota_gib:         any;
    /** (Required) - A value that specifies whether the quota applies to a user or group. Valid values are `USER` or `GROUP`. */
    type:                               any;
}