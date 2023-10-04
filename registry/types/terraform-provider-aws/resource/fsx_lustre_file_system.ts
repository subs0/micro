export interface FsxLustreFileSystem {
    resource: Resource[];
}

export interface Resource {
    fsx_lustre_file_system: FsxLustreFileSystemClass;
}

export interface FsxLustreFileSystemClass {
    /** (Optional) The storage capacity (GiB) of the file system. Minimum of `1200`. See more details at [Allowed values for Fsx storage capacity](https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystem.html#FSx-CreateFileSystem-request-StorageCapacity). Update is allowed only for `SCRATCH_2`, `PERSISTENT_1` and `PERSISTENT_2` deployment types, See more details at [Fsx Storage Capacity Update](https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateFileSystem.html#FSx-UpdateFileSystem-request-StorageCapacity). Required when not creating filesystem for a backup. */
    storage_capacity?:                  any;
    /** (Required) A list of IDs for the subnets that the file system will be accessible from. File systems currently support only one subnet. The file server is also launched in that subnet's Availability Zone. */
    subnet_ids:                         any;
    /** (Optional) The ID of the source backup to create the filesystem from. */
    backup_id?:                         any;
    /** (Optional) S3 URI (with optional prefix) where the root of your Amazon FSx file system is exported. Can only be specified with `import_path` argument and the path must use the same Amazon S3 bucket as specified in `import_path`. Set equal to `import_path` to overwrite files on export. Defaults to `s3://{IMPORT BUCKET}/FSxLustre{CREATION TIMESTAMP}`. Only supported on `PERSISTENT_1` deployment types. */
    export_path?:                       any;
    /** (Optional) S3 URI (with optional prefix) that you're using as the data repository for your FSx for Lustre file system. For example, `s3://example-bucket/optional-prefix/`. Only supported on `PERSISTENT_1` deployment types. */
    import_path?:                       any;
    /** (Optional) For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. Can only be specified with `import_path` argument. Defaults to `1024`. Minimum of `1` and maximum of `512000`. Only supported on `PERSISTENT_1` deployment types. */
    imported_file_chunk_size?:          any;
    /** (Optional) A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces. */
    security_group_ids?:                any;
    /** (Optional) A map of tags to assign to the file system. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                              any;
    /** (Optional) The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone. */
    weekly_maintenance_start_time?:     any;
    /** (Optional) - The filesystem deployment type. One of: `SCRATCH_1`, `SCRATCH_2`, `PERSISTENT_1`, `PERSISTENT_2`. */
    deployment_type?:                   any;
    /** (Optional) ARN for the KMS Key to encrypt the file system at rest, applicable for `PERSISTENT_1` and `PERSISTENT_2` deployment_type. Defaults to an AWS managed KMS Key. */
    kms_key_id?:                        any;
    /** (Optional) - Describes the amount of read and write throughput for each 1 tebibyte of storage, in MB/s/TiB, required for the `PERSISTENT_1` and `PERSISTENT_2` deployment_type. Valid values for `PERSISTENT_1` deployment_type and `SSD` storage_type are 50, 100, 200. Valid values for `PERSISTENT_1` deployment_type and `HDD` storage_type are 12, 40. Valid values for `PERSISTENT_2` deployment_type and ` SSD` storage_type are 125, 250, 500, 1000. */
    per_unit_storage_throughput?:       any;
    /** (Optional) The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 90 days. only valid for `PERSISTENT_1` and `PERSISTENT_2` deployment_type. */
    automatic_backup_retention_days?:   any;
    /** (Optional) - The filesystem storage type. Either `SSD` or `HDD`, defaults to `SSD`. `HDD` is only supported on `PERSISTENT_1` deployment types. */
    storage_type?:                      any;
    /** (Optional) - The type of drive cache used by `PERSISTENT_1` filesystems that are provisioned with `HDD` storage_type. Required for `HDD` storage_type, set to either `READ` or `NONE`. */
    drive_cache_type?:                  any;
    /** (Optional) A recurring daily time, in the format HH:MM. HH is the zero-padded hour of the day (0-23), and MM is the zero-padded minute of the hour. For example, 05:00 specifies 5 AM daily. only valid for `PERSISTENT_1` and `PERSISTENT_2` deployment_type. Requires `automatic_backup_retention_days` to be set. */
    daily_automatic_backup_start_time?: any;
    /** (Optional) How Amazon FSx keeps your file and directory listings up to date as you add or modify objects in your linked S3 bucket. see [Auto Import Data Repo](https://docs.aws.amazon.com/fsx/latest/LustreGuide/autoimport-data-repo.html) for more details. Only supported on `PERSISTENT_1` deployment types. */
    auto_import_policy?:                any;
    /** (Optional) A boolean flag indicating whether tags for the file system should be copied to backups. Applicable for `PERSISTENT_1` and `PERSISTENT_2` deployment_type. The default value is false. */
    copy_tags_to_backups?:              any;
    /** (Optional) Sets the data compression configuration for the file system. Valid values are `LZ4` and `NONE`. Default value is `NONE`. Unsetting this value reverts the compression type back to `NONE`. */
    data_compression_type?:             any;
    /** (Optional) Sets the Lustre version for the file system that you're creating. Valid values are 2.10 for `SCRATCH_1`, `SCRATCH_2` and `PERSISTENT_1` deployment types. Valid values for 2.12 include all deployment types. */
    file_system_type_version?:          any;
    log_configuration?:                 LogConfiguration;
    root_squash_configuration?:         RootSquashConfiguration;
}

export interface LogConfiguration {
    /** (Optional) The Amazon Resource Name (ARN) that specifies the destination of the logs. The name of the Amazon CloudWatch Logs log group must begin with the `/aws/fsx` prefix. If you do not provide a destination, Amazon FSx will create and use a log stream in the CloudWatch Logs `/aws/fsx/lustre` log group. */
    destination: any;
    /** (Optional) Sets which data repository events are logged by Amazon FSx. Valid values are `WARN_ONLY`, `FAILURE_ONLY`, `ERROR_ONLY`, `WARN_ERROR` and `DISABLED`. Default value is `DISABLED`. */
    level:       any;
}

export interface RootSquashConfiguration {
    /** (Optional) When root squash is enabled, you can optionally specify an array of NIDs of clients for which root squash does not apply. A client NID is a Lustre Network Identifier used to uniquely identify a client. You can specify the NID as either a single address or a range of addresses: 1. A single address is described in standard Lustre NID format by specifying the client’s IP address followed by the Lustre network ID (for example, 10.0.1.6@tcp). 2. An address range is described using a dash to separate the range (for example, 10.0.[2-10].[1-255]@tcp). */
    no_squash_nids: any;
    /** (Optional) You enable root squash by setting a user ID (UID) and group ID (GID) for the file system in the format UID:GID (for example, 365534:65534). The UID and GID values can range from 0 to 4294967294. */
    root_squash:    any;
}