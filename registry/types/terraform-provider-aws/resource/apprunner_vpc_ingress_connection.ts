export interface ApprunnerVpcIngressConnection {
    resource: Resource[];
}

export interface Resource {
    apprunner_vpc_ingress_connection: ApprunnerVpcIngressConnectionClass;
}

export interface ApprunnerVpcIngressConnectionClass {
    /** (Required) A name for the VPC Ingress Connection resource. It must be unique across all the active VPC Ingress Connections in your AWS account in the AWS Region. */
    name:                      any;
    /** (Required) The Amazon Resource Name (ARN) for this App Runner service that is used to create the VPC Ingress Connection resource. */
    service_arn:               any;
    /** (Required) Specifications for the customer’s Amazon VPC and the related AWS PrivateLink VPC endpoint that are used to create the VPC Ingress Connection resource. See [Ingress VPC Configuration](#ingress-vpc-configuration) below for more details. */
    ingress_vpc_configuration: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
    /** (Required) The ID of the VPC that is used for the VPC endpoint. */
    vpc_id:                    any;
    /** (Required) The ID of the VPC endpoint that your App Runner service connects to. */
    vpc_endpoint_id:           any;
}