export interface VpcEndpoint {
    data: Datum[];
}

export interface Datum {
    vpc_endpoint: VpcEndpointClass;
}

export interface VpcEndpointClass {
    /** (Optional) Custom filter block as described below. */
    filter?:       any;
    /** (Optional) ID of the specific VPC Endpoint to retrieve. */
    id?:           any;
    /** (Optional) Service name of the specific VPC Endpoint to retrieve. For AWS services the service name is usually in the form `com.amazonaws.<region>.<service>` (the SageMaker Notebook service is an exception to this rule, the service name is in the form `aws.sagemaker.<region>.notebook`). */
    service_name?: any;
    /** (Optional) State of the specific VPC Endpoint to retrieve. */
    state?:        any;
    /** (Optional) Map of tags, each pair of which must exactly match */
    tags?:         any;
    /** (Optional) ID of the VPC in which the specific VPC Endpoint is used. */
    vpc_id?:       any;
    /** (Required) Name of the field to filter by, as defined by */
    name:          any;
    /** (Required) Set of values that are accepted for the given field. */
    values:        any;
}