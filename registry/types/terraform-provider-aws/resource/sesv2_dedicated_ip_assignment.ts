export interface Sesv2DedicatedIPAssignment {
    resource: Resource[];
}

export interface Resource {
    sesv2_dedicated_ip_assignment: Sesv2DedicatedIPAssignmentClass;
}

export interface Sesv2DedicatedIPAssignmentClass {
    /** (Required) Dedicated IP address. */
    ip:                    any;
    /** (Required) Dedicated IP address. */
    destination_pool_name: any;
}