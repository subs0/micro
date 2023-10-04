export interface EbsSnapshotIDS {
    data: Datum[];
}

export interface Datum {
    ebs_snapshot_ids: EbsSnapshotIDSClass;
}

export interface EbsSnapshotIDSClass {
    /** (Optional) Returns the snapshots owned by the specified owner id. Multiple owners can be specified. */
    owners?:                 any;
    /** (Optional) One or more AWS accounts IDs that can create volumes from the snapshot. */
    restorable_by_user_ids?: any;
    /** (Optional) One or more name/value pairs to filter off of. There are */
    filter?:                 any;
}