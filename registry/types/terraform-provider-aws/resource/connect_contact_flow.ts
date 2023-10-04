export interface ConnectContactFlow {
    resource: Resource[];
}

export interface Resource {
    connect_contact_flow: ConnectContactFlowClass;
}

export interface ConnectContactFlowClass {
    /** (Optional) Specifies the content of the Contact Flow, provided as a JSON string, written in Amazon Connect Contact Flow Language. If defined, the `filename` argument cannot be used. */
    content?:      any;
    /** (Optional) Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the Contact Flow source specified with `filename`. The usual way to set this is filebase64sha256("mycontact_flow.json") (Terraform 0.11.12 and later) or base64sha256(file("mycontact_flow.json")) (Terraform 0.11.11 and earlier), where "mycontact_flow.json" is the local filename of the Contact Flow source. */
    content_hash?: any;
    /** (Optional) Specifies the description of the Contact Flow. */
    description?:  any;
    /** (Optional) The path to the Contact Flow source within the local filesystem. Conflicts with `content`. */
    filename?:     any;
    /** (Required) Specifies the identifier of the hosting Amazon Connect Instance. */
    instance_id:   any;
    /** (Required) Specifies the name of the Contact Flow. */
    name:          any;
    /** (Optional) Tags to apply to the Contact Flow. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
    /** (Optional, Forces new resource) Specifies the type of the Contact Flow. Defaults to `CONTACT_FLOW`. Allowed Values are: `CONTACT_FLOW`, `CUSTOMER_QUEUE`, `CUSTOMER_HOLD`, `CUSTOMER_WHISPER`, `AGENT_HOLD`, `AGENT_WHISPER`, `OUTBOUND_WHISPER`, `AGENT_TRANSFER`, `QUEUE_TRANSFER`. */
    type?:         any;
}