export interface NeptuneOrderableDBInstance {
    data: Datum[];
}

export interface Datum {
    neptune_orderable_db_instance: NeptuneOrderableDBInstanceClass;
}

export interface NeptuneOrderableDBInstanceClass {
    /** (Optional) DB engine. (Default: `neptune`) */
    engine?:                     any;
    /** (Optional) Version of the DB engine. For example, `1.0.1.0`, `1.0.1.2`, `1.0.2.2`, and `1.0.3.0`. */
    engine_version?:             any;
    /** (Optional) DB instance class. Examples of classes are `db.r5.large`, `db.r5.xlarge`, `db.r4.large`, `db.r5.4xlarge`, `db.r5.12xlarge`, `db.r4.xlarge`, and `db.t3.medium`. */
    instance_class?:             any;
    /** (Optional) License model. (Default: `amazon-license`) */
    license_model?:              any;
    /** (Optional) Ordered list of preferred Neptune DB instance classes. The first match in this list will be returned. If no preferred matches are found and the original search returned more than one result, an error is returned. */
    preferred_instance_classes?: any;
    /** (Optional) Enable to show only VPC offerings. */
    vpc?:                        any;
}