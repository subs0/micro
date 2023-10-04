export interface EcrpublicRepository {
    resource: Resource[];
}

export interface Resource {
    ecrpublic_repository: EcrpublicRepositoryClass;
}

export interface EcrpublicRepositoryClass {
    /** (Required) Name of the repository. */
    repository_name: any;
    catalog_data?:   CatalogData;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
}

export interface CatalogData {
    /** (Optional) A detailed description of the contents of the repository. It is publicly visible in the Amazon ECR Public Gallery. The text must be in markdown format. */
    about_text:        any;
    /** (Optional) The system architecture that the images in the repository are compatible with. On the Amazon ECR Public Gallery, the following supported architectures will appear as badges on the repository and are used as search filters: `ARM`, `ARM 64`, `x86`, `x86-64` */
    architectures:     any;
    /** (Optional) A short description of the contents of the repository. This text appears in both the image details and also when searching for repositories on the Amazon ECR Public Gallery. */
    description:       any;
    /** (Optional) The base64-encoded repository logo payload. (Only visible for verified accounts) Note that drift detection is disabled for this attribute. */
    logo_image_blob:   any;
    /**  (Optional) The operating systems that the images in the repository are compatible with. On the Amazon ECR Public Gallery, the following supported operating systems will appear as badges on the repository and are used as search filters: `Linux`, `Windows` */
    operating_systems: any;
    /**  (Optional) Detailed information on how to use the contents of the repository. It is publicly visible in the Amazon ECR Public Gallery. The usage text provides context, support information, and additional usage details for users of the repository. The text must be in markdown format. */
    usage_text:        any;
}