export interface ImagebuilderImagePipeline {
    resource: Resource[];
}

export interface Resource {
    imagebuilder_image_pipeline: ImagebuilderImagePipelineClass;
}

export interface ImagebuilderImagePipelineClass {
    /** (Required) Amazon Resource Name (ARN) of the Image Builder Infrastructure Configuration. */
    infrastructure_configuration_arn: any;
    /** (Required) Name of the image pipeline. */
    name:                             any;
    /** (Optional) Amazon Resource Name (ARN) of the container recipe. */
    container_recipe_arn?:            any;
    /** (Optional) Description of the image pipeline. */
    description?:                     any;
    /** (Optional) Amazon Resource Name (ARN) of the Image Builder Distribution Configuration. */
    distribution_configuration_arn?:  any;
    /** (Optional) Whether additional information about the image being created is collected. Defaults to `true`. */
    enhanced_image_metadata_enabled?: any;
    /** (Optional) Amazon Resource Name (ARN) of the image recipe. */
    image_recipe_arn?:                any;
    image_scanning_configuration?:    ImageScanningConfiguration;
    image_tests_configuration?:       ImageTestsConfiguration;
    schedule?:                        Schedule;
    /** (Optional) Status of the image pipeline. Valid values are `DISABLED` and `ENABLED`. Defaults to `ENABLED`. */
    status?:                          any;
    /** (Optional) Key-value map of resource tags for the image pipeline. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
    /** (Optional) Configuration block with ECR configuration for image scanning. Detailed below. */
    ecr_configuration?:               EcrConfiguration;
}

export interface EcrConfiguration {
    "container tags": any;
    /** (Optional) The name of the repository to scan */
    repository_name:  any;
}

export interface ImageScanningConfiguration {
    /** (Optional) Whether image scans are enabled. Defaults to `false`. */
    image_scanning_enabled: any;
    /** (Optional) Configuration block with ECR configuration for image scanning. Detailed below. */
    ecr_configuration:      any;
}

export interface ImageTestsConfiguration {
    /** (Optional) Whether image tests are enabled. Defaults to `true`. */
    image_tests_enabled: any;
    /** (Optional) Number of minutes before image tests time out. Valid values are between `60` and `1440`. Defaults to `720`. */
    timeout_minutes:     any;
}

export interface Schedule {
    /** (Required) Cron expression of how often the pipeline start condition is evaluated. For example, `cron(0 0 * * ? *)` is evaluated every day at midnight UTC. Configurations using the five field syntax that was previously accepted by the API, such as `cron(0 0 * * *)`, must be updated to the six field syntax. For more information, see the [Image Builder User Guide](https://docs.aws.amazon.com/imagebuilder/latest/userguide/cron-expressions.html). */
    schedule_expression:                any;
    /** (Optional) Condition when the pipeline should trigger a new image build. Valid values are `EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE` and `EXPRESSION_MATCH_ONLY`. Defaults to `EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE`. */
    pipeline_execution_start_condition: any;
    /** (Optional) The timezone that applies to the scheduling expression. For example, "Etc/UTC", "America/Los_Angeles" in the [IANA timezone format](https://www.joda.org/joda-time/timezones.html). If not specified this defaults to UTC. */
    timezone:                           any;
}