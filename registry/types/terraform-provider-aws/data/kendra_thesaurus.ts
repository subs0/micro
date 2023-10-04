export interface KendraThesaurus {
    data: Datum[];
}

export interface Datum {
    kendra_thesaurus: KendraThesaurusClass;
}

export interface KendraThesaurusClass {
    /** (Required) Identifier of the index that contains the Thesaurus. */
    index_id:     any;
    /** (Required) Identifier of the Thesaurus. */
    thesaurus_id: any;
}