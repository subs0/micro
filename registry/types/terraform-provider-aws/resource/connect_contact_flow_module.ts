export interface ConnectContactFlowModule {
    resource: Resource[];
}

export interface Resource {
    connect_contact_flow_module: ConnectContactFlowModuleClass;
}

export interface ConnectContactFlowModuleClass {
    /** (Optional) Specifies the content of the Contact Flow Module, provided as a JSON string, written in Amazon Connect Contact Flow Language. If defined, the `filename` argument cannot be used. */
    content?:      any;
    /** (Optional) Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the Contact Flow Module source specified with `filename`. The usual way to set this is filebase64sha256("contact_flow_module.json") (Terraform 0.11.12 and later) or base64sha256(file("contact_flow_module.json")) (Terraform 0.11.11 and earlier), where "contact_flow_module.json" is the local filename of the Contact Flow Module source. */
    content_hash?: any;
    /** (Optional) Specifies the description of the Contact Flow Module. */
    description?:  any;
    /** (Optional) The path to the Contact Flow Module source within the local filesystem. Conflicts with `content`. */
    filename?:     any;
    /** (Required) Specifies the identifier of the hosting Amazon Connect Instance. */
    instance_id:   any;
    /** (Required) Specifies the name of the Contact Flow Module. */
    name:          any;
    /** (Optional) Tags to apply to the Contact Flow Module. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
}