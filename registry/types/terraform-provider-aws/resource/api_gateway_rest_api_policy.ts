export interface APIGatewayRESTAPIPolicy {
    resource: Resource[];
}

export interface Resource {
    api_gateway_rest_api_policy: APIGatewayRESTAPIPolicyClass;
}

export interface APIGatewayRESTAPIPolicyClass {
    /** (Required) ID of the REST API. */
    rest_api_id: any;
    /** (Required) JSON formatted policy document that controls access to the API Gateway. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy) */
    policy:      any;
}