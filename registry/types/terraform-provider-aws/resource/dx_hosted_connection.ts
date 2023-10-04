export interface DxHostedConnection {
    resource: Resource[];
}

export interface Resource {
    dx_hosted_connection: DxHostedConnectionClass;
}

export interface DxHostedConnectionClass {
    /** (Required) The name of the connection. */
    name:             any;
    /** (Required) The bandwidth of the connection. Valid values for dedicated connections: 1Gbps, 10Gbps. Valid values for hosted connections: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps and 10Gbps. Case sensitive. */
    bandwidth:        any;
    /** (Required) The ID of the interconnect or LAG. */
    connection_id:    any;
    /** (Required) The ID of the AWS account of the customer for the connection. */
    owner_account_id: any;
    /** (Required) The dedicated VLAN provisioned to the hosted connection. */
    vlan:             any;
}