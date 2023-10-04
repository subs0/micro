export interface StoragegatewayTapePool {
    resource: Resource[];
}

export interface Resource {
    storagegateway_tape_pool: StoragegatewayTapePoolClass;
}

export interface StoragegatewayTapePoolClass {
    /** (Required) The name of the new custom tape pool. */
    pool_name:                    any;
    /** (Required) The storage class that is associated with the new custom pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class that corresponds to the pool. Possible values are `DEEP_ARCHIVE` or `GLACIER`. */
    storage_class:                any;
    /** (Required) Tape retention lock can be configured in two modes. When configured in governance mode, AWS accounts with specific IAM permissions are authorized to remove the tape retention lock from archived virtual tapes. When configured in compliance mode, the tape retention lock cannot be removed by any user, including the root AWS account. Possible values are `COMPLIANCE`, `GOVERNANCE`, and `NONE`. Default value is `NONE`. */
    retention_lock_type:          any;
    /** (Optional) Tape retention lock time is set in days. Tape retention lock can be enabled for up to 100 years (36,500 days). Default value is 0. */
    retention_lock_time_in_days?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                        any;
}