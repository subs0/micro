export interface CloudwatchLogGroup {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_log_group: CloudwatchLogGroupClass;
}

export interface CloudwatchLogGroupClass {
    /** (Optional, Forces new resource) The name of the log group. If omitted, Terraform will assign a random, unique name. */
    name?:              any;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:       any;
    /** (Optional) Set to true if you do not wish the log group (and any logs it may contain) to be deleted at destroy time, and instead just remove the log group from the Terraform state. */
    skip_destroy?:      any;
    /** (Optional) Specifies the number of days */
    retention_in_days?: any;
    /** (Optional) The ARN of the KMS Key to use when encrypting log data. Please note, after the AWS KMS CMK is disassociated from the log group, */
    kms_key_id?:        any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
}