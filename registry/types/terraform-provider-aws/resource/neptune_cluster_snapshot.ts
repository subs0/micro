export interface NeptuneClusterSnapshot {
    resource: Resource[];
}

export interface Resource {
    neptune_cluster_snapshot: NeptuneClusterSnapshotClass;
}

export interface NeptuneClusterSnapshotClass {
    /** (Required) The DB Cluster Identifier from which to take the snapshot. */
    db_cluster_identifier:          any;
    /** (Required) The Identifier for the snapshot. */
    db_cluster_snapshot_identifier: any;
}