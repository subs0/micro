export interface SagemakerNotebookInstanceLifecycleConfiguration {
    resource: Resource[];
}

export interface Resource {
    sagemaker_notebook_instance_lifecycle_configuration: SagemakerNotebookInstanceLifecycleConfigurationClass;
}

export interface SagemakerNotebookInstanceLifecycleConfigurationClass {
    /** (Optional) The name of the lifecycle configuration (must be unique). If omitted, Terraform will assign a random, unique name. */
    name?:      any;
    /** (Optional) A shell script (base64-encoded) that runs only once when the SageMaker Notebook Instance is created. */
    on_create?: any;
    /** (Optional) A shell script (base64-encoded) that runs every time the SageMaker Notebook Instance is started including the time it's created. */
    on_start?:  any;
}