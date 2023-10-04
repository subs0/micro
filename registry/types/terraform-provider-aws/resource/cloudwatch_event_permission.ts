export interface CloudwatchEventPermission {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_event_permission: CloudwatchEventPermissionClass;
}

export interface CloudwatchEventPermissionClass {
    /** (Required) The 12-digit AWS account ID that you are permitting to put events to your default event bus. Specify `*` to permit any account to put events to your default event bus, optionally limited by `condition`. */
    principal:       any;
    /** (Required) An identifier string for the external account that you are granting permissions to. */
    statement_id:    any;
    /** (Optional) The action that you are enabling the other account to perform. Defaults to `events:PutEvents`. */
    action?:         any;
    condition?:      Condition;
    /** (Optional) The name of the event bus to set the permissions on. */
    event_bus_name?: any;
}

export interface Condition {
    /** (Required) Key for the condition. Valid values: `aws:PrincipalOrgID`. */
    key:   any;
    /** (Required) Type of condition. Value values: `StringEquals`. */
    type:  any;
    /** (Required) Value for the key. */
    value: any;
}