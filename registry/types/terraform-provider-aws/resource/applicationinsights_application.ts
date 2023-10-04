export interface ApplicationinsightsApplication {
    resource: Resource[];
}

export interface Resource {
    applicationinsights_application: ApplicationinsightsApplicationClass;
}

export interface ApplicationinsightsApplicationClass {
    /** (Required) Name of the resource group. */
    resource_group_name:     any;
    /** (Optional)  Indicates whether Application Insights automatically configures unmonitored resources in the resource group. */
    auto_config_enabled?:    any;
    /** (Optional) Configures all of the resources in the resource group by applying the recommended configurations. */
    auto_create?:            any;
    /** (Optional)  Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as instance terminated, failed deployment, and others. */
    cwe_monitor_enabled?:    any;
    /** (Optional) Application Insights can create applications based on a resource group or on an account. To create an account-based application using all of the resources in the account, set this parameter to `ACCOUNT_BASED`. */
    grouping_type?:          any;
    /** (Optional) When set to `true`, creates opsItems for any problems detected on an application. */
    ops_center_enabled?:     any;
    /** (Optional) SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to receive notifications for updates to the opsItem. */
    ops_item_sns_topic_arn?: any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                   any;
}