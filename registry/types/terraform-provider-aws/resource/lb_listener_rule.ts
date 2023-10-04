export interface LBListenerRule {
    resource: Resource[];
}

export interface Resource {
    lb_listener_rule: { [key: any]: string };
}