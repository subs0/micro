export interface VpcEndpointServiceAllowedPrincipal {
    resource: Resource[];
}

export interface Resource {
    vpc_endpoint_service_allowed_principal: VpcEndpointServiceAllowedPrincipalClass;
}

export interface VpcEndpointServiceAllowedPrincipalClass {
    /** (Required) The ID of the VPC endpoint service to allow permission. */
    vpc_endpoint_service_id: any;
    /** (Required) The ARN of the principal to allow permissions. */
    principal_arn:           any;
}