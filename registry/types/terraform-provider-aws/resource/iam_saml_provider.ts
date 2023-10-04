export interface IamSamlProvider {
    resource: Resource[];
}

export interface Resource {
    iam_saml_provider: IamSamlProviderClass;
}

export interface IamSamlProviderClass {
    /** (Required) The name of the provider to create. */
    name:                   any;
    /** (Required) An XML document generated by an identity provider that supports SAML 2.0. */
    saml_metadata_document: any;
    /** (Optional) Map of resource tags for the IAM SAML provider. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
}