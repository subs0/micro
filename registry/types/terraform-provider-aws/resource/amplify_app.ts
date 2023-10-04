export interface AmplifyApp {
    resource: Resource[];
}

export interface Resource {
    amplify_app: AmplifyAppClass;
}

export interface AmplifyAppClass {
    /** (Required) Name for an Amplify app. */
    name:                           any;
    /** (Optional) Personal access token for a third-party source control system for an Amplify app. The personal access token is used to create a webhook and a read-only deploy key. The token is not stored. */
    access_token?:                  any;
    /** (Optional) Automated branch creation configuration for an Amplify app. An `auto_branch_creation_config` block is documented below. */
    auto_branch_creation_config?:   any;
    /** (Optional) Automated branch creation glob patterns for an Amplify app. */
    auto_branch_creation_patterns?: any;
    /** (Optional) Basic authorization credentials for the autocreated branch. */
    basic_auth_credentials?:        any;
    /** (Optional) Build specification (build spec) for the autocreated branch. */
    build_spec?:                    any;
    /** (Optional) Custom rewrite and redirect rules for an Amplify app. A `custom_rule` block is documented below. */
    custom_rule?:                   any;
    /** (Optional) Description for an Amplify app. */
    description?:                   any;
    /** (Optional) Enables automated branch creation for an Amplify app. */
    enable_auto_branch_creation?:   any;
    /** (Optional) Enables basic authorization for the autocreated branch. */
    enable_basic_auth?:             any;
    /** (Optional) Enables auto-building of branches for the Amplify App. */
    enable_branch_auto_build?:      any;
    /** (Optional) Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository. */
    enable_branch_auto_deletion?:   any;
    /** (Optional) Environment variables for the autocreated branch. */
    environment_variables?:         any;
    /** (Optional) AWS Identity and Access Management (IAM) service role for an Amplify app. */
    iam_service_role_arn?:          any;
    /** (Optional) OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key. The OAuth token is not stored. */
    oauth_token?:                   any;
    /** (Optional) Platform or framework for an Amplify app. Valid values: `WEB`, `WEB_COMPUTE`. Default value: `WEB`. */
    platform?:                      any;
    /** (Optional) Repository for an Amplify app. */
    repository?:                    any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
    /** (Optional) Enables auto building for the autocreated branch. */
    enable_auto_build?:             any;
    /** (Optional) Enables performance mode for the branch. */
    enable_performance_mode?:       any;
    /** (Optional) Enables pull request previews for the autocreated branch. */
    enable_pull_request_preview?:   any;
    /** (Optional) Framework for the autocreated branch. */
    framework?:                     any;
    /** (Optional) Amplify environment name for the pull request. */
    pull_request_environment_name?: any;
    /** (Optional) Describes the current stage for the autocreated branch. Valid values: `PRODUCTION`, `BETA`, `DEVELOPMENT`, `EXPERIMENTAL`, `PULL_REQUEST`. */
    stage?:                         any;
    /** (Optional) Condition for a URL rewrite or redirect rule, such as a country code. */
    condition?:                     any;
    /** (Required) Source pattern for a URL rewrite or redirect rule. */
    source:                         any;
    /** (Optional) Status code for a URL rewrite or redirect rule. Valid values: `200`, `301`, `302`, `404`, `404-200`. */
    status?:                        any;
    /** (Required) Target pattern for a URL rewrite or redirect rule. */
    target:                         any;
}