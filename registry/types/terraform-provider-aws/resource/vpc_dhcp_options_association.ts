export interface VpcDHCPOptionsAssociation {
    resource: Resource[];
}

export interface Resource {
    vpc_dhcp_options_association: VpcDHCPOptionsAssociationClass;
}

export interface VpcDHCPOptionsAssociationClass {
    /** (Required) The ID of the VPC to which we would like to associate a DHCP Options Set. */
    vpc_id:          any;
    /** (Required) The ID of the DHCP Options Set to associate to the VPC. */
    dhcp_options_id: any;
}