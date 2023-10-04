export interface Route53RecoverycontrolconfigControlPanel {
    resource: Resource[];
}

export interface Resource {
    route53recoverycontrolconfig_control_panel: Route53RecoverycontrolconfigControlPanelClass;
}

export interface Route53RecoverycontrolconfigControlPanelClass {
    /** (Required) ARN of the cluster in which this control panel will reside. */
    cluster_arn: any;
    /** (Required) Name describing the control panel. */
    name:        any;
}