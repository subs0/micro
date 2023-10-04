export interface ServicecatalogPrincipalPortfolioAssociation {
    resource: Resource[];
}

export interface Resource {
    servicecatalog_principal_portfolio_association: ServicecatalogPrincipalPortfolioAssociationClass;
}

export interface ServicecatalogPrincipalPortfolioAssociationClass {
    /** (Required) Portfolio identifier. */
    portfolio_id:     any;
    /** (Required) Principal ARN. */
    principal_arn:    any;
    /** (Optional) Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`. */
    accept_language?: any;
    /** (Optional) Principal type. Setting this argument empty (e.g., `principal_type = ""`) will result in an error. Valid values are `IAM` and `IAM_PATTERN`. Default is `IAM`. */
    principal_type?:  any;
}