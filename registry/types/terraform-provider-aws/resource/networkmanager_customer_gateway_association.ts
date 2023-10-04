export interface NetworkmanagerCustomerGatewayAssociation {
    resource: Resource[];
}

export interface Resource {
    networkmanager_customer_gateway_association: NetworkmanagerCustomerGatewayAssociationClass;
}

export interface NetworkmanagerCustomerGatewayAssociationClass {
    /** (Required) The Amazon Resource Name (ARN) of the customer gateway. */
    customer_gateway_arn: any;
    /** (Required) The ID of the device. */
    device_id:            any;
    /** (Required) The ID of the global network. */
    global_network_id:    any;
    /** (Optional) The ID of the link. */
    link_id?:             any;
}