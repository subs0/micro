export interface OpensearchserverlessCollection {
    data: Datum[];
}

export interface Datum {
    opensearchserverless_collection: OpensearchserverlessCollectionClass;
}

export interface OpensearchserverlessCollectionClass {
    /** (Required) ID of the collection. Either `id` or `name` must be provided. */
    id:   any;
    /** (Required) Name of the collection. Either `name` or `id` must be provided. */
    name: any;
}