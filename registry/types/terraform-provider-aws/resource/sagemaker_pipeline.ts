export interface SagemakerPipeline {
    resource: Resource[];
}

export interface Resource {
    sagemaker_pipeline: SagemakerPipelineClass;
}

export interface SagemakerPipelineClass {
    /** (Required) The name of the pipeline. */
    pipeline_name:                    any;
    /** (Optional) A description of the pipeline. */
    pipeline_description?:            any;
    /** (Required) The display name of the pipeline. */
    pipeline_display_name:            any;
    /** (Optional) The [JSON pipeline definition](https://aws-sagemaker-mlops.github.io/sagemaker-model-building-pipeline-definition-JSON-schema/) of the pipeline. */
    pipeline_definition?:             any;
    /** (Optional) The location of the pipeline definition stored in Amazon S3. If specified, SageMaker will retrieve the pipeline definition from this location. see [Pipeline Definition S3 Location](#pipeline-definition-s3-location) details below. */
    pipeline_definition_s3_location?: any;
    /** (Required) The name of the Pipeline (must be unique). */
    role_arn:                         any;
    /** (Optional) This is the configuration that controls the parallelism of the pipeline. If specified, it applies to all runs of this pipeline by default. see [Parallelism Configuration](#parallelism-configuration) details below. */
    parallelism_configuration?:       any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
    /** (Required) The max number of steps that can be executed in parallel. */
    max_parallel_execution_steps:     any;
    /** (Required) Name of the S3 bucket. */
    bucket:                           any;
    /** (Required) The object key (or key name) uniquely identifies the object in an S3 bucket. */
    object_key:                       any;
    /** (Optional) Version Id of the pipeline definition file. If not specified, Amazon SageMaker will retrieve the latest version. */
    version_id?:                      any;
}