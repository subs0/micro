export interface RedshiftSnapshotCopyGrant {
    resource: Resource[];
}

export interface Resource {
    redshift_snapshot_copy_grant: RedshiftSnapshotCopyGrantClass;
}

export interface RedshiftSnapshotCopyGrantClass {
    /** (Required, Forces new resource) A friendly name for identifying the grant. */
    snapshot_copy_grant_name?: any;
    /** (Optional, Forces new resource) The unique identifier for the customer master key (CMK) that the grant applies to. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. To specify a CMK in a different AWS account, you must use the key ARN. If not specified, the default key is used. */
    kms_key_id?:               any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
}