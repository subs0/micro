export interface ConnectInstance {
    data: Datum[];
}

export interface Datum {
    connect_instance: ConnectInstanceClass;
}

export interface ConnectInstanceClass {
    /** (Optional) Returns information on a specific connect instance by id */
    instance_id?:    any;
    /** (Optional) Returns information on a specific connect instance by alias */
    instance_alias?: any;
}