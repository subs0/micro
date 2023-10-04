export interface Ec2TrafficMirrorTarget {
    resource: Resource[];
}

export interface Resource {
    ec2_traffic_mirror_target: Ec2TrafficMirrorTargetClass;
}

export interface Ec2TrafficMirrorTargetClass {
    /** (Optional, Forces new) A description of the traffic mirror session. */
    description?:                       any;
    /** (Optional, Forces new) The network interface ID that is associated with the target. */
    network_interface_id?:              any;
    /** (Optional, Forces new) The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target. */
    network_load_balancer_arn?:         any;
    /** (Optional, Forces new) The VPC Endpoint Id of the Gateway Load Balancer that is associated with the target. */
    gateway_load_balancer_endpoint_id?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                              any;
}