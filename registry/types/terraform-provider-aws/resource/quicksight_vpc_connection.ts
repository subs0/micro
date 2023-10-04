export interface QuicksightVpcConnection {
    resource: Resource[];
}

export interface Resource {
    quicksight_vpc_connection: QuicksightVpcConnectionClass;
}

export interface QuicksightVpcConnectionClass {
    /** (Required) The ID of the VPC connection. */
    vpc_connection_id:  any;
    /** (Required) The display name for the VPC connection. */
    name:               any;
    /** (Required) The IAM role to associate with the VPC connection. */
    role_arn:           any;
    /** (Required) A list of security group IDs for the VPC connection. */
    security_group_ids: any;
    /** (Required) A list of subnet IDs for the VPC connection. */
    subnet_ids:         any;
    /** (Optional) AWS account ID. */
    aws_account_id?:    any;
    /** (Optional) A list of IP addresses of DNS resolver endpoints for the VPC connection. */
    dns_resolvers?:     any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
}