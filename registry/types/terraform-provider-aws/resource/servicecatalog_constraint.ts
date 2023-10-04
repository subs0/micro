export interface ServicecatalogConstraint {
    resource: Resource[];
}

export interface Resource {
    servicecatalog_constraint: ServicecatalogConstraintClass;
}

export interface ServicecatalogConstraintClass {
    /** (Required) Constraint parameters in JSON format. The syntax depends on the constraint type. See details below. */
    parameters:       any;
    /** (Required) Portfolio identifier. */
    portfolio_id:     any;
    /** (Required) Product identifier. */
    product_id:       any;
    /** (Required) Type of constraint. Valid values are `LAUNCH`, `NOTIFICATION`, `RESOURCE_UPDATE`, `STACKSET`, and `TEMPLATE`. */
    type:             any;
    /** (Optional) Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`. */
    accept_language?: any;
    /** (Optional) Description of the constraint. */
    description?:     any;
}