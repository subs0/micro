export interface DBEventCategories {
    data: Datum[];
}

export interface Datum {
    db_event_categories: DBEventCategoriesClass;
}

export interface DBEventCategoriesClass {
    /** (Optional) Type of source that will be generating the events. Valid options are db-instance, db-security-group, db-parameter-group, db-snapshot, db-cluster or db-cluster-snapshot. */
    source_type?: any;
}