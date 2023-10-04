export interface MskconnectWorkerConfiguration {
    resource: Resource[];
}

export interface Resource {
    mskconnect_worker_configuration: MskconnectWorkerConfigurationClass;
}

export interface MskconnectWorkerConfigurationClass {
    /** (Required) The name of the worker configuration. */
    name:                    any;
    /** (Required) Contents of connect-distributed.properties file. The value can be either base64 encoded or in raw format. */
    properties_file_content: any;
    /** (Optional) A summary description of the worker configuration. */
    description?:            any;
}