export interface DBProxy {
    resource: Resource[];
}

export interface Resource {
    db_proxy: DBProxyClass;
}

export interface DBProxyClass {
    /** (Required) The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens. */
    name:                       any;
    /** (Required) Configuration block(s) with authorization mechanisms to connect to the associated instances or clusters. Described below. */
    auth:                       any;
    /** (Optional) Whether the proxy includes detailed information about SQL statements in its logs. This information helps you to debug issues involving SQL behavior or the performance and scalability of the proxy connections. The debug information includes the text of SQL statements that you submit through the proxy. Thus, only enable this setting when needed for debugging, and only when you have security measures in place to safeguard any sensitive information that appears in the logs. */
    debug_logging?:             any;
    /** (Required, Forces new resource) The kinds of databases that the proxy can connect to. This value determines which database network protocol the proxy recognizes when it interprets network traffic to and from the database. For Aurora MySQL, RDS for MariaDB, and RDS for MySQL databases, specify `MYSQL`. For Aurora PostgreSQL and RDS for PostgreSQL databases, specify `POSTGRESQL`. For RDS for Microsoft SQL Server, specify `SQLSERVER`. Valid values are `MYSQL`, `POSTGRESQL`, and `SQLSERVER`. */
    engine_family?:             any;
    /** (Optional) The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this value higher or lower than the connection timeout limit for the associated database. */
    idle_client_timeout?:       any;
    /** (Optional) A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy. By enabling this setting, you can enforce encrypted TLS connections to the proxy. */
    require_tls?:               any;
    /** (Required) The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager. */
    role_arn:                   any;
    /** (Optional) One or more VPC security group IDs to associate with the new proxy. */
    vpc_security_group_ids?:    any;
    /** (Required) One or more VPC subnet IDs to associate with the new proxy. */
    vpc_subnet_ids:             any;
    /** (Optional) A mapping of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
    /** (Optional) The type of authentication that the proxy uses for connections from the proxy to the underlying database. One of `SECRETS`. */
    auth_scheme?:               any;
    /** (Optional) The type of authentication the proxy uses for connections from clients. Valid values are `MYSQL_NATIVE_PASSWORD`, `POSTGRES_SCRAM_SHA_256`, `POSTGRES_MD5`, and `SQL_SERVER_AUTHENTICATION`. */
    client_password_auth_type?: any;
    /** (Optional) A user-specified description about the authentication used by a proxy to log in as a specific database user. */
    description?:               any;
    /** (Optional) Whether to require or disallow AWS Identity and Access Management (IAM) authentication for connections to the proxy. One of `DISABLED`, `REQUIRED`. */
    iam_auth?:                  any;
    /** (Optional) The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager. */
    secret_arn?:                any;
    /** (Optional) The name of the database user to which the proxy connects. */
    username?:                  any;
}