export interface SsmincidentsReplicationSet {
    data: Datum[];
}

export interface Datum {
    ssmincidents_replication_set: SsmincidentsReplicationSetClass;
}

export interface SsmincidentsReplicationSetClass {
    "No arguments are required."?: any;
}