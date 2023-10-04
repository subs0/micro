export interface ServicecatalogTagOption {
    resource: Resource[];
}

export interface Resource {
    servicecatalog_tag_option: ServicecatalogTagOptionClass;
}

export interface ServicecatalogTagOptionClass {
    /** (Required) Tag option key. */
    key:     any;
    /** (Required) Tag option value. */
    value:   any;
    /** (Optional) Whether tag option is active. Default is `true`. */
    active?: any;
}