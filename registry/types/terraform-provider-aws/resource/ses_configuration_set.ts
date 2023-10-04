export interface SesConfigurationSet {
    resource: Resource[];
}

export interface Resource {
    ses_configuration_set: SesConfigurationSetClass;
}

export interface SesConfigurationSetClass {
    /** (Required) Name of the configuration set. */
    name:                        any;
    delivery_options?:           DeliveryOptions;
    /** (Optional) Whether or not Amazon SES publishes reputation metrics for the configuration set, such as bounce and complaint rates, to Amazon CloudWatch. The default value is `false`. */
    reputation_metrics_enabled?: any;
    /** (Optional) Whether email sending is enabled or disabled for the configuration set. The default value is `true`. */
    sending_enabled?:            any;
    tracking_options?:           TrackingOptions;
}

export interface DeliveryOptions {
    /** (Optional) Whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is `Require`, messages are only delivered if a TLS connection can be established. If the value is `Optional`, messages can be delivered in plain text if a TLS connection can't be established. Valid values: `Require` or `Optional`. Defaults to `Optional`. */
    tls_policy: any;
}

export interface TrackingOptions {
    /** (Optional) Custom subdomain that is used to redirect email recipients to the Amazon SES event tracking domain. */
    custom_redirect_domain: any;
}