export interface DxConnection {
    resource: Resource[];
}

export interface Resource {
    dx_connection: DxConnectionClass;
}

export interface DxConnectionClass {
    /** (Required) The bandwidth of the connection. Valid values for dedicated connections: 1Gbps, 10Gbps. Valid values for hosted connections: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, 10Gbps and 100Gbps. Case sensitive. */
    bandwidth:        any;
    /** (Optional) The connection MAC Security (MACsec) encryption mode. MAC Security (MACsec) is only available on dedicated connections. Valid values are `no_encrypt`, `should_encrypt`, and `must_encrypt`. */
    encryption_mode?: any;
    /** (Required) The AWS Direct Connect location where the connection is located. See [DescribeLocations](https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html) for the list of AWS Direct Connect locations. Use `locationCode`. */
    location:         any;
    /** (Required) The name of the connection. */
    name:             any;
    /** (Optional) The name of the service provider associated with the connection. */
    provider_name?:   any;
    /** (Optional) Boolean value indicating whether you want the connection to support MAC Security (MACsec). MAC Security (MACsec) is only available on dedicated connections. See [MACsec prerequisites](https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-prerequisites) for more information about MAC Security (MACsec) prerequisites. Default value: `false`. */
    request_macsec?:  any;
    /** (Optional) Set to true if you do not wish the connection to be deleted at destroy time, and instead just removed from the Terraform state. */
    skip_destroy?:    any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:            any;
}