export interface CurReportDefinition {
    data: Datum[];
}

export interface Datum {
    cur_report_definition: CurReportDefinitionClass;
}

export interface CurReportDefinitionClass {
    /** (Required) Name of the report definition to match. */
    report_name: any;
}