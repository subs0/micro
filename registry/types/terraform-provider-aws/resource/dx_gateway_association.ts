export interface DxGatewayAssociation {
    resource: Resource[];
}

export interface Resource {
    dx_gateway_association: DxGatewayAssociationClass;
}

export interface DxGatewayAssociationClass {
    /** (Required) The ID of the Direct Connect gateway. */
    dx_gateway_id:                        any;
    /** (Optional) The ID of the VGW or transit gateway with which to associate the Direct Connect gateway. */
    associated_gateway_id?:               any;
    /** (Optional) The ID of the AWS account that owns the VGW or transit gateway with which to associate the Direct Connect gateway. */
    associated_gateway_owner_account_id?: any;
    /** (Optional) The ID of the Direct Connect gateway association proposal. */
    proposal_id?:                         any;
    /** (Optional) VPC prefixes (CIDRs) to advertise to the Direct Connect gateway. Defaults to the CIDR block of the VPC associated with the Virtual Gateway. To enable drift detection, must be configured. */
    allowed_prefixes?:                    any;
}