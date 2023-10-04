export interface VpclatticeServiceNetworkServiceAssociation {
    resource: Resource[];
}

export interface Resource {
    vpclattice_service_network_service_association: VpclatticeServiceNetworkServiceAssociationClass;
}

export interface VpclatticeServiceNetworkServiceAssociationClass {
    /** (Required) The ID or Amazon Resource Identifier (ARN) of the service. */
    service_identifier:         any;
    /** (Required) The ID or Amazon Resource Identifier (ARN) of the service network. You must use the ARN if the resources specified in the operation are in different accounts. */
    service_network_identifier: any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
}