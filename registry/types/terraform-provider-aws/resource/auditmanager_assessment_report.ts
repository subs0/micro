export interface AuditmanagerAssessmentReport {
    resource: Resource[];
}

export interface Resource {
    auditmanager_assessment_report: AuditmanagerAssessmentReportClass;
}

export interface AuditmanagerAssessmentReportClass {
    /** (Required) Name of the assessment report. */
    name:          any;
    /** (Required) Unique identifier of the assessment to create the report from. */
    assessment_id: any;
    /** (Optional) Description of the assessment report. */
    description?:  any;
}