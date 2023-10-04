export interface NetworkmanagerLinkAssociation {
    resource: Resource[];
}

export interface Resource {
    networkmanager_link_association: NetworkmanagerLinkAssociationClass;
}

export interface NetworkmanagerLinkAssociationClass {
    /** (Required) The ID of the device. */
    device_id:         any;
    /** (Required) The ID of the global network. */
    global_network_id: any;
    /** (Required) The ID of the link. */
    link_id:           any;
}