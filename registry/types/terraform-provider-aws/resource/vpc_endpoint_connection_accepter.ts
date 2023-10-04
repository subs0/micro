export interface VpcEndpointConnectionAccepter {
    resource: Resource[];
}

export interface Resource {
    vpc_endpoint_connection_accepter: VpcEndpointConnectionAccepterClass;
}

export interface VpcEndpointConnectionAccepterClass {
    /** (Required) AWS VPC Endpoint ID. */
    vpc_endpoint_id:         any;
    /** (Required) AWS VPC Endpoint Service ID. */
    vpc_endpoint_service_id: any;
}