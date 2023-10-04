export interface CurReportDefinition {
    resource: Resource[];
}

export interface Resource {
    cur_report_definition: CurReportDefinitionClass;
}

export interface CurReportDefinitionClass {
    /** (Required) Unique name for the report. Must start with a number/letter and is case sensitive. Limited to 256 characters. */
    report_name:                any;
    /** (Required) The frequency on which report data are measured and displayed.  Valid values are: `DAILY`, `HOURLY`, `MONTHLY`. */
    time_unit:                  any;
    /** (Required) Format for report. Valid values are: `textORcsv`, `Parquet`. If `Parquet` is used, then Compression must also be `Parquet`. */
    format:                     any;
    /** (Required) Compression format for report. Valid values are: `GZIP`, `ZIP`, `Parquet`. If `Parquet` is used, then format must also be `Parquet`. */
    compression:                any;
    /** (Required) A list of schema elements. Valid values are: `RESOURCES`, `SPLIT_COST_ALLOCATION_DATA`. */
    additional_schema_elements: any;
    /** (Required) Name of the existing S3 bucket to hold generated reports. */
    s3_bucket:                  any;
    /** (Optional) Report path prefix. Limited to 256 characters. */
    s3_prefix?:                 any;
    /** (Required) Region of the existing S3 bucket to hold generated reports. */
    s3_region:                  any;
    /** (Required) A list of additional artifacts. Valid values are: `REDSHIFT`, `QUICKSIGHT`, `ATHENA`. When ATHENA exists within additional_artifacts, no other artifact type can be declared and report_versioning must be `OVERWRITE_REPORT`. */
    additional_artifacts:       any;
    /** (Optional) Set to true to update your reports after they have been finalized if AWS detects charges related to previous months. */
    refresh_closed_reports?:    any;
    /** (Optional) Overwrite the previous version of each report or to deliver the report in addition to the previous versions. Valid values are: `CREATE_NEW_REPORT` and `OVERWRITE_REPORT`. */
    report_versioning?:         any;
}