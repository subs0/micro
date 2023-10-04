export interface OpsworksRDSDBInstance {
    resource: Resource[];
}

export interface Resource {
    opsworks_rds_db_instance: OpsworksRDSDBInstanceClass;
}

export interface OpsworksRDSDBInstanceClass {
    /** (Required) The stack to register a db instance for. Changing this will force a new resource. */
    stack_id:            any;
    /** (Required) The db instance to register for this stack. Changing this will force a new resource. */
    rds_db_instance_arn: any;
    /** (Required) A db username */
    db_user:             any;
    /** (Required) A db password */
    db_password:         any;
}