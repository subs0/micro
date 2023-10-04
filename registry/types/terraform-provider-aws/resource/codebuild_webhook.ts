export interface CodebuildWebhook {
    resource: Resource[];
}

export interface Resource {
    codebuild_webhook: CodebuildWebhookClass;
}

export interface CodebuildWebhookClass {
    /** (Required) The name of the build project. */
    project_name:             any;
    /** (Optional) The type of build this webhook will trigger. Valid values for this parameter are: `BUILD`, `BUILD_BATCH`. */
    build_type?:              any;
    /** (Optional) A regular expression used to determine which branches get built. Default is all branches are built. We recommend using `filter_group` over `branch_filter`. */
    branch_filter?:           any;
    /** (Optional) Information about the webhook's trigger. Filter group blocks are documented below. */
    filter_group?:            any;
    /** (Required) A webhook filter for the group. Filter blocks are documented below. */
    filter:                   any;
    /** (Required) The webhook filter group's type. Valid values for this parameter are: `EVENT`, `BASE_REF`, `HEAD_REF`, `ACTOR_ACCOUNT_ID`, `FILE_PATH`, `COMMIT_MESSAGE`. At least one filter group must specify `EVENT` as its type. */
    type:                     any;
    /** (Required) For a filter that uses `EVENT` type, a comma-separated string that specifies one event: `PUSH`, `PULL_REQUEST_CREATED`, `PULL_REQUEST_UPDATED`, `PULL_REQUEST_REOPENED`. `PULL_REQUEST_MERGED` works with GitHub & GitHub Enterprise only. For a filter that uses any of the other filter types, a regular expression. */
    pattern:                  any;
    /** (Optional) If set to `true`, the specified filter does *not* trigger a build. Defaults to `false`. */
    exclude_matched_pattern?: any;
}