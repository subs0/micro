export interface RedshiftEndpointAccess {
    resource: Resource[];
}

export interface Resource {
    redshift_endpoint_access: RedshiftEndpointAccessClass;
}

export interface RedshiftEndpointAccessClass {
    /** (Required) The cluster identifier of the cluster to access. */
    cluster_identifier:      any;
    /** (Required) The Redshift-managed VPC endpoint name. */
    endpoint_name:           any;
    /** (Optional) The Amazon Web Services account ID of the owner of the cluster. This is only required if the cluster is in another Amazon Web Services account. */
    resource_owner?:         any;
    /** (Required) The subnet group from which Amazon Redshift chooses the subnet to deploy the endpoint. */
    subnet_group_name:       any;
    /** (Optional) The security group that defines the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint. */
    vpc_security_group_ids?: any;
}