export interface EmrBlockPublicAccessConfiguration {
    resource: Resource[];
}

export interface Resource {
    emr_block_public_access_configuration: EmrBlockPublicAccessConfigurationClass;
}

export interface EmrBlockPublicAccessConfigurationClass {
    /** (Required) Enable or disable EMR Block Public Access. */
    block_public_security_group_rules:           any;
    /** (Optional) Configuration block for defining permitted public security group rule port ranges. Can be defined multiple times per resource. Only valid if `block_public_security_group_rules` is set to `true`. */
    permitted_public_security_group_rule_range?: any;
    /** (Required) The first port in the range of TCP ports. */
    min_range:                                   any;
    /** (Required) The final port in the range of TCP ports. */
    max_range:                                   any;
}