export interface ConnectQuickConnect {
    resource: Resource[];
}

export interface Resource {
    connect_quick_connect: ConnectQuickConnectClass;
}

export interface ConnectQuickConnectClass {
    /** (Optional) Specifies the description of the Quick Connect. */
    description?:         any;
    /** (Required) Specifies the identifier of the hosting Amazon Connect Instance. */
    instance_id:          any;
    /** (Required) Specifies the name of the Quick Connect. */
    name:                 any;
    /** (Required) A block that defines the configuration information for the Quick Connect: `quick_connect_type` and one of `phone_config`, `queue_config`, `user_config` . The Quick Connect Config block is documented below. */
    quick_connect_config: any;
    /** (Optional) Tags to apply to the Quick Connect. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
    /** (Required) Specifies the configuration type of the quick connect. valid values are `PHONE_NUMBER`, `QUEUE`, `USER`. */
    quick_connect_type:   any;
    /** (Optional) Specifies the phone configuration of the Quick Connect. This is required only if `quick_connect_type` is `PHONE_NUMBER`. The `phone_config` block is documented below. */
    phone_config?:        any;
    /** (Optional) Specifies the queue configuration of the Quick Connect. This is required only if `quick_connect_type` is `QUEUE`. The `queue_config` block is documented below. */
    queue_config?:        any;
    /** (Optional) Specifies the user configuration of the Quick Connect. This is required only if `quick_connect_type` is `USER`. The `user_config` block is documented below. */
    user_config?:         any;
    /** (Required) Specifies the phone number in in E.164 format. */
    phone_number:         any;
    /** (Required) Specifies the identifier of the contact flow. */
    contact_flow_id:      any;
    /** (Required) Specifies the identifier for the queue. */
    queue_id:             any;
    /** (Required) Specifies the identifier for the user. */
    user_id:              any;
}