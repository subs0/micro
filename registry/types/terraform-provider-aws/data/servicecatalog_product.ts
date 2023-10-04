export interface ServicecatalogProduct {
    data: Datum[];
}

export interface Datum {
    servicecatalog_product: ServicecatalogProductClass;
}

export interface ServicecatalogProductClass {
    /** (Required) ID of the product. */
    id:               any;
    /** (Optional) Language code. Valid values are `en` (English), `jp` (Japanese), `zh` (Chinese). The default value is `en`. */
    accept_language?: any;
}