export interface LocationGeofenceCollection {
    data: Datum[];
}

export interface Datum {
    location_geofence_collection: LocationGeofenceCollectionClass;
}

export interface LocationGeofenceCollectionClass {
    /** (Required) Name of the geofence collection. */
    collection_name: any;
}