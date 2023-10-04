export interface DevicefarmProject {
    resource: Resource[];
}

export interface Resource {
    devicefarm_project: DevicefarmProjectClass;
}

export interface DevicefarmProjectClass {
    /** (Required) The name of the project */
    name:                         any;
    /** (Optional) Sets the execution timeout value (in minutes) for a project. All test runs in this project use the specified execution timeout value unless overridden when scheduling a run. */
    default_job_timeout_minutes?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                        any;
}