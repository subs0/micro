export interface SagemakerImage {
    resource: Resource[];
}

export interface Resource {
    sagemaker_image: SagemakerImageClass;
}

export interface SagemakerImageClass {
    /** (Required) The name of the image. Must be unique to your account. */
    image_name:    any;
    /** (Required) The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf. */
    role_arn:      any;
    /** (Optional) The display name of the image. When the image is added to a domain (must be unique to the domain). */
    display_name?: any;
    /** (Optional) The description of the image. */
    description?:  any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
}