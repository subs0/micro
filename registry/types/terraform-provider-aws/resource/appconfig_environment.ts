export interface AppconfigEnvironment {
    resource: Resource[];
}

export interface Resource {
    appconfig_environment: AppconfigEnvironmentClass;
}

export interface AppconfigEnvironmentClass {
    /** (Required, Forces new resource) AppConfig application ID. Must be between 4 and 7 characters in length. */
    application_id?: any;
    /** (Required) Name for the environment. Must be between 1 and 64 characters in length. */
    name:            any;
    /** (Optional) Description of the environment. Can be at most 1024 characters. */
    description?:    any;
    /** (Optional) Set of Amazon CloudWatch alarms to monitor during the deployment process. Maximum of 5. See [Monitor](#monitor) below for more details. */
    monitor?:        any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
    /** (Required) ARN of the Amazon CloudWatch alarm. */
    alarm_arn:       any;
    /** (Optional) ARN of an IAM role for AWS AppConfig to monitor `alarm_arn`. */
    alarm_role_arn?: any;
}