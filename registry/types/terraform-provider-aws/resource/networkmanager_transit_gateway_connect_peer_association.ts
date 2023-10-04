export interface NetworkmanagerTransitGatewayConnectPeerAssociation {
    resource: Resource[];
}

export interface Resource {
    networkmanager_transit_gateway_connect_peer_association: NetworkmanagerTransitGatewayConnectPeerAssociationClass;
}

export interface NetworkmanagerTransitGatewayConnectPeerAssociationClass {
    /** (Required) The ID of the device. */
    device_id:                        any;
    /** (Required) The ID of the global network. */
    global_network_id:                any;
    /** (Optional) The ID of the link. */
    link_id?:                         any;
    /** (Required) The Amazon Resource Name (ARN) of the Connect peer. */
    transit_gateway_connect_peer_arn: any;
}