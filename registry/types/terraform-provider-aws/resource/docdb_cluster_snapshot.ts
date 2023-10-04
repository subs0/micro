export interface DocdbClusterSnapshot {
    resource: Resource[];
}

export interface Resource {
    docdb_cluster_snapshot: DocdbClusterSnapshotClass;
}

export interface DocdbClusterSnapshotClass {
    /** (Required) The DocumentDB Cluster Identifier from which to take the snapshot. */
    db_cluster_identifier:          any;
    /** (Required) The Identifier for the snapshot. */
    db_cluster_snapshot_identifier: any;
}