export interface ServicecatalogPortfolio {
    data: Datum[];
}

export interface Datum {
    servicecatalog_portfolio: ServicecatalogPortfolioClass;
}

export interface ServicecatalogPortfolioClass {
    /** (Required) Portfolio identifier. */
    id:               any;
    /** (Optional) Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`. */
    accept_language?: any;
}