export interface VpcEndpointPolicy {
    resource: Resource[];
}

export interface Resource {
    vpc_endpoint_policy: VpcEndpointPolicyClass;
}

export interface VpcEndpointPolicyClass {
    /** (Required) The VPC Endpoint ID. */
    vpc_endpoint_id: any;
    /** (Optional) A policy to attach to the endpoint that controls access to the service. Defaults to full access. All `Gateway` and some `Interface` endpoints support policies - see the [relevant AWS documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-access.html) for more details. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). */
    policy?:         any;
}