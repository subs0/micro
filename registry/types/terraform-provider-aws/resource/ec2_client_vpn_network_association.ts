export interface Ec2ClientVPNNetworkAssociation {
    resource: Resource[];
}

export interface Resource {
    ec2_client_vpn_network_association: Ec2ClientVPNNetworkAssociationClass;
}

export interface Ec2ClientVPNNetworkAssociationClass {
    /** (Required) The ID of the Client VPN endpoint. */
    client_vpn_endpoint_id: any;
    /** (Required) The ID of the subnet to associate with the Client VPN endpoint. */
    subnet_id:              any;
}