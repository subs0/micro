export interface KendraFAQ {
    data: Datum[];
}

export interface Datum {
    kendra_faq: KendraFAQClass;
}

export interface KendraFAQClass {
    /** (Required) Identifier of the FAQ. */
    faq_id:   any;
    /** (Required) Identifier of the index that contains the FAQ. */
    index_id: any;
}