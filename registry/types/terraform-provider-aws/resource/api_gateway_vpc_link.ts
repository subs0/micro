export interface APIGatewayVpcLink {
    resource: Resource[];
}

export interface Resource {
    api_gateway_vpc_link: APIGatewayVpcLinkClass;
}

export interface APIGatewayVpcLinkClass {
    /** (Required) Name used to label and identify the VPC link. */
    name:         any;
    /** (Optional) Description of the VPC link. */
    description?: any;
    /** (Required, ForceNew) List of network load balancer arns in the VPC targeted by the VPC link. Currently AWS only supports 1 target. */
    target_arns?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}