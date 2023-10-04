export interface RedshiftClusterSnapshot {
    resource: Resource[];
}

export interface Resource {
    redshift_cluster_snapshot: RedshiftClusterSnapshotClass;
}

export interface RedshiftClusterSnapshotClass {
    /** (Required, Forces new resource) The cluster identifier for which you want a snapshot. */
    cluster_identifier?:               any;
    /** (Required, Forces new resource) A unique identifier for the snapshot that you are requesting. This identifier must be unique for all snapshots within the Amazon Web Services account. */
    snapshot_identifier?:              any;
    /** (Optional) The number of days that a manual snapshot is retained. If the value is `-1`, the manual snapshot is retained indefinitely. Valid values are -1 and between `1` and `3653`. */
    manual_snapshot_retention_period?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                             any;
}