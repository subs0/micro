export interface DxRouterConfiguration {
    data: Datum[];
}

export interface Datum {
    dx_router_configuration: DxRouterConfigurationClass;
}

export interface DxRouterConfigurationClass {
    /** (Required) ID of the Direct Connect Virtual Interface */
    virtual_interface_id:   any;
    /** (Required) ID of the Router Type. For example: `CiscoSystemsInc-2900SeriesRouters-IOS124` */
    router_type_identifier: any;
}