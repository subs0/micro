export interface Sesv2ConfigurationSet {
    resource: Resource[];
}

export interface Resource {
    sesv2_configuration_set: Sesv2ConfigurationSetClass;
}

export interface Sesv2ConfigurationSetClass {
    /** (Required) The name of the configuration set. */
    configuration_set_name: any;
    delivery_options?:      DeliveryOptions;
    reputation_options?:    ReputationOptions;
    sending_options?:       SendingOptions;
    suppression_options?:   SuppressionOptions;
    /** (Optional) A map of tags to assign to the service. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
    tracking_options?:      TrackingOptions;
    vdm_options?:           VDMOptions;
    /** (Optional) Specifies additional settings for your VDM configuration as applicable to the Dashboard. */
    dashboard_options?:     DashboardOptions;
    /** (Optional) Specifies additional settings for your VDM configuration as applicable to the Guardian. */
    guardian_options?:      GuardianOptions;
}

export interface DashboardOptions {
    /** (Optional) Specifies the status of your VDM engagement metrics collection. Valid values: `ENABLED`, `DISABLED`. */
    engagement_metrics: any;
}

export interface DeliveryOptions {
    /** (Optional) The name of the dedicated IP pool to associate with the configuration set. */
    sending_pool_name: any;
    /** (Optional) Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). Valid values: `REQUIRE`, `OPTIONAL`. */
    tls_policy:        any;
}

export interface GuardianOptions {
    /** (Optional) Specifies the status of your VDM optimized shared delivery. Valid values: `ENABLED`, `DISABLED`. */
    optimized_shared_delivery: any;
}

export interface ReputationOptions {
    /** (Optional) If `true`, tracking of reputation metrics is enabled for the configuration set. If `false`, tracking of reputation metrics is disabled for the configuration set. */
    reputation_metrics_enabled: any;
}

export interface SendingOptions {
    /** (Optional) If `true`, email sending is enabled for the configuration set. If `false`, email sending is disabled for the configuration set. */
    sending_enabled: any;
}

export interface SuppressionOptions {
    /** (Optional) A list that contains the reasons that email addresses are automatically added to the suppression list for your account. Valid values: `BOUNCE`, `COMPLAINT`. */
    suppressed_reasons: any;
}

export interface TrackingOptions {
    /** (Required) The domain to use for tracking open and click events. */
    custom_redirect_domain: any;
}

export interface VDMOptions {
    /** (Optional) Specifies additional settings for your VDM configuration as applicable to the Dashboard. */
    dashboard_options: any;
    /** (Optional) Specifies additional settings for your VDM configuration as applicable to the Guardian. */
    guardian_options:  any;
}