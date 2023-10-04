export interface FsxOpenzfsSnapshot {
    data: Datum[];
}

export interface Datum {
    fsx_openzfs_snapshot: FsxOpenzfsSnapshotClass;
}

export interface FsxOpenzfsSnapshotClass {
    /** (Optional) If more than one result is returned, use the most recent snapshot. */
    most_recent?:  any;
    /** (Optional) Returns information on a specific snapshot_id. */
    snapshot_ids?: any;
    /** (Optional) One or more name/value pairs to filter off of. The */
    filter?:       any;
}