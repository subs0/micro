export interface EbsSnapshotImport {
    resource: Resource[];
}

export interface Resource {
    ebs_snapshot_import: EbsSnapshotImportClass;
}

export interface EbsSnapshotImportClass {
    /** (Optional) The client-specific data. Detailed below. */
    client_data?:            any;
    /** (Optional) The description of the disk image being imported. */
    description?:            any;
    /** (Required) Information about the disk container. Detailed below. */
    disk_container:          any;
    /** (Optional) Specifies whether the destination snapshot of the imported image should be encrypted. The default KMS key for EBS is used unless you specify a non-default KMS key using KmsKeyId. */
    encrypted?:              any;
    /** (Optional) An identifier for the symmetric KMS key to use when creating the encrypted snapshot. This parameter is only required if you want to use a non-default KMS key; if this parameter is not specified, the default KMS key for EBS is used. If a KmsKeyId is specified, the Encrypted flag must also be set. */
    kms_key_id?:             any;
    /** (Optional) The name of the storage tier. Valid values are `archive` and `standard`. Default value is `standard`. */
    storage_tier?:           any;
    /** (Optional) Indicates whether to permanently restore an archived snapshot. */
    permanent_restore?:      any;
    /** (Optional) Specifies the number of days for which to temporarily restore an archived snapshot. Required for temporary restores only. The snapshot will be automatically re-archived after this period. */
    temporary_restore_days?: any;
    /** (Optional) The name of the IAM Role the VM Import/Export service will assume. This role needs certain permissions. See https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-role. Default: `vmimport` */
    role_name?:              any;
    /** (Optional) A map of tags to assign to the snapshot. */
    tags?:                   any;
    /** (Optional) A user-defined comment about the disk upload. */
    comment?:                any;
    /** (Optional) The time that the disk upload starts. */
    upload_start?:           any;
    /** (Optional) The time that the disk upload ends. */
    upload_end?:             any;
    /** (Optional) The size of the uploaded disk image, in GiB. */
    upload_size?:            any;
    /** (Required) The format of the disk image being imported. One of `VHD` or `VMDK`. */
    format:                  any;
    /** (Optional) The URL to the Amazon S3-based disk image being imported. It can either be a https URL (https://..) or an Amazon S3 URL (s3://..). One of `url` or `user_bucket` must be set. */
    url?:                    any;
    /** (Optional) The Amazon S3 bucket for the disk image. One of `url` or `user_bucket` must be set. Detailed below. */
    user_bucket?:            any;
    /** The name of the Amazon S3 bucket where the disk image is located. */
    s3_bucket?:              any;
    /** The file name of the disk image. */
    s3_key?:                 any;
}