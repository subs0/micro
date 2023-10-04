export interface RedshiftEndpointAuthorization {
    resource: Resource[];
}

export interface Resource {
    redshift_endpoint_authorization: RedshiftEndpointAuthorizationClass;
}

export interface RedshiftEndpointAuthorizationClass {
    /** (Required) The Amazon Web Services account ID to grant access to. */
    account:            any;
    /** (Required) The cluster identifier of the cluster to grant access to. */
    cluster_identifier: any;
    /** (Optional) Indicates whether to force the revoke action. If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted. Default value is `false`. */
    force_delete?:      any;
    /** (Optional) The virtual private cloud (VPC) identifiers to grant access to. If none are specified all VPCs in shared account are allowed. */
    vpc_ids?:           any;
}