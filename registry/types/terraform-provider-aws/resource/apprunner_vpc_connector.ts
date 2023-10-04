export interface ApprunnerVpcConnector {
    resource: Resource[];
}

export interface Resource {
    apprunner_vpc_connector: ApprunnerVpcConnectorClass;
}

export interface ApprunnerVpcConnectorClass {
    /** (Required) Name for the VPC connector. */
    vpc_connector_name: any;
    /** List of IDs of security groups that App Runner should use for access to AWS resources under the specified subnets. If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic. */
    security_groups?:   any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
}