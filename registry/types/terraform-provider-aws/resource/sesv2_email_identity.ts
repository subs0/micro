export interface Sesv2EmailIdentity {
    resource: Resource[];
}

export interface Resource {
    sesv2_email_identity: Sesv2EmailIdentityClass;
}

export interface Sesv2EmailIdentityClass {
    /** (Required) The email address or domain to verify. */
    email_identity:           any;
    /** (Optional) The configuration set to use by default when sending from this identity. Note that any configuration set defined in the email sending request takes precedence. */
    configuration_set_name?:  any;
    dkim_signing_attributes?: DKIMSigningAttributes;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                    any;
}

export interface DKIMSigningAttributes {
    /** (Optional, Sensitive) [Bring Your Own DKIM] A private key that's used to generate a DKIM signature. The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding. */
    domain_signing_private_key: any;
    /** (Optional) [Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain. */
    domain_signing_selector:    any;
    /** (Optional) [Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day. Valid values: `RSA_1024_BIT`, `RSA_2048_BIT`. */
    next_signing_key_length:    any;
}