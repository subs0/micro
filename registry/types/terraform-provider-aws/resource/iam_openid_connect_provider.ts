export interface IamOpenidConnectProvider {
    resource: Resource[];
}

export interface Resource {
    iam_openid_connect_provider: IamOpenidConnectProviderClass;
}

export interface IamOpenidConnectProviderClass {
    /** (Required) The URL of the identity provider. Corresponds to the _iss_ claim. */
    url:             any;
    /** (Required) A list of client IDs (also known as audiences). When a mobile or web app registers with an OpenID Connect provider, they establish a value that identifies the application. (This is the value that's sent as the client_id parameter on OAuth requests.) */
    client_id_list:  any;
    /** (Required) A list of server certificate thumbprints for the OpenID Connect (OIDC) identity provider's server certificate(s). */
    thumbprint_list: any;
    /** (Optional) Map of resource tags for the IAM OIDC provider. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
}