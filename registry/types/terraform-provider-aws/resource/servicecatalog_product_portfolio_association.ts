export interface ServicecatalogProductPortfolioAssociation {
    resource: Resource[];
}

export interface Resource {
    servicecatalog_product_portfolio_association: ServicecatalogProductPortfolioAssociationClass;
}

export interface ServicecatalogProductPortfolioAssociationClass {
    /** (Required) Portfolio identifier. */
    portfolio_id:         any;
    /** (Required) Product identifier. */
    product_id:           any;
    /** (Optional) Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`. */
    accept_language?:     any;
    /** (Optional) Identifier of the source portfolio. */
    source_portfolio_id?: any;
}