export interface VpcIPAMResourceDiscoveryAssociation {
    resource: Resource[];
}

export interface Resource {
    vpc_ipam_resource_discovery_association: VpcIPAMResourceDiscoveryAssociationClass;
}

export interface VpcIPAMResourceDiscoveryAssociationClass {
    /** (Required) The ID of the IPAM to associate. */
    ipam_id:                    any;
    /** (Required) The ID of the Resource Discovery to associate. */
    ipam_resource_discovery_id: any;
    /** (Optional) A map of tags to add to the IPAM resource discovery association resource. */
    tags?:                      any;
}