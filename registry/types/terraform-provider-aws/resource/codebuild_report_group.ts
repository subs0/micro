export interface CodebuildReportGroup {
    resource: Resource[];
}

export interface Resource {
    codebuild_report_group: CodebuildReportGroupClass;
}

export interface CodebuildReportGroupClass {
    /** (Required) The name of a Report Group. */
    name:            any;
    /** (Required) The export configuration type. Valid values are `S3` and `NO_EXPORT`. */
    type:            any;
    /** (Required) Information about the destination where the raw data of this Report Group is exported. see [Export Config](#export-config) documented below. */
    export_config:   any;
    /** (Optional) If `true`, deletes any reports that belong to a report group before deleting the report group. If `false`, you must delete any reports in the report group before deleting it. Default value is `false`. */
    delete_reports?: any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
    /** (Required) contains information about the S3 bucket where the run of a report is exported. see [S3 Destination](#s3-destination) documented below. */
    s3_destination:  any;
    /** (Required) The encryption key for the report's encrypted raw data. The KMS key ARN. */
    encryption_key:  any;
    /** (Optional) The type of build output artifact to create. Valid values are: `NONE` (default) and `ZIP`. */
    packaging?:      any;
    /** (Optional) The path to the exported report's raw data results. */
    path?:           any;
}