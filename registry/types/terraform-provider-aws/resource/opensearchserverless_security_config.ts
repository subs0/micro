export interface OpensearchserverlessSecurityConfig {
    resource: Resource[];
}

export interface Resource {
    opensearchserverless_security_config: OpensearchserverlessSecurityConfigClass;
}

export interface OpensearchserverlessSecurityConfigClass {
    /** (Required, Forces new resource) Name of the policy. */
    name?:        any;
    saml_options: SamlOptions;
    /** (Required) Type of configuration. Must be `saml`. */
    type:         any;
    /** (Optional) Description of the security configuration. */
    description?: any;
}

export interface SamlOptions {
    /** (Optional) Group attribute for this SAML integration. */
    group_attribute?: any;
    /** (Required) The XML IdP metadata file generated from your identity provider. */
    metadata:         any;
    /** (Optional) Session timeout, in minutes. Minimum is 5 minutes and maximum is 720 minutes (12 hours). Default is 60 minutes. */
    session_timeout?: any;
    /** (Optional) User attribute for this SAML integration. */
    user_attribute?:  any;
}