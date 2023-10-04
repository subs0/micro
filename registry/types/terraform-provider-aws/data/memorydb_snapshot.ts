export interface MemorydbSnapshot {
    data: Datum[];
}

export interface Datum {
    memorydb_snapshot: MemorydbSnapshotClass;
}

export interface MemorydbSnapshotClass {
    /** (Required) Name of the snapshot. */
    name: any;
}