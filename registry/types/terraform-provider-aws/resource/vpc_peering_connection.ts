export interface VpcPeeringConnection {
    resource: Resource[];
}

export interface Resource {
    vpc_peering_connection: VpcPeeringConnectionClass;
}

export interface VpcPeeringConnectionClass {
    /** (Optional) The AWS account ID of the owner of the peer VPC. */
    peer_owner_id?:                   any;
    /** (Required) The ID of the VPC with which you are creating the VPC Peering Connection. */
    peer_vpc_id:                      any;
    /** (Required) The ID of the requester VPC. */
    vpc_id:                           any;
    /** (Optional) Accept the peering (both VPCs need to be in the same AWS account and region). */
    auto_accept?:                     any;
    /** (Optional) The region of the accepter VPC of the VPC Peering Connection. `auto_accept` must be `false`, */
    peer_region?:                     any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
    /** (Optional) Allow a local VPC to resolve public DNS hostnames to */
    allow_remote_vpc_dns_resolution?: any;
}