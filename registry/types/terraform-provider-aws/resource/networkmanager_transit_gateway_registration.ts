export interface NetworkmanagerTransitGatewayRegistration {
    resource: Resource[];
}

export interface Resource {
    networkmanager_transit_gateway_registration: NetworkmanagerTransitGatewayRegistrationClass;
}

export interface NetworkmanagerTransitGatewayRegistrationClass {
    /** (Required) The ID of the Global Network to register to. */
    global_network_id:   any;
    /** (Required) The ARN of the Transit Gateway to register. */
    transit_gateway_arn: any;
}