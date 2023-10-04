export interface SagemakerHumanTaskUI {
    resource: Resource[];
}

export interface Resource {
    sagemaker_human_task_ui: SagemakerHumanTaskUIClass;
}

export interface SagemakerHumanTaskUIClass {
    /** (Required) The name of the Human Task UI. */
    human_task_ui_name: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
    /** (Required) The Liquid template for the worker user interface. See [UI Template](#ui-template) below. */
    ui_template:        any;
    /** (Required) The content of the Liquid template for the worker user interface. */
    content:            any;
}