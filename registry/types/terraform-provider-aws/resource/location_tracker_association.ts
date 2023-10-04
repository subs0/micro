export interface LocationTrackerAssociation {
    resource: Resource[];
}

export interface Resource {
    location_tracker_association: LocationTrackerAssociationClass;
}

export interface LocationTrackerAssociationClass {
    /** (Required) The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all AWS. */
    consumer_arn: any;
    /** (Required) The name of the tracker resource to be associated with a geofence collection. */
    tracker_name: any;
}