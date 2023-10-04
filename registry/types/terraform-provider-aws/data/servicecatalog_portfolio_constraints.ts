export interface ServicecatalogPortfolioConstraints {
    data: Datum[];
}

export interface Datum {
    servicecatalog_portfolio_constraints: ServicecatalogPortfolioConstraintsClass;
}

export interface ServicecatalogPortfolioConstraintsClass {
    /** (Required) Portfolio identifier. */
    portfolio_id:     any;
    /** (Optional) Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`. */
    accept_language?: any;
    /** (Optional) Product identifier. */
    product_id?:      any;
}