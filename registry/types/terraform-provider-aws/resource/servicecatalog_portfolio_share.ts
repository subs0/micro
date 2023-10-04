export interface ServicecatalogPortfolioShare {
    resource: Resource[];
}

export interface Resource {
    servicecatalog_portfolio_share: ServicecatalogPortfolioShareClass;
}

export interface ServicecatalogPortfolioShareClass {
    /** (Required) Portfolio identifier. */
    portfolio_id:         any;
    /** (Required) Identifier of the principal with whom you will share the portfolio. Valid values AWS account IDs and ARNs of AWS Organizations and organizational units. */
    principal_id:         any;
    /** (Required) Type of portfolio share. Valid values are `ACCOUNT` (an external account), `ORGANIZATION` (a share to every account in an organization), `ORGANIZATIONAL_UNIT`, `ORGANIZATION_MEMBER_ACCOUNT` (a share to an account in an organization). */
    type:                 any;
    /** (Optional) Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`. */
    accept_language?:     any;
    /** (Optional) Enables or disables Principal sharing when creating the portfolio share. If this flag is not provided, principal sharing is disabled. */
    share_principals?:    any;
    /** (Optional) Whether to enable sharing of `aws_servicecatalog_tag_option` resources when creating the portfolio share. */
    share_tag_options?:   any;
    /** (Optional) Whether to wait (up to the timeout) for the share to be accepted. Organizational shares are automatically accepted. */
    wait_for_acceptance?: any;
}