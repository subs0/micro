export interface OpensearchOutboundConnection {
    resource: Resource[];
}

export interface Resource {
    opensearch_outbound_connection: OpensearchOutboundConnectionClass;
}

export interface OpensearchOutboundConnectionClass {
    /** (Required, Forces new resource) Specifies the connection alias that will be used by the customer for this connection. */
    connection_alias?:      any;
    /** (Required, Forces new resource) Specifies the connection mode. Accepted values are `DIRECT` or `VPC_ENDPOINT`. */
    connection_mode?:       any;
    /** (Optional, Forces new resource) Accepts the connection. */
    accept_connection?:     any;
    connection_properties?: ConnectionProperties;
    local_domain_info?:     DomainInfo;
    remote_domain_info?:    DomainInfo;
    /** (Optional, Forces new resource) Configuration block for cross cluster search. */
    cross_cluster_search?:  CrossClusterSearch;
}

export interface ConnectionProperties {
    /** (Optional, Forces new resource) Configuration block for cross cluster search. */
    cross_cluster_search: any;
}

export interface CrossClusterSearch {
    /** (Optional, Forces new resource) Skips unavailable clusters and can only be used for cross-cluster searches. Accepted values are `ENABLED` or `DISABLED`. */
    skip_unavailable: any;
}

export interface DomainInfo {
    /** (Required, Forces new resource) The Account ID of the owner of the remote domain. */
    owner_id:    any;
    /** (Required, Forces new resource) The name of the remote domain. */
    domain_name: any;
    /** (Required, Forces new resource) The region of the remote domain. */
    region:      any;
}