export interface EcrRepository {
    resource: Resource[];
}

export interface Resource {
    ecr_repository: EcrRepositoryClass;
}

export interface EcrRepositoryClass {
    /** (Required) Name of the repository. */
    name:                          any;
    encryption_configuration?:     EncryptionConfiguration;
    /** (Optional) If `true`, will delete the repository even if it contains images. */
    force_delete?:                 any;
    /** (Optional) The tag mutability setting for the repository. Must be one of: `MUTABLE` or `IMMUTABLE`. Defaults to `MUTABLE`. */
    image_tag_mutability?:         any;
    /** (Optional) Configuration block that defines image scanning configuration for the repository. By default, image scanning must be manually triggered. See the [ECR User Guide](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html) for more information about image scanning. */
    image_scanning_configuration?: any;
    /** (Required) Indicates whether images are scanned after being pushed to the repository (true) or not scanned (false). */
    scan_on_push:                  any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                         any;
}

export interface EncryptionConfiguration {
    /** (Optional) The encryption type to use for the repository. Valid values are `AES256` or `KMS`. Defaults to `AES256`. */
    encryption_type: any;
    /** (Optional) The ARN of the KMS key to use when `encryption_type` is `KMS`. If not specified, uses the default AWS managed key for ECR. */
    kms_key:         any;
}