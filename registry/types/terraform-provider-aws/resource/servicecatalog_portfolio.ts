export interface ServicecatalogPortfolio {
    resource: Resource[];
}

export interface Resource {
    servicecatalog_portfolio: ServicecatalogPortfolioClass;
}

export interface ServicecatalogPortfolioClass {
    /** (Required) The name of the portfolio. */
    name:          any;
    /** (Required) Description of the portfolio */
    description:   any;
    /** (Required) Name of the person or organization who owns the portfolio. */
    provider_name: any;
    /** (Optional) Tags to apply to the connection. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
}