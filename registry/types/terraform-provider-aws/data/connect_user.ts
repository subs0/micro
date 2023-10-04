export interface ConnectUser {
    data: Datum[];
}

export interface Datum {
    connect_user: ConnectUserClass;
}

export interface ConnectUserClass {
    /** (Required) Reference to the hosting Amazon Connect Instance */
    instance_id: any;
    /** (Optional) Returns information on a specific User by name */
    name?:       any;
    /** (Optional) Returns information on a specific User by User id */
    user_id?:    any;
}