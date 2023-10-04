export interface DmsReplicationInstance {
    data: Datum[];
}

export interface Datum {
    dms_replication_instance: DmsReplicationInstanceClass;
}

export interface DmsReplicationInstanceClass {
    /** (Required) The replication instance identifier. */
    replication_instance_id: any;
}