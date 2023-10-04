export interface RedshiftdataStatement {
    resource: Resource[];
}

export interface Resource {
    redshiftdata_statement: RedshiftdataStatementClass;
}

export interface RedshiftdataStatementClass {
    /** (Required) The name of the database. */
    database:            any;
    /** (Required) The SQL statement text to run. */
    sql:                 any;
    /** (Optional) The cluster identifier. This parameter is required when connecting to a cluster and authenticating using either Secrets Manager or temporary credentials. */
    cluster_identifier?: any;
    /** (Optional) The database user name. */
    db_user?:            any;
    /** (Optional) The name or ARN of the secret that enables access to the database. */
    secret_arn?:         any;
    /** (Optional) The name of the SQL statement. You can name the SQL statement when you create it to identify the query. */
    statement_name?:     any;
    /** (Optional) A value that indicates whether to send an event to the Amazon EventBridge event bus after the SQL statement runs. */
    with_event?:         any;
    /** (Optional) The serverless workgroup name. This parameter is required when connecting to a serverless workgroup and authenticating using either Secrets Manager or temporary credentials. */
    workgroup_name?:     any;
}