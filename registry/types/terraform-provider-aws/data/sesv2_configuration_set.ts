export interface Sesv2ConfigurationSet {
    data: Datum[];
}

export interface Datum {
    sesv2_configuration_set: Sesv2ConfigurationSetClass;
}

export interface Sesv2ConfigurationSetClass {
    /** (Required) The name of the configuration set. */
    configuration_set_name: any;
}