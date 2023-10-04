export interface ServicecatalogBudgetResourceAssociation {
    resource: Resource[];
}

export interface Resource {
    servicecatalog_budget_resource_association: ServicecatalogBudgetResourceAssociationClass;
}

export interface ServicecatalogBudgetResourceAssociationClass {
    /** (Required) Budget name. */
    budget_name: any;
    /** (Required) Resource identifier. */
    resource_id: any;
}