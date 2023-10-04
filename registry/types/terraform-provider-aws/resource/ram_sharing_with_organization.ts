export interface RAMSharingWithOrganization {
    resource: Resource[];
}

export interface Resource {
    ram_sharing_with_organization: RAMSharingWithOrganizationClass;
}

export interface RAMSharingWithOrganizationClass {
    "This resource does not support any arguments."?: any;
}