export interface RolesanywhereTrustAnchor {
    resource: Resource[];
}

export interface Resource {
    rolesanywhere_trust_anchor: RolesanywhereTrustAnchorClass;
}

export interface RolesanywhereTrustAnchorClass {
    /** (Optional) Whether or not the Trust Anchor should be enabled. */
    enabled?:               any;
    /** (Required) The name of the Trust Anchor. */
    name:                   any;
    /** (Required) The source of trust, documented below */
    source:                 any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
    /** (Required) The data denoting the source of trust, documented below */
    source_data:            any;
    /** (Required) The type of the source of trust. Must be either `AWS_ACM_PCA` or `CERTIFICATE_BUNDLE`. */
    source_type:            any;
    /** (Optional, required when `source_type` is `AWS_ACM_PCA`) The ARN of an ACM Private Certificate Authority. */
    acm_pca_arn?:           any;
    /** (Optional, required when `source_type` is `CERTIFICATE_BUNDLE`) */
    x509_certificate_data?: any;
}