export interface KendraQuerySuggestionsBlockList {
    data: Datum[];
}

export interface Datum {
    kendra_query_suggestions_block_list: KendraQuerySuggestionsBlockListClass;
}

export interface KendraQuerySuggestionsBlockListClass {
    /** (Required) Identifier of the index that contains the block list. */
    index_id:                        any;
    /** (Required) Identifier of the block list. */
    query_suggestions_block_list_id: any;
}