export interface ProxyProtocolPolicy {
    resource: Resource[];
}

export interface Resource {
    proxy_protocol_policy: ProxyProtocolPolicyClass;
}

export interface ProxyProtocolPolicyClass {
    /** (Required) The load balancer to which the policy */
    load_balancer:  any;
    /** (Required) List of instance ports to which the policy */
    instance_ports: any;
}