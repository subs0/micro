export interface RedshiftClusterCredentials {
    data: Datum[];
}

export interface Datum {
    redshift_cluster_credentials: RedshiftClusterCredentialsClass;
}

export interface RedshiftClusterCredentialsClass {
    /** (Optional)  Create a database user with the name specified for the user named in `db_user` if one does not exist. */
    auto_create?:       any;
    /** (Required) Unique identifier of the cluster that contains the database for which your are requesting credentials. */
    cluster_identifier: any;
    /** (Optional) Name of a database that DbUser is authorized to log on to. If `db_name` is not specified, `db_user` can log on to any existing database. */
    db_name?:           any;
    /** (Required) Name of a database user. If a user name matching `db_user` exists in the database, the temporary user credentials have the same permissions as the  existing user. If `db_user` doesn't exist in the database and `auto_create` is `True`, a new user is created using the value for `db_user` with `PUBLIC` permissions.  If a database user matching the value for `db_user` doesn't exist and `not` is `False`, then the command succeeds but the connection attempt will fail because the user doesn't exist in the database. */
    db_user:            any;
    /** (Optional) List of the names of existing database groups that the user named in `db_user` will join for the current session, in addition to any group memberships for an existing user. If not specified, a new user is added only to `PUBLIC`. */
    db_groups?:         any;
    /** (Optional) The number of seconds until the returned temporary password expires. Valid values are between `900` and `3600`. Default value is `900`. */
    duration_seconds?:  any;
}