export interface CodecatalystProject {
    resource: Resource[];
}

export interface Resource {
    codecatalyst_project: CodecatalystProjectClass;
}

export interface CodecatalystProjectClass {
    /** (Required) The name of the space. */
    space_name:   any;
    /** (Required) The friendly name of the project that will be displayed to users. */
    display_name: any;
    /** (Optional) The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose. */
    description?: any;
}