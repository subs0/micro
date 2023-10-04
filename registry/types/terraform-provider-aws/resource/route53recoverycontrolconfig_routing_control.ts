export interface Route53RecoverycontrolconfigRoutingControl {
    resource: Resource[];
}

export interface Resource {
    route53recoverycontrolconfig_routing_control: Route53RecoverycontrolconfigRoutingControlClass;
}

export interface Route53RecoverycontrolconfigRoutingControlClass {
    /** (Required) ARN of the cluster in which this routing control will reside. */
    cluster_arn:        any;
    /** (Required) The name describing the routing control. */
    name:               any;
    /** (Optional) ARN of the control panel in which this routing control will reside. */
    control_panel_arn?: any;
}