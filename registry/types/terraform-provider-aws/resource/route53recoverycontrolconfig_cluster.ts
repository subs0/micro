export interface Route53RecoverycontrolconfigCluster {
    resource: Resource[];
}

export interface Resource {
    route53recoverycontrolconfig_cluster: Route53RecoverycontrolconfigClusterClass;
}

export interface Route53RecoverycontrolconfigClusterClass {
    /** (Required) Unique name describing the cluster. */
    name: any;
}