export interface DatapipelinePipeline {
    data: Datum[];
}

export interface Datum {
    datapipeline_pipeline: DatapipelinePipelineClass;
}

export interface DatapipelinePipelineClass {
    /** (Required) ID of the pipeline. */
    pipeline_id: any;
}