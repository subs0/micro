export interface ServicecatalogTagOptionResourceAssociation {
    resource: Resource[];
}

export interface Resource {
    servicecatalog_tag_option_resource_association: ServicecatalogTagOptionResourceAssociationClass;
}

export interface ServicecatalogTagOptionResourceAssociationClass {
    /** (Required) Resource identifier. */
    resource_id:   any;
    /** (Required) Tag Option identifier. */
    tag_option_id: any;
}