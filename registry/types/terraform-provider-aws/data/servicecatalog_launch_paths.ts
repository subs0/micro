export interface ServicecatalogLaunchPaths {
    data: Datum[];
}

export interface Datum {
    servicecatalog_launch_paths: ServicecatalogLaunchPathsClass;
}

export interface ServicecatalogLaunchPathsClass {
    /** (Required) Product identifier. */
    product_id:       any;
    /** (Optional) Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`. */
    accept_language?: any;
}