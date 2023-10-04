export interface Ec2NetworkInsightsPath {
    resource: Resource[];
}

export interface Resource {
    ec2_network_insights_path: Ec2NetworkInsightsPathClass;
}

export interface Ec2NetworkInsightsPathClass {
    /** (Required) ID or ARN of the resource which is the source of the path. Can be an Instance, Internet Gateway, Network Interface, Transit Gateway, VPC Endpoint, VPC Peering Connection or VPN Gateway. If the resource is in another account, you must specify an ARN. */
    source:            any;
    /** (Required) ID or ARN of the resource which is the destination of the path. Can be an Instance, Internet Gateway, Network Interface, Transit Gateway, VPC Endpoint, VPC Peering Connection or VPN Gateway. If the resource is in another account, you must specify an ARN. */
    destination:       any;
    /** (Required) Protocol to use for analysis. Valid options are `tcp` or `udp`. */
    protocol:          any;
    /** (Optional) IP address of the source resource. */
    source_ip?:        any;
    /** (Optional) IP address of the destination resource. */
    destination_ip?:   any;
    /** (Optional) Destination port to analyze access to. */
    destination_port?: any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
}