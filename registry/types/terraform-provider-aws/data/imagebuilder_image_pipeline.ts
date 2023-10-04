export interface ImagebuilderImagePipeline {
    data: Datum[];
}

export interface Datum {
    imagebuilder_image_pipeline: ImagebuilderImagePipelineClass;
}

export interface ImagebuilderImagePipelineClass {
    /** (Required) ARN of the image pipeline. */
    arn: any;
}