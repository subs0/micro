export interface WorkspacesIPGroup {
    resource: Resource[];
}

export interface Resource {
    workspaces_ip_group: WorkspacesIPGroupClass;
}

export interface WorkspacesIPGroupClass {
    /** (Required) The name of the IP group. */
    name:         any;
    /** (Optional) The description of the IP group. */
    description?: any;
    /** (Optional) One or more pairs specifying the IP group rule (in CIDR format) from which web requests originate. */
    rules?:       any;
}