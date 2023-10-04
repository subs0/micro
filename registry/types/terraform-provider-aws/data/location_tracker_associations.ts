export interface LocationTrackerAssociations {
    data: Datum[];
}

export interface Datum {
    location_tracker_associations: LocationTrackerAssociationsClass;
}

export interface LocationTrackerAssociationsClass {
    /** (Required) Name of the tracker resource associated with a geofence collection. */
    tracker_name: any;
}