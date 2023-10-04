export interface GlobalacceleratorEndpointGroup {
    resource: Resource[];
}

export interface Resource {
    globalaccelerator_endpoint_group: GlobalacceleratorEndpointGroupClass;
}

export interface GlobalacceleratorEndpointGroupClass {
    /** (Required) The Amazon Resource Name (ARN) of the listener. */
    listener_arn:                    any;
    /** (Optional) The time—10 seconds or 30 seconds—between each health check for an endpoint. The default value is 30. */
    health_check_interval_seconds?:  any;
    /** (Optional) If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The default value is slash (`/`). Terraform will only perform drift detection of its value when present in a configuration. */
    health_check_path?:              any;
    /** (Optional) The port that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port is the listener port that this endpoint group is associated with. If listener port is a list of ports, Global Accelerator uses the first port in the list. */
    health_check_port?:              any;
    /** (Optional) The protocol that AWS Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default value is TCP. */
    health_check_protocol?:          any;
    /** (Optional) The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3. */
    threshold_count?:                any;
    /** (Optional) The percentage of traffic to send to an AWS Region. Additional traffic is distributed to other endpoint groups for this listener. The default value is 100. */
    traffic_dial_percentage?:        any;
    /** (Optional) The list of endpoint objects. Fields documented below. */
    endpoint_configuration?:         any;
    /** (Optional) Override specific listener ports used to route traffic to endpoints that are part of this endpoint group. Fields documented below. */
    port_override?:                  any;
    /** (Optional) Indicates whether client IP address preservation is enabled for an Application Load Balancer endpoint. See the [AWS documentation](https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.html) for more details. The default value is `false`. */
    client_ip_preservation_enabled?: any;
    /** (Optional) An ID for the endpoint. If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address allocation ID. */
    endpoint_id?:                    any;
    /** (Optional) The weight associated with the endpoint. When you add weights to endpoints, you configure AWS Global Accelerator to route traffic based on proportions that you specify. */
    weight?:                         any;
    /** (Required) The endpoint port that you want a listener port to be mapped to. This is the port on the endpoint, such as the Application Load Balancer or Amazon EC2 instance. */
    endpoint_port:                   any;
    /** (Required) The listener port that you want to map to a specific endpoint port. This is the port that user traffic arrives to the Global Accelerator on. */
    listener_port:                   any;
}