export interface LocationTrackerAssociation {
    data: Datum[];
}

export interface Datum {
    location_tracker_association: LocationTrackerAssociationClass;
}

export interface LocationTrackerAssociationClass {
    /** (Required) ARN of the geofence collection associated to tracker resource. */
    consumer_arn: any;
    /** (Required) Name of the tracker resource associated with a geofence collection. */
    tracker_name: any;
}