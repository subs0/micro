export interface CodepipelineWebhook {
    resource: Resource[];
}

export interface Resource {
    codepipeline_webhook: CodepipelineWebhookClass;
}

export interface CodepipelineWebhookClass {
    /** (Required) The name of the webhook. */
    name:                          any;
    /** (Required) The type of authentication  to use. One of `IP`, `GITHUB_HMAC`, or `UNAUTHENTICATED`. */
    authentication:                any;
    /** (Optional) An `auth` block. Required for `IP` and `GITHUB_HMAC`. Auth blocks are documented below. */
    authentication_configuration?: any;
    /** (Required) The name of the action in a pipeline you want to connect to the webhook. The action must be from the source (first) stage of the pipeline. */
    target_action:                 any;
    /** (Required) The name of the pipeline. */
    target_pipeline:               any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                         any;
    /** (Optional) The shared secret for the GitHub repository webhook. Set this as `secret` in your `github_repository_webhook`'s `configuration` block. Required for `GITHUB_HMAC`. */
    secret_token?:                 any;
    /** (Optional) A valid CIDR block for `IP` filtering. Required for `IP`. */
    allowed_ip_range?:             any;
    /** (Required) The [JSON path](https://github.com/json-path/JsonPath) to filter on. */
    json_path:                     any;
    /** (Required) The value to match on (e.g., `refs/heads/{Branch}`). See [AWS docs](https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_WebhookFilterRule.html) for details. */
    match_equals:                  any;
}