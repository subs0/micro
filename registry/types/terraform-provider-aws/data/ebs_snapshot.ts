export interface EbsSnapshot {
    data: Datum[];
}

export interface Datum {
    ebs_snapshot: EbsSnapshotClass;
}

export interface EbsSnapshotClass {
    /** (Optional) If more than one result is returned, use the most recent snapshot. */
    most_recent?:            any;
    /** (Optional) Returns the snapshots owned by the specified owner id. Multiple owners can be specified. */
    owners?:                 any;
    /** (Optional) Returns information on a specific snapshot_id. */
    snapshot_ids?:           any;
    /** (Optional) One or more AWS accounts IDs that can create volumes from the snapshot. */
    restorable_by_user_ids?: any;
    /** (Optional) One or more name/value pairs to filter off of. There are */
    filter?:                 any;
}