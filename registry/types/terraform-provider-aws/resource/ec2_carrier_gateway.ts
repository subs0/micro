export interface Ec2CarrierGateway {
    resource: Resource[];
}

export interface Resource {
    ec2_carrier_gateway: Ec2CarrierGatewayClass;
}

export interface Ec2CarrierGatewayClass {
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:  any;
    /** (Required) The ID of the VPC to associate with the carrier gateway. */
    vpc_id: any;
}