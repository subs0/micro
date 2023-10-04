export interface Ec2TransitGatewayConnect {
    resource: Resource[];
}

export interface Resource {
    ec2_transit_gateway_connect: Ec2TransitGatewayConnectClass;
}

export interface Ec2TransitGatewayConnectClass {
    /** (Optional) The tunnel protocol. Valid values: `gre`. Default is `gre`. */
    protocol?:                                        any;
    /** (Optional) Key-value tags for the EC2 Transit Gateway Connect. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                            any;
    /** (Optional) Boolean whether the Connect should be associated with the EC2 Transit Gateway association default route table. This cannot be configured or perform drift detection with Resource Access Manager shared EC2 Transit Gateways. Default value: `true`. */
    transit_gateway_default_route_table_association?: any;
    /** (Optional) Boolean whether the Connect should propagate routes with the EC2 Transit Gateway propagation default route table. This cannot be configured or perform drift detection with Resource Access Manager shared EC2 Transit Gateways. Default value: `true`. */
    transit_gateway_default_route_table_propagation?: any;
    /** (Required) Identifier of EC2 Transit Gateway. */
    transit_gateway_id:                               any;
    /** (Required) The underlaying VPC attachment */
    transport_attachment_id:                          any;
}