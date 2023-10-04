export interface OamSinkPolicy {
    resource: Resource[];
}

export interface Resource {
    oam_sink_policy: OamSinkPolicyClass;
}

export interface OamSinkPolicyClass {
    /** (Required) ARN of the sink to attach this policy to. */
    sink_identifier: any;
    /** (Required) JSON policy to use. If you are updating an existing policy, the entire existing policy is replaced by what you specify here. */
    policy:          any;
}