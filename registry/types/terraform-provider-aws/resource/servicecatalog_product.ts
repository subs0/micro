export interface ServicecatalogProduct {
    resource: Resource[];
}

export interface Resource {
    servicecatalog_product: ServicecatalogProductClass;
}

export interface ServicecatalogProductClass {
    /** (Required) Name of the product. */
    name:                              any;
    /** (Required) Owner of the product. */
    owner:                             any;
    provisioning_artifact_parameters?: ProvisioningArtifactParameters;
    /** (Required) Type of product. See [AWS Docs](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProduct.html#API_CreateProduct_RequestSyntax) for valid list of values. */
    type:                              any;
    /** (Optional) Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`. */
    accept_language?:                  any;
    /** (Optional) Distributor (i.e., vendor) of the product. */
    distributor?:                      any;
    /** (Optional) Support information about the product. */
    support_description?:              any;
    /** (Optional) Contact email for product support. */
    support_email?:                    any;
    /** (Optional) Contact URL for product support. */
    support_url?:                      any;
    /** (Optional) Tags to apply to the product. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                             any;
}

export interface ProvisioningArtifactParameters {
    /** (Optional) Description of the provisioning artifact (i.e., version), including how it differs from the previous provisioning artifact. */
    description:                 any;
    /** (Optional) Whether AWS Service Catalog stops validating the specified provisioning artifact template even if it is invalid. */
    disable_template_validation: any;
    /** (Required) Name of the product. */
    name:                        any;
    /** (Required if `template_url` is not provided) Template source as the physical ID of the resource that contains the template. Currently only supports CloudFormation stack ARN. Specify the physical ID as `arn:[partition]:cloudformation:[region]:[account ID]:stack/[stack name]/[resource ID]`. */
    template_physical_id:        any;
    /** (Required if `template_physical_id` is not provided) Template source as URL of the CloudFormation template in Amazon S3. */
    template_url:                any;
    /** (Required) Type of product. See [AWS Docs](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProduct.html#API_CreateProduct_RequestSyntax) for valid list of values. */
    type:                        any;
}