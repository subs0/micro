export interface ImagebuilderComponent {
    resource: Resource[];
}

export interface Resource {
    imagebuilder_component: ImagebuilderComponentClass;
}

export interface ImagebuilderComponentClass {
    /** (Required) Name of the component. */
    name:                   any;
    /** (Required) Platform of the component. */
    platform:               any;
    /** (Required) Version of the component. */
    version:                any;
    /** (Optional) Change description of the component. */
    change_description?:    any;
    /** (Optional) Inline YAML string with data of the component. Exactly one of `data` and `uri` can be specified. Terraform will only perform drift detection of its value when present in a configuration. */
    data?:                  any;
    /** (Optional) Description of the component. */
    description?:           any;
    /** (Optional) Amazon Resource Name (ARN) of the Key Management Service (KMS) Key used to encrypt the component. */
    kms_key_id?:            any;
    /** (Optional) Whether to retain the old version when the resource is destroyed or replacement is necessary. Defaults to `false`. */
    skip_destroy?:          any;
    /** (Optional) Set of Operating Systems (OS) supported by the component. */
    supported_os_versions?: any;
    /** (Optional) Key-value map of resource tags for the component. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
    /** (Optional) S3 URI with data of the component. Exactly one of `data` and `uri` can be specified. */
    uri?:                   any;
}