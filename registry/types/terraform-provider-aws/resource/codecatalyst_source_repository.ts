export interface CodecatalystSourceRepository {
    resource: Resource[];
}

export interface Resource {
    codecatalyst_source_repository: CodecatalystSourceRepositoryClass;
}

export interface CodecatalystSourceRepositoryClass {
    /** (Required) The name of the source repository. For more information about name requirements, see [Quotas for source repositories](https://docs.aws.amazon.com/codecatalyst/latest/userguide/source-quotas.html). */
    name:         any;
    /** (Required) The name of the CodeCatalyst space. */
    space_name:   any;
    /** (Required) The name of the project in the CodeCatalyst space. */
    project_name: any;
    /** (Optional) The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose. */
    description?: any;
}