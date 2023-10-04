export interface AmplifyBackendEnvironment {
    resource: Resource[];
}

export interface Resource {
    amplify_backend_environment: AmplifyBackendEnvironmentClass;
}

export interface AmplifyBackendEnvironmentClass {
    /** (Required) Unique ID for an Amplify app. */
    app_id:                any;
    /** (Required) Name for the backend environment. */
    environment_name:      any;
    /** (Optional) Name of deployment artifacts. */
    deployment_artifacts?: any;
    /** (Optional) AWS CloudFormation stack name of a backend environment. */
    stack_name?:           any;
}