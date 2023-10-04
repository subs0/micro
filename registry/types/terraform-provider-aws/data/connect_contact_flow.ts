export interface ConnectContactFlow {
    data: Datum[];
}

export interface Datum {
    connect_contact_flow: ConnectContactFlowClass;
}

export interface ConnectContactFlowClass {
    /** (Optional) Returns information on a specific Contact Flow by contact flow id */
    contact_flow_id?: any;
    /** (Required) Reference to the hosting Amazon Connect Instance */
    instance_id:      any;
    /** (Optional) Returns information on a specific Contact Flow by name */
    name?:            any;
}