export interface EksIdentityProviderConfig {
    resource: Resource[];
}

export interface Resource {
    eks_identity_provider_config: EksIdentityProviderConfigClass;
}

export interface EksIdentityProviderConfigClass {
    /** (Required) Nested attribute containing [OpenID Connect](https://openid.net/connect/) identity provider information for the cluster. Detailed below. */
    oidc:             any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:            any;
    /** (Optional) The JWT claim that the provider will use to return groups. */
    groups_claim?:    any;
    /** (Optional) A prefix that is prepended to group claims e.g., `oidc:`. */
    groups_prefix?:   any;
    /** (Required) Issuer URL for the OpenID Connect identity provider. */
    issuer_url:       any;
    /** (Optional) The key value pairs that describe required claims in the identity token. */
    required_claims?: any;
    /** (Optional) The JWT claim that the provider will use as the username. */
    username_claim?:  any;
    /** (Optional) A prefix that is prepended to username claims. */
    username_prefix?: any;
}