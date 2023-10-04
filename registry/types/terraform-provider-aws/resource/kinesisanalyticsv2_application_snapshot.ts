export interface Kinesisanalyticsv2ApplicationSnapshot {
    resource: Resource[];
}

export interface Resource {
    kinesisanalyticsv2_application_snapshot: Kinesisanalyticsv2ApplicationSnapshotClass;
}

export interface Kinesisanalyticsv2ApplicationSnapshotClass {
    /** (Required) The name of an existing  [Kinesis Analytics v2 Application](/docs/providers/aws/r/kinesisanalyticsv2_application.html). Note that the application must be running for a snapshot to be created. */
    application_name: any;
    /** (Required) The name of the application snapshot. */
    snapshot_name:    any;
}