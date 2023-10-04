export interface ConnectSecurityProfile {
    resource: Resource[];
}

export interface Resource {
    connect_security_profile: ConnectSecurityProfileClass;
}

export interface ConnectSecurityProfileClass {
    /** (Optional) Specifies the description of the Security Profile. */
    description?: any;
    /** (Required) Specifies the identifier of the hosting Amazon Connect Instance. */
    instance_id:  any;
    /** (Required) Specifies the name of the Security Profile. */
    name:         any;
    /** (Optional) Specifies a list of permissions assigned to the security profile. */
    permissions?: any;
    /** (Optional) Tags to apply to the Security Profile. If configured with a provider */
    tags?:        any;
}