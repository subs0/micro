export interface Ec2InstanceConnectEndpoint {
    resource: Resource[];
}

export interface Resource {
    ec2_instance_connect_endpoint: Ec2InstanceConnectEndpointClass;
}

export interface Ec2InstanceConnectEndpointClass {
    /** (Optional) Indicates whether your client's IP address is preserved as the source. Default: `true`. */
    preserve_client_ip?: any;
    /** (Optional) One or more security groups to associate with the endpoint. If you don't specify a security group, the default security group for the VPC will be associated with the endpoint. */
    security_group_ids?: any;
    /** (Required) The ID of the subnet in which to create the EC2 Instance Connect Endpoint. */
    subnet_id:           any;
    /** (Optional) Map of tags to assign to this resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
}