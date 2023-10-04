export interface DBSubnetGroup {
    data: Datum[];
}

export interface Datum {
    db_subnet_group: DBSubnetGroupClass;
}

export interface DBSubnetGroupClass {
    /** (Required) Name of the RDS database subnet group. */
    name: any;
}