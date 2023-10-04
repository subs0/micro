export interface Ec2LocalGatewayVirtualInterfaceGroups {
    data: Datum[];
}

export interface Datum {
    ec2_local_gateway_virtual_interface_groups: Ec2LocalGatewayVirtualInterfaceGroupsClass;
}

export interface Ec2LocalGatewayVirtualInterfaceGroupsClass {
    /** (Optional) One or more configuration blocks containing name-values filters. See the [EC2 API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLocalGatewayVirtualInterfaceGroups.html) for supported filters. Detailed below. */
    filter?: any;
    /** (Optional) Key-value map of resource tags, each pair of which must exactly match a pair on the desired local gateway route table. */
    tags?:   any;
    /** (Required) Name of the filter. */
    name:    any;
    /** (Required) List of one or more values for the filter. */
    values:  any;
}