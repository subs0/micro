export interface CloudwatchLogDataProtectionPolicy {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_log_data_protection_policy: CloudwatchLogDataProtectionPolicyClass;
}

export interface CloudwatchLogDataProtectionPolicyClass {
    /** (Required) The name of the log group under which the log stream is to be created. */
    log_group_name:  any;
    /** (Required) Specifies the data protection policy in JSON. Read more at [Data protection policy syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data-start.html#mask-sensitive-log-data-policysyntax). */
    policy_document: any;
}