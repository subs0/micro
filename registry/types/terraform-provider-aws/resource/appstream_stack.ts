export interface AppstreamStack {
    resource: Resource[];
}

export interface Resource {
    appstream_stack: AppstreamStackClass;
}

export interface AppstreamStackClass {
    /** (Required) Unique name for the AppStream stack. */
    name:                           any;
    /** (Optional) Set of configuration blocks defining the interface VPC endpoints. Users of the stack can connect to AppStream 2.0 only through the specified endpoints. */
    access_endpoints?:              any;
    /** (Optional) Settings for application settings persistence. */
    application_settings?:          any;
    /** (Optional) Description for the AppStream stack. */
    description?:                   any;
    /** (Optional) Stack name to display. */
    display_name?:                  any;
    /** (Optional) Domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions. */
    embed_host_domains?:            any;
    /** (Optional) URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed. . */
    feedback_url?:                  any;
    /** (Optional) URL that users are redirected to after their streaming session ends. */
    redirect_url?:                  any;
    /** (Optional) Configuration block for the storage connectors to enable. */
    storage_connectors?:            any;
    /** (Optional) Configuration block for the actions that are enabled or disabled for users during their streaming sessions. If not provided, these settings are configured automatically by AWS. If provided, the terraform configuration should include a block for each configurable action. */
    user_settings?:                 any;
    /** (Optional) The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client. */
    streaming_experience_settings?: any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
    /** (Required) Type of the interface endpoint. */
    endpoint_type:                  any;
    /** (Optional) ID of the VPC in which the interface endpoint is used. */
    vpce_id?:                       any;
    /** (Required) Whether application settings should be persisted. */
    enabled:                        any;
    /** (Optional) Name of the settings group. */
    settings_group?:                any;
    /** (Required) Type of storage connector. */
    connector_type:                 any;
    /** (Optional) Names of the domains for the account. */
    domains?:                       any;
    /** (Optional) ARN of the storage connector. */
    resource_identifier?:           any;
    /** (Required) Action that is enabled or disabled. */
    action:                         any;
    /** (Required) Whether the action is enabled or disabled. */
    permission:                     any;
    /** (Optional) The preferred protocol that you want to use while streaming your application. */
    preferred_protocol?:            any;
}