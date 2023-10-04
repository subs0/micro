export interface DBSnapshot {
    data: Datum[];
}

export interface Datum {
    db_snapshot: DBSnapshotClass;
}

export interface DBSnapshotClass {
    /** (Optional) If more than one result is returned, use the most */
    most_recent?:            any;
    /** (Optional) Returns the list of snapshots created by the specific db_instance */
    db_instance_identifier?: any;
    /** (Optional) Returns information on a specific snapshot_id. */
    db_snapshot_identifier?: any;
    /** (Optional) Type of snapshots to be returned. If you don't specify a SnapshotType */
    snapshot_type?:          any;
    /** (Optional) Set this value to true to include shared manual DB snapshots from other */
    include_shared?:         any;
    /** (Optional) Set this value to true to include manual DB snapshots that are public and can be */
    include_public?:         any;
}