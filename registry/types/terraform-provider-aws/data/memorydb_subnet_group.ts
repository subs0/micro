export interface MemorydbSubnetGroup {
    data: Datum[];
}

export interface Datum {
    memorydb_subnet_group: MemorydbSubnetGroupClass;
}

export interface MemorydbSubnetGroupClass {
    /** (Required) Name of the subnet group. */
    name: any;
}