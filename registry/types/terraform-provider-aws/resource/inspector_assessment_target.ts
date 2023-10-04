export interface InspectorAssessmentTarget {
    resource: Resource[];
}

export interface Resource {
    inspector_assessment_target: InspectorAssessmentTargetClass;
}

export interface InspectorAssessmentTargetClass {
    /** (Required) The name of the assessment target. */
    name: any;
}