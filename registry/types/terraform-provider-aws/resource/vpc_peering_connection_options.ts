export interface VpcPeeringConnectionOptions {
    resource: Resource[];
}

export interface Resource {
    vpc_peering_connection_options: VpcPeeringConnectionOptionsClass;
}

export interface VpcPeeringConnectionOptionsClass {
    /** (Required) The ID of the requester VPC peering connection. */
    vpc_peering_connection_id:        any;
    /** (Optional) Allow a local VPC to resolve public DNS hostnames to private IP addresses when queried from instances in the peer VPC. */
    allow_remote_vpc_dns_resolution?: any;
}