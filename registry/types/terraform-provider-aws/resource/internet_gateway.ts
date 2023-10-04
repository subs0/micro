export interface InternetGateway {
    resource: Resource[];
}

export interface Resource {
    internet_gateway: InternetGatewayClass;
}

export interface InternetGatewayClass {
    /** (Optional) The VPC ID to create in.  See the [aws_internet_gateway_attachment](internet_gateway_attachment.html) resource for an alternate way to attach an Internet Gateway to a VPC. */
    vpc_id?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:   any;
}