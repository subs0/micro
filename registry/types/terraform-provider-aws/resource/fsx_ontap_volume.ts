export interface FsxOntapVolume {
    resource: Resource[];
}

export interface Resource {
    fsx_ontap_volume: FsxOntapVolumeClass;
}

export interface FsxOntapVolumeClass {
    /** (Required) Specifies the tiering policy for the ONTAP volume for moving data to the capacity pool storage. Valid values are `SNAPSHOT_ONLY`, `AUTO`, `ALL`, `NONE`. Default value is `SNAPSHOT_ONLY`. */
    name:                                  any;
    /** (Optional) Setting this to `true` allows a SnapLock administrator to delete an FSx for ONTAP SnapLock Enterprise volume with unexpired write once, read many (WORM) files. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`. */
    bypass_snaplock_enterprise_retention?: any;
    /** (Optional) A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to `false`. */
    copy_tags_to_backups?:                 any;
    /** (Optional) Specifies the location in the storage virtual machine's namespace where the volume is mounted. The junction_path must have a leading forward slash, such as `/vol3` */
    junction_path?:                        any;
    /** (Optional) Specifies the type of volume, valid values are `RW`, `DP`. Default value is `RW`. These can be set by the ONTAP CLI or API. This setting is used as part of migration and replication [Migrating to Amazon FSx for NetApp ONTAP](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/migrating-fsx-ontap.html) */
    ontap_volume_type?:                    any;
    /** (Optional) Specifies the volume security style, Valid values are `UNIX`, `NTFS`, and `MIXED`. */
    security_style?:                       any;
    /** (Required) Specifies the size of the volume, in megabytes (MB), that you are creating. */
    size_in_megabytes:                     any;
    /** (Optional) When enabled, will skip the default final backup taken when the volume is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`. */
    skip_final_backup?:                    any;
    /** (Optional) The SnapLock configuration for an FSx for ONTAP volume. See [SnapLock Configuration](#snaplock-configuration) below. */
    snaplock_configuration?:               any;
    /** (Optional) Specifies the snapshot policy for the volume. See [snapshot policies](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies) in the Amazon FSx ONTAP User Guide */
    snapshot_policy?:                      any;
    /** (Optional) Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume. */
    storage_efficiency_enabled?:           any;
    /** (Required) Specifies the storage virtual machine in which to create the volume. */
    storage_virtual_machine_id:            any;
    /** (Optional) A map of tags to assign to the volume. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                 any;
    /** (Optional) The data tiering policy for an FSx for ONTAP volume. See [Tiering Policy](#tiering-policy) below. */
    tiering_policy?:                       any;
    /** (Optional) Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume. The default value is `false`. */
    audit_log_volume?:                     any;
    /** (Optional) The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume. See [Autocommit Period](#autocommit-period) below. */
    autocommit_period?:                    any;
    /** (Optional) Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume. Valid values: `DISABLED`, `ENABLED`, `PERMANENTLY_DISABLED`. The default value is `DISABLED`. */
    privileged_delete?:                    any;
    /** (Optional) The retention period of an FSx for ONTAP SnapLock volume. See [SnapLock Retention Period](#snaplock-retention-period) below. */
    retention_period?:                     any;
    /** (Required) Specifies the retention mode of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed. Valid values: `COMPLIANCE`, `ENTERPRISE`. */
    snaplock_type:                         any;
    /** (Optional) Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume. The default value is `false`. */
    volume_append_mode_enabled?:           any;
    /** (Required) The type of time for the retention period of an FSx for ONTAP SnapLock volume. Set it to one of the valid types. If you set it to `INFINITE`, the files are retained forever. If you set it to `UNSPECIFIED`, the files are retained until you set an explicit retention period. Valid values: `SECONDS`, `MINUTES`, `HOURS`, `DAYS`, `MONTHS`, `YEARS`, `INFINITE`, `UNSPECIFIED`. */
    type:                                  any;
    /** (Optional) The amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. */
    value?:                                any;
    /** (Required) The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume. The default retention period must be greater than or equal to the minimum retention period and less than or equal to the maximum retention period. See [Retention Period](#retention-period) below. */
    default_retention:                     any;
    /** (Required) The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. See [Retention Period](#retention-period) below. */
    maximum_retention:                     any;
    /** (Required) The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. See [Retention Period](#retention-period) below. */
    minimum_retention:                     any;
    /** (Optional) Specifies the number of days that user data in a volume must remain inactive before it is considered "cold" and moved to the capacity pool. Used with `AUTO` and `SNAPSHOT_ONLY` tiering policies only. Valid values are whole numbers between 2 and 183. Default values are 31 days for `AUTO` and 2 days for `SNAPSHOT_ONLY`. */
    cooling_period?:                       any;
}