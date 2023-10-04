export interface CloudwatchLogDestinationPolicy {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_log_destination_policy: CloudwatchLogDestinationPolicyClass;
}

export interface CloudwatchLogDestinationPolicyClass {
    /** (Required) A name for the subscription filter */
    destination_name: any;
    /** (Required) The policy document. This is a JSON formatted string. */
    access_policy:    any;
    /** (Optional) Specify true if you are updating an existing destination policy to grant permission to an organization ID instead of granting permission to individual AWS accounts. */
    force_update?:    any;
}