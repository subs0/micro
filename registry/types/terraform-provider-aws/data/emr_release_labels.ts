export interface EmrReleaseLabels {
    data: Datum[];
}

export interface Datum {
    emr_release_labels: EmrReleaseLabelsClass;
}

export interface EmrReleaseLabelsClass {
    /** (Optional) Optional release label application filter. For example, `Spark@2.1.0` or `Spark`. */
    application?: any;
    /** (Optional) Optional release label version prefix filter. For example, `emr-5`. */
    prefix?:      any;
}