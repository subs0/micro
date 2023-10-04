export interface ServicecatalogProvisioningArtifact {
    resource: Resource[];
}

export interface Resource {
    servicecatalog_provisioning_artifact: ServicecatalogProvisioningArtifactClass;
}

export interface ServicecatalogProvisioningArtifactClass {
    /** (Required) Identifier of the product. */
    product_id:                   any;
    /** (Required if `template_url` is not provided) Template source as the physical ID of the resource that contains the template. Currently only supports CloudFormation stack ARN. Specify the physical ID as `arn:[partition]:cloudformation:[region]:[account ID]:stack/[stack name]/[resource ID]`. */
    template_physical_id?:        any;
    /** (Required if `template_physical_id` is not provided) Template source as URL of the CloudFormation template in Amazon S3. */
    template_url?:                any;
    /** (Optional) Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). The default value is `en`. */
    accept_language?:             any;
    /** (Optional) Whether the product version is active. Inactive provisioning artifacts are invisible to end users. End users cannot launch or update a provisioned product from an inactive provisioning artifact. Default is `true`. */
    active?:                      any;
    /** (Optional) Description of the provisioning artifact (i.e., version), including how it differs from the previous provisioning artifact. */
    description?:                 any;
    /** (Optional) Whether AWS Service Catalog stops validating the specified provisioning artifact template even if it is invalid. */
    disable_template_validation?: any;
    /** (Optional) Information set by the administrator to provide guidance to end users about which provisioning artifacts to use. Valid values are `DEFAULT` and `DEPRECATED`. The default is `DEFAULT`. Users are able to make updates to a provisioned product of a deprecated version but cannot launch new provisioned products using a deprecated version. */
    guidance?:                    any;
    /** (Optional) Name of the provisioning artifact (for example, `v1`, `v2beta`). No spaces are allowed. */
    name?:                        any;
    /** (Optional) Type of provisioning artifact. See [AWS Docs](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ProvisioningArtifactProperties.html) for valid list of values. */
    type?:                        any;
}