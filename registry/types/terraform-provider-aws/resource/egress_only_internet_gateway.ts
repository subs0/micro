export interface EgressOnlyInternetGateway {
    resource: Resource[];
}

export interface Resource {
    egress_only_internet_gateway: EgressOnlyInternetGatewayClass;
}

export interface EgressOnlyInternetGatewayClass {
    /** (Required) The VPC ID to create in. */
    vpc_id: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:  any;
}