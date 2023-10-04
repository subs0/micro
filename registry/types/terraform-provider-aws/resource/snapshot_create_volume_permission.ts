export interface SnapshotCreateVolumePermission {
    resource: Resource[];
}

export interface Resource {
    snapshot_create_volume_permission: SnapshotCreateVolumePermissionClass;
}

export interface SnapshotCreateVolumePermissionClass {
    /** (Required) A snapshot ID */
    snapshot_id: any;
    /** (Required) An AWS Account ID to add create volume permissions. The AWS Account cannot be the snapshot's owner */
    account_id:  any;
}