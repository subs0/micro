export interface ConnectHoursOfOperation {
    data: Datum[];
}

export interface Datum {
    connect_hours_of_operation: ConnectHoursOfOperationClass;
}

export interface ConnectHoursOfOperationClass {
    /** (Optional) Returns information on a specific Hours of Operation by hours of operation id */
    hours_of_operation_id?: any;
    /** (Required) Reference to the hosting Amazon Connect Instance */
    instance_id:            any;
    /** (Optional) Returns information on a specific Hours of Operation by name */
    name?:                  any;
}