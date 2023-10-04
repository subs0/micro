export interface LightsailInstancePublicPorts {
    resource: Resource[];
}

export interface Resource {
    lightsail_instance_public_ports: LightsailInstancePublicPortsClass;
}

export interface LightsailInstancePublicPortsClass {
    /** (Required) Name of the Lightsail Instance. */
    instance_name: any;
    port_info:     PortInfo;
}

export interface PortInfo {
    /** (Required) First port in a range of open ports on an instance. */
    from_port:          any;
    /** (Required) IP protocol name. Valid values are `tcp`, `all`, `udp`, and `icmp`. */
    protocol:           any;
    /** (Required) Last port in a range of open ports on an instance. */
    to_port:            any;
    /** (Optional) Set of CIDR blocks. */
    cidrs?:             any;
    /** (Optional) Set of CIDR aliases that define access for a preconfigured range of IP addresses. */
    cidr_list_aliases?: any;
}