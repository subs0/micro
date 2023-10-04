export interface ServicecatalogConstraint {
    data: Datum[];
}

export interface Datum {
    servicecatalog_constraint: ServicecatalogConstraintClass;
}

export interface ServicecatalogConstraintClass {
    /** Constraint identifier. */
    id?:              any;
    /** (Optional) Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`. */
    accept_language?: any;
}