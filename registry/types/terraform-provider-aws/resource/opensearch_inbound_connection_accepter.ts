export interface OpensearchInboundConnectionAccepter {
    resource: Resource[];
}

export interface Resource {
    opensearch_inbound_connection_accepter: OpensearchInboundConnectionAccepterClass;
}

export interface OpensearchInboundConnectionAccepterClass {
    /** (Required, Forces new resource) Specifies the ID of the connection to accept. */
    connection_id?: any;
}