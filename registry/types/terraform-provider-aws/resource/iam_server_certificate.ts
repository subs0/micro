export interface IamServerCertificate {
    resource: Resource[];
}

export interface Resource {
    iam_server_certificate: IamServerCertificateClass;
}

export interface IamServerCertificateClass {
    /** (Optional) The name of the Server Certificate. Do not include the */
    name?:        any;
    /** (Optional) Creates a unique name beginning with the specified */
    name_prefix?: any;
    /** (Optional) The IAM path for the server certificate.  If it is not */
    path?:        any;
    /** (Optional) Map of resource tags for the server certificate. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}