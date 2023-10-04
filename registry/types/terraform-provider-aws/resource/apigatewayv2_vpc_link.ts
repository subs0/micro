export interface Apigatewayv2VpcLink {
    resource: Resource[];
}

export interface Resource {
    apigatewayv2_vpc_link: Apigatewayv2VpcLinkClass;
}

export interface Apigatewayv2VpcLinkClass {
    /** (Required) Name of the VPC Link. Must be between 1 and 128 characters in length. */
    name:               any;
    /** (Required) Security group IDs for the VPC Link. */
    security_group_ids: any;
    /** (Required) Subnet IDs for the VPC Link. */
    subnet_ids:         any;
    /** (Optional) Map of tags to assign to the VPC Link. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
}