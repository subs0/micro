export interface RDSOrderableDBInstance {
    data: Datum[];
}

export interface Datum {
    rds_orderable_db_instance: RDSOrderableDBInstanceClass;
}

export interface RDSOrderableDBInstanceClass {
    /** (Optional) Availability zone group. */
    availability_zone_group?:              any;
    /** (Required) DB engine. Engine values include `aurora`, `aurora-mysql`, `aurora-postgresql`, `docdb`, `mariadb`, `mysql`, `neptune`, `oracle-ee`, `oracle-se`, `oracle-se1`, `oracle-se2`, `postgres`, `sqlserver-ee`, `sqlserver-ex`, `sqlserver-se`, and `sqlserver-web`. */
    engine:                                any;
    /** (Optional) Version of the DB engine. If none is provided, the AWS-defined default version will be used. */
    engine_version?:                       any;
    /** (Optional) DB instance class. Examples of classes are `db.m3.2xlarge`, `db.t2.small`, and `db.m3.medium`. */
    instance_class?:                       any;
    /** (Optional) License model. Examples of license models are `general-public-license`, `bring-your-own-license`, and `amazon-license`. */
    license_model?:                        any;
    /** (Optional) Ordered list of preferred RDS DB instance classes. The first match in this list will be returned. If no preferred matches are found and the original search returned more than one result, an error is returned. */
    preferred_instance_classes?:           any;
    /** (Optional) Ordered list of preferred RDS DB instance engine versions. The first match in this list will be returned. If no preferred matches are found and the original search returned more than one result, an error is returned. */
    preferred_engine_versions?:            any;
    /** (Optional) Storage types. Examples of storage types are `standard`, `io1`, `gp2`, and `aurora`. */
    storage_type?:                         any;
    /** (Optional) Enable this to ensure a DB instance supports Enhanced Monitoring at intervals from 1 to 60 seconds. */
    supports_enhanced_monitoring?:         any;
    /** (Optional) Enable this to ensure a DB instance supports Aurora global databases with a specific combination of other DB engine attributes. */
    supports_global_databases?:            any;
    /** (Optional) Enable this to ensure a DB instance supports IAM database authentication. */
    supports_iam_database_authentication?: any;
    /** (Optional) Enable this to ensure a DB instance supports provisioned IOPS. */
    supports_iops?:                        any;
    /** (Optional) Enable this to ensure a DB instance supports Kerberos Authentication. */
    supports_kerberos_authentication?:     any;
    /** (Optional) Enable this to ensure a DB instance supports Performance Insights. */
    supports_performance_insights?:        any;
    /** (Optional) Enable this to ensure Amazon RDS can automatically scale storage for DB instances that use the specified DB instance class. */
    supports_storage_autoscaling?:         any;
    /** (Optional) Enable this to ensure a DB instance supports encrypted storage. */
    supports_storage_encryption?:          any;
    /** (Optional) Boolean that indicates whether to show only VPC or non-VPC offerings. */
    vpc?:                                  any;
}