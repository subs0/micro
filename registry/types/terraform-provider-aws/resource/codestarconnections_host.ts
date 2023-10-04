export interface CodestarconnectionsHost {
    resource: Resource[];
}

export interface Resource {
    codestarconnections_host: CodestarconnectionsHostClass;
}

export interface CodestarconnectionsHostClass {
    /** (Required) The name of the host to be created. The name must be unique in the calling AWS account. */
    name:               any;
    /** (Required) The endpoint of the infrastructure to be represented by the host after it is created. */
    provider_endpoint:  any;
    /** (Required) The name of the external provider where your third-party code repository is configured. */
    provider_type:      any;
    /** (Optional) The VPC configuration to be provisioned for the host. A VPC must be configured, and the infrastructure to be represented by the host must already be connected to the VPC. */
    vpc_configuration?: any;
    /** (Required) ID of the security group or security groups associated with the Amazon VPC connected to the infrastructure where your provider type is installed. */
    security_group_ids: any;
    /** (Required) The ID of the subnet or subnets associated with the Amazon VPC connected to the infrastructure where your provider type is installed. */
    subnet_ids:         any;
    /** (Optional) The value of the Transport Layer Security (TLS) certificate associated with the infrastructure where your provider type is installed. */
    tls_certificate?:   any;
    /** (Required) The ID of the Amazon VPC connected to the infrastructure where your provider type is installed. */
    vpc_id:             any;
}