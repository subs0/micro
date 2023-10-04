export interface ConnectContactFlowModule {
    data: Datum[];
}

export interface Datum {
    connect_contact_flow_module: ConnectContactFlowModuleClass;
}

export interface ConnectContactFlowModuleClass {
    /** (Optional) Returns information on a specific Contact Flow Module by contact flow module id */
    contact_flow_module_id?: any;
    /** (Required) Reference to the hosting Amazon Connect Instance */
    instance_id:             any;
    /** (Optional) Returns information on a specific Contact Flow Module by name */
    name?:                   any;
}