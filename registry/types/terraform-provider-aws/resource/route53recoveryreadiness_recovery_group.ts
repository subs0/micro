export interface Route53RecoveryreadinessRecoveryGroup {
    resource: Resource[];
}

export interface Resource {
    route53recoveryreadiness_recovery_group: Route53RecoveryreadinessRecoveryGroupClass;
}

export interface Route53RecoveryreadinessRecoveryGroupClass {
    /** (Required) A unique name describing the recovery group. */
    recovery_group_name: any;
    /** (Optional) List of cell arns to add as nested fault domains within this recovery group */
    cells?:              any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
}