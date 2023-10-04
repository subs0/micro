export interface DevicefarmNetworkProfile {
    resource: Resource[];
}

export interface Resource {
    devicefarm_network_profile: DevicefarmNetworkProfileClass;
}

export interface DevicefarmNetworkProfileClass {
    /** (Optional) The description of the network profile. */
    description?:             any;
    /** (Optional) The data throughput rate in bits per second, as an integer from `0` to `104857600`. Default value is `104857600`. */
    downlink_bandwidth_bits?: any;
    /** (Optional) Delay time for all packets to destination in milliseconds as an integer from `0` to `2000`. */
    downlink_delay_ms?:       any;
    /** (Optional) Time variation in the delay of received packets in milliseconds as an integer from `0` to `2000`. */
    downlink_jitter_ms?:      any;
    /** (Optional) Proportion of received packets that fail to arrive from `0` to `100` percent. */
    downlink_loss_percent?:   any;
    /** (Required) The name for the network profile. */
    name:                     any;
    /** (Optional) The data throughput rate in bits per second, as an integer from `0` to `104857600`. Default value is `104857600`. */
    uplink_bandwidth_bits?:   any;
    /** (Optional) Delay time for all packets to destination in milliseconds as an integer from `0` to `2000`. */
    uplink_delay_ms?:         any;
    /** (Optional) Time variation in the delay of received packets in milliseconds as an integer from `0` to `2000`. */
    uplink_jitter_ms?:        any;
    /** (Optional) Proportion of received packets that fail to arrive from `0` to `100` percent. */
    uplink_loss_percent?:     any;
    /** (Required) The ARN of the project for the network profile. */
    project_arn:              any;
    /** (Optional) The type of network profile to create. Valid values are listed are `PRIVATE` and `CURATED`. */
    type?:                    any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                    any;
}