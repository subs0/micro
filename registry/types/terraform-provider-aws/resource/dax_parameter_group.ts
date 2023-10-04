export interface DaxParameterGroup {
    resource: Resource[];
}

export interface Resource {
    dax_parameter_group: DaxParameterGroupClass;
}

export interface DaxParameterGroupClass {
    /** (Optional, ForceNew) A description of the parameter group. */
    description?: any;
}