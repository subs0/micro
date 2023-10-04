export interface DefaultSubnet {
    resource: Resource[];
}

export interface Resource {
    default_subnet: DefaultSubnetClass;
}

export interface DefaultSubnetClass {
    /** (Optional) Whether destroying the resource deletes the default subnet. Default: `false` */
    force_destroy?: any;
}