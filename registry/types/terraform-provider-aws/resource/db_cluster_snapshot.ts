export interface DBClusterSnapshot {
    resource: Resource[];
}

export interface Resource {
    db_cluster_snapshot: DBClusterSnapshotClass;
}

export interface DBClusterSnapshotClass {
    /** (Required) The DB Cluster Identifier from which to take the snapshot. */
    db_cluster_identifier:          any;
    /** (Required) The Identifier for the snapshot. */
    db_cluster_snapshot_identifier: any;
    /** (Optional) A map of tags to assign to the DB cluster. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
}