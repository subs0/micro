export interface MskconnectWorkerConfiguration {
    data: Datum[];
}

export interface Datum {
    mskconnect_worker_configuration: MskconnectWorkerConfigurationClass;
}

export interface MskconnectWorkerConfigurationClass {
    /** (Required) Name of the worker configuration. */
    name: any;
}