export interface DxGatewayAssociationProposal {
    resource: Resource[];
}

export interface Resource {
    dx_gateway_association_proposal: DxGatewayAssociationProposalClass;
}

export interface DxGatewayAssociationProposalClass {
    /** (Required) The ID of the VGW or transit gateway with which to associate the Direct Connect gateway. */
    associated_gateway_id:       any;
    /** (Required) Direct Connect Gateway identifier. */
    dx_gateway_id:               any;
    /** (Required) AWS Account identifier of the Direct Connect Gateway's owner. */
    dx_gateway_owner_account_id: any;
    /** (Optional) VPC prefixes (CIDRs) to advertise to the Direct Connect gateway. Defaults to the CIDR block of the VPC associated with the Virtual Gateway. To enable drift detection, must be configured. */
    allowed_prefixes?:           any;
}