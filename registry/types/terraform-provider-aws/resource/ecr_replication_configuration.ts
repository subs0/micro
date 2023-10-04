export interface EcrReplicationConfiguration {
    resource: Resource[];
}

export interface Resource {
    ecr_replication_configuration: EcrReplicationConfigurationClass;
}

export interface EcrReplicationConfigurationClass {
    /** (Required) Replication configuration for a registry. See [Replication Configuration](#replication-configuration). */
    replication_configuration: any;
    /** (Required) The replication rules for a replication configuration. A maximum of 10 are allowed per `replication_configuration`. See [Rule](#rule) */
    rule:                      any;
    /** (Required) the details of a replication destination. A maximum of 25 are allowed per `rule`. See [Destination](#destination). */
    destination:               any;
    /** (Optional) filters for a replication rule. See [Repository Filter](#repository-filter). */
    repository_filter?:        any;
    /** (Required) A Region to replicate to. */
    region:                    any;
    /** (Required) The account ID of the destination registry to replicate to. */
    registry_id:               any;
    /** (Required) The repository filter details. */
    filter:                    any;
    /** (Required) The repository filter type. The only supported value is `PREFIX_MATCH`, which is a repository name prefix specified with the filter parameter. */
    filter_type:               any;
}