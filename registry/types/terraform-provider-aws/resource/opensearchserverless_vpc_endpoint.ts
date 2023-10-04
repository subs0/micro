export interface OpensearchserverlessVpcEndpoint {
    resource: Resource[];
}

export interface Resource {
    opensearchserverless_vpc_endpoint: OpensearchserverlessVpcEndpointClass;
}

export interface OpensearchserverlessVpcEndpointClass {
    /** (Required) Name of the interface endpoint. */
    name:                any;
    /** (Required) One or more subnet IDs from which you'll access OpenSearch Serverless. Up to 6 subnets can be provided. */
    subnet_ids:          any;
    /** (Required) ID of the VPC from which you'll access OpenSearch Serverless. */
    vpc_id:              any;
    /** (Optional) One or more security groups that define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint. Up to 5 security groups can be provided. */
    security_group_ids?: any;
}