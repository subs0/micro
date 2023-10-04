export interface MemorydbSnapshot {
    resource: Resource[];
}

export interface Resource {
    memorydb_snapshot: MemorydbSnapshotClass;
}

export interface MemorydbSnapshotClass {
    /** (Required, Forces new resource) Name of the MemoryDB cluster to take a snapshot of. */
    cluster_name?: any;
    /** (Optional, Forces new resource) Name of the snapshot. If omitted, Terraform will assign a random, unique name. Conflicts with `name_prefix`. */
    name?:         any;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:  any;
    /** (Optional, Forces new resource) ARN of the KMS key used to encrypt the snapshot at rest. */
    kms_key_arn?:  any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
}