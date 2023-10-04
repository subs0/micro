export interface SagemakerModelPackageGroup {
    resource: Resource[];
}

export interface Resource {
    sagemaker_model_package_group: SagemakerModelPackageGroupClass;
}

export interface SagemakerModelPackageGroupClass {
    /** (Required) The name of the model group. */
    model_package_group_name:         any;
    /** (Optional) A description for the model group. */
    model_package_group_description?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
}