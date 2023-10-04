export interface MskConfiguration {
    data: Datum[];
}

export interface Datum {
    msk_configuration: MskConfigurationClass;
}

export interface MskConfigurationClass {
    /** (Required) Name of the configuration. */
    name: any;
}