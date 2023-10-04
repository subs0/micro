export interface ImagebuilderImagePipelines {
    data: Datum[];
}

export interface Datum {
    imagebuilder_image_pipelines: ImagebuilderImagePipelinesClass;
}

export interface ImagebuilderImagePipelinesClass {
    /** (Optional) Configuration block(s) for filtering. Detailed below. */
    filter?: any;
    /** (Required) Name of the filter field. Valid values can be found in the [Image Builder ListImagePipelines API Reference](https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePipelines.html). */
    name:    any;
    /** (Required) Set of values that are accepted for the given filter field. Results will be selected if any given value matches. */
    values:  any;
}