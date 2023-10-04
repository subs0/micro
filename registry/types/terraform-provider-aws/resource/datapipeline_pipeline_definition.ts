export interface DatapipelinePipelineDefinition {
    resource: Resource[];
}

export interface Resource {
    datapipeline_pipeline_definition: DatapipelinePipelineDefinitionClass;
}

export interface DatapipelinePipelineDefinitionClass {
    /** (Required) ID of the pipeline. */
    pipeline_id:       any;
    /** (Required) Configuration block for the objects that define the pipeline. See below */
    pipeline_object:   any;
    /** (Optional) Configuration block for the parameter objects used in the pipeline definition. See below */
    parameter_object?: any;
    /** (Optional) Configuration block for the parameter values used in the pipeline definition. See below */
    parameter_value?:  any;
    /** (Required) Configuration block for Key-value pairs that define the properties of the object. See below */
    field:             any;
    /** (Required) ID of the parameter value. */
    id:                any;
    /** (Required) ARN of the storage connector. */
    name:              any;
    /** (Required) Field identifier. */
    key:               any;
    /** (Optional) Field value, expressed as the identifier of another object */
    ref_value?:        any;
    any_value:      string;
    /** (Required) Configuration block for attributes of the parameter object. See below */
    attribute:         any;
}