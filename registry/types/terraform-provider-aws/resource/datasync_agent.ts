export interface DatasyncAgent {
    resource: Resource[];
}

export interface Resource {
    datasync_agent: DatasyncAgentClass;
}

export interface DatasyncAgentClass {
    /** (Required) Name of the DataSync Agent. */
    name:                   any;
    /** (Optional) DataSync Agent activation key during resource creation. Conflicts with `ip_address`. If an `ip_address` is provided instead, Terraform will retrieve the `activation_key` as part of the resource creation. */
    activation_key?:        any;
    /** (Optional) DataSync Agent IP address to retrieve activation key during resource creation. Conflicts with `activation_key`. DataSync Agent must be accessible on port 80 from where Terraform is running. */
    ip_address?:            any;
    /** (Optional) The IP address of the VPC endpoint the agent should connect to when retrieving an activation key during resource creation. Conflicts with `activation_key`. */
    private_link_endpoint?: any;
    /** (Optional) The ARNs of the security groups used to protect your data transfer task subnets. */
    security_group_arns?:   any;
    /** (Optional) The Amazon Resource Names (ARNs) of the subnets in which DataSync will create elastic network interfaces for each data transfer task. */
    subnet_arns?:           any;
    /** (Optional) Key-value pairs of resource tags to assign to the DataSync Agent. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
    /** (Optional) The ID of the VPC (virtual private cloud) endpoint that the agent has access to. */
    vpc_endpoint_id?:       any;
}