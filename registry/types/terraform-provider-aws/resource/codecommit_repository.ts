export interface CodecommitRepository {
    resource: Resource[];
}

export interface Resource {
    codecommit_repository: CodecommitRepositoryClass;
}

export interface CodecommitRepositoryClass {
    /** (Required) The name for the repository. This needs to be less than 100 characters. */
    repository_name: any;
    /** (Optional) The description of the repository. This needs to be less than 1000 characters */
    description?:    any;
    /** (Optional) The default branch of the repository. The branch specified here needs to exist. */
    default_branch?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
}