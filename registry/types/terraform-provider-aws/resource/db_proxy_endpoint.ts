export interface DBProxyEndpoint {
    resource: Resource[];
}

export interface Resource {
    db_proxy_endpoint: DBProxyEndpointClass;
}

export interface DBProxyEndpointClass {
    /** (Required) The identifier for the proxy endpoint. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens. */
    db_proxy_endpoint_name:  any;
    /** (Required) The name of the DB proxy associated with the DB proxy endpoint that you create. */
    db_proxy_name:           any;
    /** (Required) One or more VPC subnet IDs to associate with the new proxy. */
    vpc_subnet_ids:          any;
    /** (Optional) One or more VPC security group IDs to associate with the new proxy. */
    vpc_security_group_ids?: any;
    /** (Optional) Indicates whether the DB proxy endpoint can be used for read/write or read-only operations. The default is `READ_WRITE`. Valid values are `READ_WRITE` and `READ_ONLY`. */
    target_role?:            any;
    /** (Optional) A mapping of tags to assign to the resource. */
    tags?:                   any;
}