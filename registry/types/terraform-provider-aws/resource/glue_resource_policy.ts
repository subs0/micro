export interface GlueResourcePolicy {
    resource: Resource[];
}

export interface Resource {
    glue_resource_policy: GlueResourcePolicyClass;
}

export interface GlueResourcePolicyClass {
    /** (Optional) Indicates that you are using both methods to grant cross-account. Valid values are `TRUE` and `FALSE`. Note the terraform will not perform drift detetction on this field as its not return on read. */
    enable_hybrid?: any;
}