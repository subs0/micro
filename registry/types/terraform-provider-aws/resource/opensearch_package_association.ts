export interface OpensearchPackageAssociation {
    resource: Resource[];
}

export interface Resource {
    opensearch_package_association: OpensearchPackageAssociationClass;
}

export interface OpensearchPackageAssociationClass {
    /** (Required, Forces new resource) Internal ID of the package to associate with a domain. */
    package_id?:  any;
    /** (Required, Forces new resource) Name of the domain to associate the package with. */
    domain_name?: any;
}