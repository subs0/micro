export interface ImagebuilderImage {
    resource: Resource[];
}

export interface Resource {
    imagebuilder_image: ImagebuilderImageClass;
}

export interface ImagebuilderImageClass {
    /** (Required) Amazon Resource Name (ARN) of the Image Builder Infrastructure Configuration. */
    infrastructure_configuration_arn: any;
    /** (Optional) - Amazon Resource Name (ARN) of the container recipe. */
    container_recipe_arn?:            any;
    /** (Optional) Amazon Resource Name (ARN) of the Image Builder Distribution Configuration. */
    distribution_configuration_arn?:  any;
    /** (Optional) Whether additional information about the image being created is collected. Defaults to `true`. */
    enhanced_image_metadata_enabled?: any;
    /** (Optional) Amazon Resource Name (ARN) of the image recipe. */
    image_recipe_arn?:                any;
    image_tests_configuration?:       ImageTestsConfiguration;
    /** (Optional) Key-value map of resource tags for the Image Builder Image. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
}

export interface ImageTestsConfiguration {
    /** (Optional) Whether image tests are enabled. Defaults to `true`. */
    image_tests_enabled: any;
    /** (Optional) Number of minutes before image tests time out. Valid values are between `60` and `1440`. Defaults to `720`. */
    timeout_minutes:     any;
}