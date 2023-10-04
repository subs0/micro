export interface VerifiedaccessTrustProvider {
    resource: Resource[];
}

export interface Resource {
    verifiedaccess_trust_provider: VerifiedaccessTrustProviderClass;
}

export interface VerifiedaccessTrustProviderClass {
    /** (Required) The identifier to be used when working with policy rules. */
    policy_reference_name:     any;
    /** (Required) The type of trust provider can be either user or device-based. */
    trust_provider_type:       any;
    /** (Optional) A description for the AWS Verified Access trust provider. */
    description?:              any;
    /** (Optional) A block of options for device identity based trust providers. */
    device_options?:           any;
    /** (Optional) The OpenID Connect details for an oidc-type, user-identity based trust provider. */
    oidc_options?:             any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
    /** (Optional) The type of user-based trust provider. */
    user_trust_provider_type?: any;
}