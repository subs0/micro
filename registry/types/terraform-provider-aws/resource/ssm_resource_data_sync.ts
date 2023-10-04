export interface SsmResourceDataSync {
    resource: Resource[];
}

export interface Resource {
    ssm_resource_data_sync: SsmResourceDataSyncClass;
}

export interface SsmResourceDataSyncClass {
    /** (Required) Name for the configuration. */
    name:           any;
    /** (Required) Amazon S3 configuration details for the sync. */
    s3_destination: any;
}