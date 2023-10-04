export interface DBSnapshot {
    resource: Resource[];
}

export interface Resource {
    db_snapshot: DBSnapshotClass;
}

export interface DBSnapshotClass {
    /** (Required) The DB Instance Identifier from which to take the snapshot. */
    db_instance_identifier: any;
    /** (Required) The Identifier for the snapshot. */
    db_snapshot_identifier: any;
    /** (Optional) List of AWS Account ids to share snapshot with, use `all` to make snaphot public. */
    shared_accounts?:       any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
}