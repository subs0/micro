export interface Ec2TransitGatewayPolicyTableAssociation {
    resource: Resource[];
}

export interface Resource {
    ec2_transit_gateway_policy_table_association: Ec2TransitGatewayPolicyTableAssociationClass;
}

export interface Ec2TransitGatewayPolicyTableAssociationClass {
    /** (Required) Identifier of EC2 Transit Gateway Attachment. */
    transit_gateway_attachment_id:   any;
    /** (Required) Identifier of EC2 Transit Gateway Policy Table. */
    transit_gateway_policy_table_id: any;
}