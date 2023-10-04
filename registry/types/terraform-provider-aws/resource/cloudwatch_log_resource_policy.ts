export interface CloudwatchLogResourcePolicy {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_log_resource_policy: CloudwatchLogResourcePolicyClass;
}

export interface CloudwatchLogResourcePolicyClass {
    /** (Required) Details of the resource policy, including the identity of the principal that is enabled to put logs to this account. This is formatted as a JSON string. Maximum length of 5120 characters. */
    policy_document: any;
    /** (Required) Name of the resource policy. */
    policy_name:     any;
}