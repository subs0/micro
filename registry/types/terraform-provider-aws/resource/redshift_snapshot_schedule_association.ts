export interface RedshiftSnapshotScheduleAssociation {
    resource: Resource[];
}

export interface Resource {
    redshift_snapshot_schedule_association: RedshiftSnapshotScheduleAssociationClass;
}

export interface RedshiftSnapshotScheduleAssociationClass {
    /** (Required, Forces new resource) The cluster identifier. */
    cluster_identifier?:  any;
    /** (Required, Forces new resource) The snapshot schedule identifier. */
    schedule_identifier?: any;
}