export interface ConnectRoutingProfile {
    data: Datum[];
}

export interface Datum {
    connect_routing_profile: ConnectRoutingProfileClass;
}

export interface ConnectRoutingProfileClass {
    /** Reference to the hosting Amazon Connect Instance */
    instance_id?:        any;
    /** (Optional) Returns information on a specific Routing Profile by name */
    name?:               any;
    /** (Optional) Returns information on a specific Routing Profile by Routing Profile id */
    routing_profile_id?: any;
}