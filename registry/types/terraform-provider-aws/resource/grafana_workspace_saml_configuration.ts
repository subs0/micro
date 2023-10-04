export interface GrafanaWorkspaceSamlConfiguration {
    resource: Resource[];
}

export interface Resource {
    grafana_workspace_saml_configuration: GrafanaWorkspaceSamlConfigurationClass;
}

export interface GrafanaWorkspaceSamlConfigurationClass {
    /** (Required) The editor role values. */
    editor_role_values:       any;
    /** (Required) The workspace id. */
    workspace_id:             any;
    /** (Optional) The admin role values. */
    admin_role_values?:       any;
    /** (Optional) The allowed organizations. */
    allowed_organizations?:   any;
    /** (Optional) The email assertion. */
    email_assertion?:         any;
    /** (Optional) The groups assertion. */
    groups_assertion?:        any;
    /** (Optional) The IDP Metadata URL. Note that either `idp_metadata_url` or `idp_metadata_xml` (but not both) must be specified. */
    idp_metadata_url?:        any;
    /** (Optional) The IDP Metadata XML. Note that either `idp_metadata_url` or `idp_metadata_xml` (but not both) must be specified. */
    idp_metadata_xml?:        any;
    /** (Optional) The login assertion. */
    login_assertion?:         any;
    /** (Optional) The login validity duration. */
    login_validity_duration?: any;
    /** (Optional) The name assertion. */
    name_assertion?:          any;
    /** (Optional) The org assertion. */
    org_assertion?:           any;
    /** (Optional) The role assertion. */
    role_assertion?:          any;
}