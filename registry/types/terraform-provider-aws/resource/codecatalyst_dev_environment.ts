export interface CodecatalystDevEnvironment {
    resource: Resource[];
}

export interface Resource {
    codecatalyst_dev_environment: CodecatalystDevEnvironmentClass;
}

export interface CodecatalystDevEnvironmentClass {
    /** (Required) The name of the space. */
    space_name:                  any;
    /** (Required) The name of the project in the space. */
    project_name:                any;
    /** (Required) Information about the amount of storage allocated to the Dev Environment. */
    persistent_storage:          any;
    /** (Required) Information about the integrated development environment (IDE) configured for a Dev Environment. */
    ides:                        any;
    /** (Required) The Amazon EC2 instace type to use for the Dev Environment. Valid values include dev.standard1.small,dev.standard1.medium,dev.standard1.large,dev.standard1.xlarge */
    instance_type:               any;
    /** (Optional) The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running. */
    inactivity_timeout_minutes?: any;
    /** (Optional) The source repository that contains the branch to clone into the Dev Environment. */
    repositories?:               any;
    /** (Required) The name of the IDE. Valid values include Cloud9, IntelliJ, PyCharm, GoLand, and VSCode. */
    name:                        any;
    /** (Required) A link to the IDE runtime image. This parameter is not required if the name is VSCode. Values of the runtime can be for example public.ecr.aws/jetbrains/py,public.ecr.aws/jetbrains/go */
    runtime:                     any;
    /** (Required) The name of the source repository. */
    repository_name:             any;
    /** (Optional) The name of the branch in a source repository. */
    branch_name?:                any;
    /** (Required) The size of the persistent storage in gigabytes (specifically GiB). Valid values for storage are based on memory sizes in 16GB increments. Valid values are 16, 32, and 64. */
    size:                        any;
}