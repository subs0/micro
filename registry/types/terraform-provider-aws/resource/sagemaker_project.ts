export interface SagemakerProject {
    resource: Resource[];
}

export interface Resource {
    sagemaker_project: SagemakerProjectClass;
}

export interface SagemakerProjectClass {
    /** (Required) The name of the Project. */
    project_name:                         any;
    /** (Optional) A description for the project. */
    project_description?:                 any;
    /** (Required) The product ID and provisioning artifact ID to provision a service catalog. See [Service Catalog Provisioning Details](#service-catalog-provisioning-details) below. */
    service_catalog_provisioning_details: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                any;
    /** (Optional) The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. */
    path_id?:                             any;
    /** (Required) The ID of the product to provision. */
    product_id:                           any;
    /** (Optional) The ID of the provisioning artifact. */
    provisioning_artifact_id?:            any;
    /** (Optional) A list of key value pairs that you specify when you provision a product. See [Provisioning Parameter](#provisioning-parameter) below. */
    provisioning_parameter?:              any;
    /** (Required) The key that identifies a provisioning parameter. */
    key:                                  any;
    /** (Optional) The value of the provisioning parameter. */
    value?:                               any;
}