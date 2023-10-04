export interface AmplifyBranch {
    resource: Resource[];
}

export interface Resource {
    amplify_branch: AmplifyBranchClass;
}

export interface AmplifyBranchClass {
    /** (Required) Unique ID for an Amplify app. */
    app_id:                         any;
    /** (Required) Name for the branch. */
    branch_name:                    any;
    /** (Optional) ARN for a backend environment that is part of an Amplify app. */
    backend_environment_arn?:       any;
    /** (Optional) Basic authorization credentials for the branch. */
    basic_auth_credentials?:        any;
    /** (Optional) Description for the branch. */
    description?:                   any;
    /** (Optional) Display name for a branch. This is used as the default domain prefix. */
    display_name?:                  any;
    /** (Optional) Enables auto building for the branch. */
    enable_auto_build?:             any;
    /** (Optional) Enables basic authorization for the branch. */
    enable_basic_auth?:             any;
    /** (Optional) Enables notifications for the branch. */
    enable_notification?:           any;
    /** (Optional) Enables performance mode for the branch. */
    enable_performance_mode?:       any;
    /** (Optional) Enables pull request previews for this branch. */
    enable_pull_request_preview?:   any;
    /** (Optional) Environment variables for the branch. */
    environment_variables?:         any;
    /** (Optional) Framework for the branch. */
    framework?:                     any;
    /** (Optional) Amplify environment name for the pull request. */
    pull_request_environment_name?: any;
    /** (Optional) Describes the current stage for the branch. Valid values: `PRODUCTION`, `BETA`, `DEVELOPMENT`, `EXPERIMENTAL`, `PULL_REQUEST`. */
    stage?:                         any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
    /** (Optional) Content Time To Live (TTL) for the website in seconds. */
    ttl?:                           any;
}