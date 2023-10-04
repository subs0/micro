export interface CloudtrailEventDataStore {
    resource: Resource[];
}

export interface Resource {
    cloudtrail_event_data_store: CloudtrailEventDataStoreClass;
}

export interface CloudtrailEventDataStoreClass {
    "This resource supports the following arguments:"?: any;
    "Advanced Event Selector Arguments"?:               any;
}