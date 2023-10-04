export interface DmsReplicationTask {
    data: Datum[];
}

export interface Datum {
    dms_replication_task: DmsReplicationTaskClass;
}

export interface DmsReplicationTaskClass {
    /** (Required) The replication task identifier. */
    replication_task_id: any;
}