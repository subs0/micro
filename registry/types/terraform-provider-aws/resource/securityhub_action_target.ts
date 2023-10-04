export interface SecurityhubActionTarget {
    resource: Resource[];
}

export interface Resource {
    securityhub_action_target: SecurityhubActionTargetClass;
}

export interface SecurityhubActionTargetClass {
    /** (Required) The description for the custom action target. */
    name:        any;
    /** (Required) The ID for the custom action target. */
    identifier:  any;
    /** (Required) The name of the custom action target. */
    description: any;
}