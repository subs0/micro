export interface VpcEndpointService {
    data: Datum[];
}

export interface Datum {
    vpc_endpoint_service: VpcEndpointServiceClass;
}

export interface VpcEndpointServiceClass {
    /** (Optional) Configuration block(s) for filtering. Detailed below. */
    filter?:       any;
    /** (Optional) Common name of an AWS service (e.g., `s3`). */
    service?:      any;
    /** (Optional) Service name that is specified when creating a VPC endpoint. For AWS services the service name is usually in the form `com.amazonaws.<region>.<service>` (the SageMaker Notebook service is an exception to this rule, the service name is in the form `aws.sagemaker.<region>.notebook`). */
    service_name?: any;
    /** (Optional) Service type, `Gateway` or `Interface`. */
    service_type?: any;
    /** (Optional) Map of tags, each pair of which must exactly match a pair on the desired VPC Endpoint Service. */
    tags?:         any;
    /** (Required) Name of the filter field. Valid values can be found in the [EC2 DescribeVpcEndpointServices API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointServices.html). */
    name:          any;
    /** (Required) Set of values that are accepted for the given filter field. Results will be selected if any given value matches. */
    values:        any;
}