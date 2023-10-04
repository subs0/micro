export interface VpcPeeringConnectionAccepter {
    resource: Resource[];
}

export interface Resource {
    vpc_peering_connection_accepter: VpcPeeringConnectionAccepterClass;
}

export interface VpcPeeringConnectionAccepterClass {
    /** (Required) The VPC Peering Connection ID to manage. */
    vpc_peering_connection_id: any;
    /** (Optional) Whether or not to accept the peering request. Defaults to `false`. */
    auto_accept?:              any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
}