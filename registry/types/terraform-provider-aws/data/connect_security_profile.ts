export interface ConnectSecurityProfile {
    data: Datum[];
}

export interface Datum {
    connect_security_profile: ConnectSecurityProfileClass;
}

export interface ConnectSecurityProfileClass {
    /** (Optional) Returns information on a specific Security Profile by Security Profile id */
    security_profile_id?: any;
    /** (Required) Reference to the hosting Amazon Connect Instance */
    instance_id:          any;
    /** (Optional) Returns information on a specific Security Profile by name */
    name?:                any;
}