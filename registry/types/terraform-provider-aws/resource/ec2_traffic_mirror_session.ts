export interface Ec2TrafficMirrorSession {
    resource: Resource[];
}

export interface Resource {
    ec2_traffic_mirror_session: Ec2TrafficMirrorSessionClass;
}

export interface Ec2TrafficMirrorSessionClass {
    /** (Optional) A description of the traffic mirror session. */
    description?:             any;
    /** (Required, Forces new) ID of the source network interface. Not all network interfaces are eligible as mirror sources. On EC2 instances only nitro based instances support mirroring. */
    network_interface_id?:    any;
    /** (Required) ID of the traffic mirror target to be used */
    traffic_mirror_target_id: any;
    /** (Optional) The number of bytes in each packet to mirror. These are bytes after the VXLAN header. Do not specify this parameter when you want to mirror the entire packet. To mirror a subset of the packet, set this to the length (in bytes) that you want to mirror. */
    packet_length?:           any;
    /** (Required) - The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets. */
    session_number:           any;
    /** (Optional) - The VXLAN ID for the Traffic Mirror session. For more information about the VXLAN protocol, see RFC 7348. If you do not specify a VirtualNetworkId, an account-wide unique id is chosen at random. */
    virtual_network_id?:      any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                    any;
}