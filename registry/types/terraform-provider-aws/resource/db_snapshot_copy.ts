export interface DBSnapshotCopy {
    resource: Resource[];
}

export interface Resource {
    db_snapshot_copy: DBSnapshotCopyClass;
}

export interface DBSnapshotCopyClass {
    /** (Optional) Whether to copy existing tags. Defaults to `false`. */
    copy_tags?:                       any;
    /** (Optional) The Destination region to place snapshot copy. */
    destination_region?:              any;
    /** (Optional) KMS key ID. */
    kms_key_id?:                      any;
    /** (Optional) he URL that contains a Signature Version 4 signed request. */
    presigned_url?:                   any;
    /** (Required) Snapshot identifier of the source snapshot. */
    source_db_snapshot_identifier:    any;
    /** (Optional) The external custom Availability Zone. */
    target_custom_availability_zone?: any;
    /** (Required) The Identifier for the snapshot. */
    target_db_snapshot_identifier:    any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
}