export interface MemorydbParameterGroup {
    data: Datum[];
}

export interface Datum {
    memorydb_parameter_group: MemorydbParameterGroupClass;
}

export interface MemorydbParameterGroupClass {
    /** (Required) Name of the parameter group. */
    name: any;
}