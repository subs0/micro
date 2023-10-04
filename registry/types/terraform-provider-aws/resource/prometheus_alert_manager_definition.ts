export interface PrometheusAlertManagerDefinition {
    resource: Resource[];
}

export interface Resource {
    prometheus_alert_manager_definition: PrometheusAlertManagerDefinitionClass;
}

export interface PrometheusAlertManagerDefinitionClass {
    /** (Required) ID of the prometheus workspace the alert manager definition should be linked to */
    workspace_id: any;
    /** (Required) the alert manager definition that you want to be applied. See more [in AWS Docs](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alert-manager.html). */
    definition:   any;
}