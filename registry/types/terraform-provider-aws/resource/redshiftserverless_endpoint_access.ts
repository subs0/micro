export interface RedshiftserverlessEndpointAccess {
    resource: Resource[];
}

export interface Resource {
    redshiftserverless_endpoint_access: RedshiftserverlessEndpointAccessClass;
}

export interface RedshiftserverlessEndpointAccessClass {
    /** (Required) The name of the endpoint. */
    endpoint_name:           any;
    /** (Required) An array of VPC subnet IDs to associate with the endpoint. */
    subnet_ids:              any;
    /** (Optional) An array of security group IDs to associate with the workgroup. */
    vpc_security_group_ids?: any;
    /** (Required) The name of the workgroup. */
    workgroup_name:          any;
}