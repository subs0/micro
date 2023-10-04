export interface DBProxyTarget {
    resource: Resource[];
}

export interface Resource {
    db_proxy_target: DBProxyTargetClass;
}

export interface DBProxyTargetClass {
    /** (Required, Forces new resource) The name of the DB proxy. */
    db_proxy_name?:          any;
    /** (Required, Forces new resource) The name of the target group. */
    target_group_name?:      any;
    /** (Optional, Forces new resource) DB instance identifier. */
    db_instance_identifier?: any;
    /** (Optional, Forces new resource) DB cluster identifier. */
    db_cluster_identifier?:  any;
}