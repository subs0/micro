export interface S3OutpostsEndpoint {
    resource: Resource[];
}

export interface Resource {
    s3outposts_endpoint: S3OutpostsEndpointClass;
}

export interface S3OutpostsEndpointClass {
    /** (Required) Identifier of the Outpost to contain this endpoint. */
    outpost_id:                any;
    /** (Required) Identifier of the EC2 Security Group. */
    security_group_id:         any;
    /** (Required) Identifier of the EC2 Subnet. */
    subnet_id:                 any;
    /** (Optional) Type of access for the network connectivity. Valid values are `Private` or `CustomerOwnedIp`. */
    access_type?:              any;
    /** (Optional) The ID of a Customer Owned IP Pool. For more on customer owned IP addresses see the [User Guide](https://docs.aws.amazon.com/outposts/latest/userguide/local-rack.html#local-gateway-subnet). */
    customer_owned_ipv4_pool?: any;
}