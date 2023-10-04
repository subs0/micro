export interface DaxSubnetGroup {
    resource: Resource[];
}

export interface Resource {
    dax_subnet_group: DaxSubnetGroupClass;
}

export interface DaxSubnetGroupClass {
    /** (Optional) A description of the subnet group. */
    description?: any;
}