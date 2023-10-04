export interface SagemakerCodeRepository {
    resource: Resource[];
}

export interface Resource {
    sagemaker_code_repository: SagemakerCodeRepositoryClass;
}

export interface SagemakerCodeRepositoryClass {
    /** (Required) The name of the Code Repository (must be unique). */
    code_repository_name: any;
    /** (Required) Specifies details about the repository. see [Git Config](#git-config) details below. */
    git_config:           any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
    /** (Required) The URL where the Git repository is located. */
    repository_url:       any;
    /** (Optional) The default branch for the Git repository. */
    branch?:              any;
    /** (Optional) The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to access the git repository. The secret must have a staging label of AWSCURRENT and must be in the following format: `{"username": UserName, "password": Password}` */
    secret_arn?:          any;
}