export interface DefaultVpc {
    resource: Resource[];
}

export interface Resource {
    default_vpc: DefaultVpcClass;
}

export interface DefaultVpcClass {
    /** (Optional) Whether destroying the resource deletes the default VPC. Default: `false` */
    force_destroy?: any;
}