export interface DBInstance {
    data: Datum[];
}

export interface Datum {
    db_instance: DBInstanceClass;
}

export interface DBInstanceClass {
    /** (Optional) Name of the RDS instance. */
    db_instance_identifier?: any;
    /** (Optional) Map of tags, each pair of which must exactly match a pair on the desired instance. */
    tags?:                   any;
}