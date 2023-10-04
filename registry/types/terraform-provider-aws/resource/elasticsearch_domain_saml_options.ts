export interface ElasticsearchDomainSamlOptions {
    resource: Resource[];
}

export interface Resource {
    elasticsearch_domain_saml_options: ElasticsearchDomainSamlOptionsClass;
}

export interface ElasticsearchDomainSamlOptionsClass {
    /** (Required) Name of the domain. */
    domain_name:   any;
    saml_options?: SamlOptions;
}

export interface SamlOptions {
    /** (Required) Whether SAML authentication is enabled. */
    enabled:                 any;
    /** (Optional) Information from your identity provider. */
    idp:                     any;
    /** (Optional) This backend role from the SAML IdP receives full permissions to the cluster, equivalent to a new master user. */
    master_backend_role:     any;
    /** (Optional) This username from the SAML IdP receives full permissions to the cluster, equivalent to a new master user. */
    master_user_name:        any;
    /** (Optional) Element of the SAML assertion to use for backend roles. Default is roles. */
    roles_key:               any;
    /** (Optional) Duration of a session in minutes after a user logs in. Default is 60. Maximum value is 1,440. */
    session_timeout_minutes: any;
    /** (Optional) Custom SAML attribute to use for user names. Default is an empty string - `""`. This will cause Elasticsearch to use the `NameID` element of the `Subject`, which is the default location for name identifiers in the SAML specification. */
    subject_key:             any;
    /** (Required) The unique Entity ID of the application in SAML Identity Provider. */
    entity_id:               any;
    /** (Required) The Metadata of the SAML application in xml format. */
    metadata_content:        any;
}