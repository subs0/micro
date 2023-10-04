export interface EbsSnapshot {
    resource: Resource[];
}

export interface Resource {
    ebs_snapshot: EbsSnapshotClass;
}

export interface EbsSnapshotClass {
    /** (Required) The Volume ID of which to make a snapshot. */
    volume_id:               any;
    /** (Optional) A description of what the snapshot is. */
    description?:            any;
    /** (Optional) The Amazon Resource Name (ARN) of the Outpost on which to create a local snapshot. */
    outpost_arn?:            any;
    /** (Optional) The name of the storage tier. Valid values are `archive` and `standard`. Default value is `standard`. */
    storage_tier?:           any;
    /** (Optional) Indicates whether to permanently restore an archived snapshot. */
    permanent_restore?:      any;
    /** (Optional) Specifies the number of days for which to temporarily restore an archived snapshot. Required for temporary restores only. The snapshot will be automatically re-archived after this period. */
    temporary_restore_days?: any;
    /** (Optional) A map of tags to assign to the snapshot. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                   any;
}