export interface Ec2TrafficMirrorFilterRule {
    resource: Resource[];
}

export interface Resource {
    ec2_traffic_mirror_filter_rule: Ec2TrafficMirrorFilterRuleClass;
}

export interface Ec2TrafficMirrorFilterRuleClass {
    /** (Optional) Description of the traffic mirror filter rule. */
    description?:            any;
    /** (Required) Destination CIDR block to assign to the Traffic Mirror rule. */
    destination_cidr_block:  any;
    /** (Optional) Destination port range. Supported only when the protocol is set to TCP(6) or UDP(17). See Traffic mirror port range documented below */
    destination_port_range?: any;
    /** (Optional) Protocol number, for example 17 (UDP), to assign to the Traffic Mirror rule. For information about the protocol value, see [Protocol Numbers](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml) on the Internet Assigned Numbers Authority (IANA) website. */
    protocol?:               any;
    /** (Required) Action to take (accept | reject) on the filtered traffic. Valid values are `accept` and `reject` */
    rule_action:             any;
    /** (Required) Number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given direction. The rules are processed in ascending order by rule number. */
    rule_number:             any;
    /** (Required) Source CIDR block to assign to the Traffic Mirror rule. */
    source_cidr_block:       any;
    /** (Optional) Source port range. Supported only when the protocol is set to TCP(6) or UDP(17). See Traffic mirror port range documented below */
    source_port_range?:      any;
    /** (Required) Direction of traffic to be captured. Valid values are `ingress` and `egress` */
    traffic_direction:       any;
    /** (Optional) Starting port of the range */
    from_port?:              any;
    /** (Optional) Ending port of the range */
    to_port?:                any;
}