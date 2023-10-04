export interface KendraIndex {
    data: Datum[];
}

export interface Datum {
    kendra_index: KendraIndexClass;
}

export interface KendraIndexClass {
    /** (Required) Returns information on a specific Index by id. */
    id: any;
}