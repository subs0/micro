export interface BackupReportPlan {
    resource: Resource[];
}

export interface Resource {
    backup_report_plan: BackupReportPlanClass;
}

export interface BackupReportPlanClass {
    /** (Optional) The description of the report plan with a maximum of 1,024 characters */
    description?:            any;
    /** (Required) The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters, numbers, and underscores. */
    name:                    any;
    /** (Required) An object that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports. Detailed below. */
    report_delivery_channel: any;
    /** (Required) An object that identifies the report template for the report. Reports are built using a report template. Detailed below. */
    report_setting:          any;
    /** (Optional) Metadata that you can assign to help organize the report plans you create. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                   any;
    /** (Optional) A list of the format of your reports: CSV, JSON, or both. If not specified, the default format is CSV. */
    formats?:                any;
    /** (Required) The unique name of the S3 bucket that receives your reports. */
    s3_bucket_name:          any;
    /** (Optional) The prefix for where Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path: s3://your-bucket-name/prefix/Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix. */
    s3_key_prefix?:          any;
    /** (Optional) Specifies the list of accounts a report covers. */
    accounts?:               any;
    /** (Optional) Specifies the Amazon Resource Names (ARNs) of the frameworks a report covers. */
    framework_arns?:         any;
    /** (Optional) Specifies the number of frameworks a report covers. */
    number_of_frameworks?:   any;
    /** (Optional) Specifies the list of Organizational Units a report covers. */
    organization_units?:     any;
    /** (Optional) Specifies the list of regions a report covers. */
    regions?:                any;
    /** (Required) Identifies the report template for the report. Reports are built using a report template. The report templates are: `RESOURCE_COMPLIANCE_REPORT` | `CONTROL_COMPLIANCE_REPORT` | `BACKUP_JOB_REPORT` | `COPY_JOB_REPORT` | `RESTORE_JOB_REPORT`. */
    report_template:         any;
}