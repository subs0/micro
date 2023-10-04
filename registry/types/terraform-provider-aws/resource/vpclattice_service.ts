export interface VpclatticeService {
    resource: Resource[];
}

export interface Resource {
    vpclattice_service: VpclatticeServiceClass;
}

export interface VpclatticeServiceClass {
    /** (Required) Name of the service. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.Must be between 3 and 40 characters in length. */
    name:                any;
    /** (Optional) Type of IAM policy. Either `NONE` or `AWS_IAM`. */
    auth_type?:          any;
    /** (Optional) Amazon Resource Name (ARN) of the certificate. */
    certificate_arn?:    any;
    /** (Optional) Custom domain name of the service. */
    custom_domain_name?: any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
}