export interface SagemakerServicecatalogPortfolioStatus {
    resource: Resource[];
}

export interface Resource {
    sagemaker_servicecatalog_portfolio_status: SagemakerServicecatalogPortfolioStatusClass;
}

export interface SagemakerServicecatalogPortfolioStatusClass {
    /** (Required) Whether Service Catalog is enabled or disabled in SageMaker. Valid values are `Enabled` and `Disabled`. */
    status: any;
}