export interface QuicksightIngestion {
    resource: Resource[];
}

export interface Resource {
    quicksight_ingestion: QuicksightIngestionClass;
}

export interface QuicksightIngestionClass {
    /** (Required) ID of the dataset used in the ingestion. */
    data_set_id:     any;
    /** (Required) ID for the ingestion. */
    ingestion_id:    any;
    /** (Required) Type of ingestion to be created. Valid values are `INCREMENTAL_REFRESH` and `FULL_REFRESH`. */
    ingestion_type:  any;
    /** (Optional) AWS account ID. */
    aws_account_id?: any;
}