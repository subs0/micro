export interface DxLag {
    resource: Resource[];
}

export interface Resource {
    dx_lag: DxLagClass;
}

export interface DxLagClass {
    /** (Required) The name of the LAG. */
    name:                  any;
    /** (Required) The bandwidth of the individual physical connections bundled by the LAG. Valid values: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, 10Gbps and 100Gbps. Case sensitive. */
    connections_bandwidth: any;
    /** (Required) The AWS Direct Connect location in which the LAG should be allocated. See [DescribeLocations](https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html) for the list of AWS Direct Connect locations. Use `locationCode`. */
    location:              any;
    /** (Optional) The ID of an existing dedicated connection to migrate to the LAG. */
    connection_id?:        any;
    /** (Optional, Default:false) A boolean that indicates all connections associated with the LAG should be deleted so that the LAG can be destroyed without error. These objects are *not* recoverable. */
    force_destroy?:        any;
    /** (Optional) The name of the service provider associated with the LAG. */
    provider_name?:        any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                 any;
}