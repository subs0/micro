export interface DBClusterSnapshot {
    data: Datum[];
}

export interface Datum {
    db_cluster_snapshot: DBClusterSnapshotClass;
}

export interface DBClusterSnapshotClass {
    /** (Optional) If more than one result is returned, use the most recent Snapshot. */
    most_recent?:                    any;
    /** (Optional) Returns the list of snapshots created by the specific db_cluster */
    db_cluster_identifier?:          any;
    /** (Optional) Returns information on a specific snapshot_id. */
    db_cluster_snapshot_identifier?: any;
    /** (Optional) Type of snapshots to be returned. If you don't specify a SnapshotType */
    snapshot_type?:                  any;
    /** (Optional) Set this value to true to include shared manual DB Cluster Snapshots from other */
    include_shared?:                 any;
    /** (Optional) Set this value to true to include manual DB Cluster Snapshots that are public and can be */
    include_public?:                 any;
    /** (Optional) Mapping of tags, each pair of which must exactly match */
    tags?:                           any;
}