export interface EFSFileSystem {
    resource: Resource[];
}

export interface Resource {
    efs_file_system: EFSFileSystemClass;
}

export interface EFSFileSystemClass {
    /** (Optional) the AWS Availability Zone in which to create the file system. Used to create a file system that uses One Zone storage classes. See [user guide](https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html) for more information. */
    availability_zone_name?:              any;
    /** (Optional) A unique name (a maximum of 64 characters are allowed) */
    creation_token?:                      any;
    /** (Optional) If true, the disk will be encrypted. */
    encrypted?:                           any;
    /** (Optional) The ARN for the KMS encryption key. When specifying kms_key_id, encrypted needs to be set to true. */
    kms_key_id?:                          any;
    /** (Optional) A file system [lifecycle policy](https://docs.aws.amazon.com/efs/latest/ug/API_LifecyclePolicy.html) object (documented below). */
    lifecycle_policy?:                    any;
    /** (Optional) The file system performance mode. Can be either `"generalPurpose"` or `"maxIO"` (Default: `"generalPurpose"`). */
    performance_mode?:                    any;
    /** (Optional) The throughput, measured in MiB/s, that you want to provision for the file system. Only applicable with `throughput_mode` set to `provisioned`. */
    provisioned_throughput_in_mibps?:     any;
    /** (Optional) A map of tags to assign to the file system. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                any;
    /** (Optional) Throughput mode for the file system. Defaults to `bursting`. Valid values: `bursting`, `provisioned`, or `elastic`. When using `provisioned`, also set `provisioned_throughput_in_mibps`. */
    throughput_mode?:                     any;
    /** (Optional) Indicates how long it takes to transition files to the IA storage class. Valid values: `AFTER_1_DAY`, `AFTER_7_DAYS`, `AFTER_14_DAYS`, `AFTER_30_DAYS`, `AFTER_60_DAYS`, or `AFTER_90_DAYS`. */
    transition_to_ia?:                    any;
    /** (Optional) Describes the policy used to transition a file from infequent access storage to primary storage. Valid values: `AFTER_1_ACCESS`. */
    transition_to_primary_storage_class?: any;
}