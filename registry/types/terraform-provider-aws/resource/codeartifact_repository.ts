export interface CodeartifactRepository {
    resource: Resource[];
}

export interface Resource {
    codeartifact_repository: CodeartifactRepositoryClass;
}

export interface CodeartifactRepositoryClass {
    /** (Required) The domain that contains the created repository. */
    domain:                   any;
    /** (Required) The name of the repository to create. */
    repository:               any;
    /** (Optional) The account number of the AWS account that owns the domain. */
    domain_owner?:            any;
    /** (Optional) The description of the repository. */
    description?:             any;
    /** (Optional) A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when AWS CodeArtifact looks for a requested package version. see [Upstream](#upstream) */
    upstream?:                any;
    /** An array of external connections associated with the repository. Only one external connection can be set per repository. see [External Connections](#external-connections). */
    external_connections?:    any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                    any;
    /** (Required) The name of an upstream repository. */
    repository_name:          any;
    /** (Required) The name of the external connection associated with a repository. */
    external_connection_name: any;
}