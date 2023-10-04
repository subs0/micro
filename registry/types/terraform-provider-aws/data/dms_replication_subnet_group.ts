export interface DmsReplicationSubnetGroup {
    data: Datum[];
}

export interface Datum {
    dms_replication_subnet_group: DmsReplicationSubnetGroupClass;
}

export interface DmsReplicationSubnetGroupClass {
    /** (Required) Name for the replication subnet group. This value is stored as a lowercase string. It must contain no more than 255 alphanumeric characters, periods, spaces, underscores, or hyphens and cannot be `default`. */
    replication_subnet_group_id: any;
}