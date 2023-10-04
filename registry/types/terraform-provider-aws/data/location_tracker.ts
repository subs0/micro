export interface LocationTracker {
    data: Datum[];
}

export interface Datum {
    location_tracker: LocationTrackerClass;
}

export interface LocationTrackerClass {
    /** (Required) Name of the tracker resource. */
    tracker_name: any;
}