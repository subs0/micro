export interface MqBroker {
    resource: Resource[];
}

export interface Resource {
    mq_broker: MqBrokerClass;
}

export interface MqBrokerClass {
    /** (Required) Name of the broker. */
    broker_name:                    any;
    /** (Required) Type of broker engine. Valid values are `ActiveMQ` and `RabbitMQ`. */
    engine_type:                    any;
    /** (Required) Version of the broker engine. See the [AmazonMQ Broker Engine docs](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html) for supported versions. For example, `5.15.0`. */
    engine_version:                 any;
    /** (Required) Broker's instance type. For example, `mq.t3.micro`, `mq.m5.large`. */
    host_instance_type:             any;
    user:                           User;
    /** (Optional) Specifies whether any broker modifications are applied immediately, or during the next maintenance window. Default is `false`. */
    apply_immediately?:             any;
    /** (Optional) Authentication strategy used to secure the broker. Valid values are `simple` and `ldap`. `ldap` is not supported for `engine_type` `RabbitMQ`. */
    authentication_strategy?:       any;
    /** (Optional) Whether to automatically upgrade to new minor versions of brokers as Amazon MQ makes releases available. */
    auto_minor_version_upgrade?:    any;
    configuration?:                 Configuration;
    /** (Optional) Deployment mode of the broker. Valid values are `SINGLE_INSTANCE`, `ACTIVE_STANDBY_MULTI_AZ`, and `CLUSTER_MULTI_AZ`. Default is `SINGLE_INSTANCE`. */
    deployment_mode?:               any;
    encryption_options?:            EncryptionOptions;
    ldap_server_metadata?:          LDAPServerMetadata;
    logs?:                          Logs;
    maintenance_window_start_time?: MaintenanceWindowStartTime;
    /** (Optional) Whether to enable connections from applications outside of the VPC that hosts the broker's subnets. */
    publicly_accessible?:           any;
    /** (Optional) List of security group IDs assigned to the broker. */
    security_groups?:               any;
    /** (Optional) Storage type of the broker. For `engine_type` `ActiveMQ`, the valid values are `efs` and `ebs`, and the AWS-default is `efs`. For `engine_type` `RabbitMQ`, only `ebs` is supported. When using `ebs`, only the `mq.m5` broker instance type family is supported. */
    storage_type?:                  any;
    /** (Optional) List of subnet IDs in which to launch the broker. A `SINGLE_INSTANCE` deployment requires one subnet. An `ACTIVE_STANDBY_MULTI_AZ` deployment requires multiple subnets. */
    subnet_ids?:                    any;
    /** (Optional) Map of tags to assign to the broker. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
}

export interface Configuration {
    /** (Optional) The Configuration ID. */
    id:       any;
    /** (Optional) Revision of the Configuration. */
    revision: any;
}

export interface EncryptionOptions {
    /** (Optional) Amazon Resource Name (ARN) of Key Management Service (KMS) Customer Master Key (CMK) to use for encryption at rest. Requires setting `use_aws_owned_key` to `false`. To perform drift detection when AWS-managed CMKs or customer-managed CMKs are in use, this value must be configured. */
    kms_key_id:        any;
    /** (Optional) Whether to enable an AWS-owned KMS CMK that is not in your account. Defaults to `true`. Setting to `false` without configuring `kms_key_id` will create an AWS-managed CMK aliased to `aws/mq` in your account. */
    use_aws_owned_key: any;
}

export interface LDAPServerMetadata {
    /** (Optional) List of a fully qualified domain name of the LDAP server and an optional failover server. */
    hosts:                    any;
    /** (Optional) Fully qualified name of the directory to search for a user’s groups. */
    role_base:                any;
    /** (Optional) Specifies the LDAP attribute that identifies the group name attribute in the object returned from the group membership query. */
    role_name:                any;
    /** (Optional) Search criteria for groups. */
    role_search_matching:     any;
    /** (Optional) Whether the directory search scope is the entire sub-tree. */
    role_search_subtree:      any;
    /** (Optional) Service account password. */
    service_account_password: any;
    /** (Optional) Service account username. */
    service_account_username: any;
    /** (Optional) Fully qualified name of the directory where you want to search for users. */
    user_base:                any;
    /** (Optional) Specifies the name of the LDAP attribute for the user group membership. */
    user_role_name:           any;
    /** (Optional) Search criteria for users. */
    user_search_matching:     any;
    /** (Optional) Whether the directory search scope is the entire sub-tree. */
    user_search_subtree:      any;
}

export interface Logs {
    /** (Optional) Enables audit logging. Auditing is only possible for `engine_type` of `ActiveMQ`. User management action made using JMX or the ActiveMQ Web Console is logged. Defaults to `false`. */
    audit:   any;
    /** (Optional) Enables general logging via CloudWatch. Defaults to `false`. */
    general: any;
}

export interface MaintenanceWindowStartTime {
    /** (Required) Day of the week, e.g., `MONDAY`, `TUESDAY`, or `WEDNESDAY`. */
    day_of_week: any;
    /** (Required) Time, in 24-hour format, e.g., `02:00`. */
    time_of_day: any;
    /** (Required) Time zone in either the Country/City format or the UTC offset format, e.g., `CET`. */
    time_zone:   any;
}

export interface User {
    /** (Optional) Whether to enable access to the [ActiveMQ Web Console](http://activemq.apache.org/web-console.html) for the user. Applies to `engine_type` of `ActiveMQ` only. */
    console_access?:   any;
    /** (Optional) List of groups (20 maximum) to which the ActiveMQ user belongs. Applies to `engine_type` of `ActiveMQ` only. */
    groups?:           any;
    /** (Required) Password of the user. It must be 12 to 250 characters long, at least 4 unique characters, and must not contain commas. */
    password:          any;
    /** (Optional) Whether to set set replication user. Defaults to `false`. */
    replication_user?: any;
    /** (Required) Username of the user. */
    username:          any;
}