export interface BatchComputeEnvironment {
    data: Datum[];
}

export interface Datum {
    batch_compute_environment: BatchComputeEnvironmentClass;
}

export interface BatchComputeEnvironmentClass {
    /** (Required) Name of the Batch Compute Environment */
    compute_environment_name: any;
}