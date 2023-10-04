export interface EbsSnapshotCopy {
    resource: Resource[];
}

export interface Resource {
    ebs_snapshot_copy: EbsSnapshotCopyClass;
}

export interface EbsSnapshotCopyClass {
    /** (Optional) A description of what the snapshot is. */
    description?:            any;
    /** Whether the snapshot is encrypted. */
    encrypted?:              any;
    /** The ARN for the KMS encryption key. */
    kms_key_id?:             any;
    /** (Optional) The name of the storage tier. Valid values are `archive` and `standard`. Default value is `standard`. */
    storage_tier?:           any;
    /** (Optional) Indicates whether to permanently restore an archived snapshot. */
    permanent_restore?:      any;
    /** (Optional) Specifies the number of days for which to temporarily restore an archived snapshot. Required for temporary restores only. The snapshot will be automatically re-archived after this period. */
    temporary_restore_days?: any;
    /** A map of tags for the snapshot. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                   any;
}