export interface OpensearchVpcEndpoint {
    resource: Resource[];
}

export interface Resource {
    opensearch_vpc_endpoint: OpensearchVpcEndpointClass;
}

export interface OpensearchVpcEndpointClass {
    /** (Required, Forces new resource) Specifies the Amazon Resource Name (ARN) of the domain to create the endpoint for */
    domain_arn?: any;
    vpc_options: VpcOptions;
}

export interface VpcOptions {
    /** (Optional) The list of security group IDs associated with the VPC endpoints for the domain. If you do not provide a security group ID, OpenSearch Service uses the default security group for the VPC. */
    security_group_ids?: any;
    /** (Required) A list of subnet IDs associated with the VPC endpoints for the domain. If your domain uses multiple Availability Zones, you need to provide two subnet IDs, one per zone. Otherwise, provide only one. */
    subnet_ids:          any;
}