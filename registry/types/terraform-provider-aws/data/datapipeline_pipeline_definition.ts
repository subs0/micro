export interface DatapipelinePipelineDefinition {
    data: Datum[];
}

export interface Datum {
    datapipeline_pipeline_definition: DatapipelinePipelineDefinitionClass;
}

export interface DatapipelinePipelineDefinitionClass {
    /** (Required) ID of the pipeline. */
    pipeline_id: any;
}