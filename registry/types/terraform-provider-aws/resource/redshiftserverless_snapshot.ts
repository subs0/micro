export interface RedshiftserverlessSnapshot {
    resource: Resource[];
}

export interface Resource {
    redshiftserverless_snapshot: RedshiftserverlessSnapshotClass;
}

export interface RedshiftserverlessSnapshotClass {
    /** (Required) The namespace to create a snapshot for. */
    namespace_name:    any;
    /** (Required) The name of the snapshot. */
    snapshot_name:     any;
    /** (Optional) How long to retain the created snapshot. Default value is `-1`. */
    retention_period?: any;
}