export interface DocdbOrderableDBInstance {
    data: Datum[];
}

export interface Datum {
    docdb_orderable_db_instance: DocdbOrderableDBInstanceClass;
}

export interface DocdbOrderableDBInstanceClass {
    /** (Optional) DB engine. Default: `docdb` */
    engine?:                     any;
    /** (Optional) Version of the DB engine. */
    engine_version?:             any;
    /** (Optional) DB instance class. Examples of classes are `db.r5.12xlarge`, `db.r5.24xlarge`, `db.r5.2xlarge`, `db.r5.4xlarge`, `db.r5.large`, `db.r5.xlarge`, and `db.t3.medium`. (Conflicts with `preferred_instance_classes`.) */
    instance_class?:             any;
    /** (Optional) License model. Default: `na` */
    license_model?:              any;
    /** (Optional) Ordered list of preferred DocumentDB DB instance classes. The first match in this list will be returned. If no preferred matches are found and the original search returned more than one result, an error is returned. (Conflicts with `instance_class`.) */
    preferred_instance_classes?: any;
    /** (Optional) Enable to show only VPC. */
    vpc?:                        any;
}