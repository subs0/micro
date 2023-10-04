export interface Route53RecoveryreadinessCell {
    resource: Resource[];
}

export interface Resource {
    route53recoveryreadiness_cell: Route53RecoveryreadinessCellClass;
}

export interface Route53RecoveryreadinessCellClass {
    /** (Required) Unique name describing the cell. */
    cell_name: any;
    /** (Optional) List of cell arns to add as nested fault domains within this cell. */
    cells?:    any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:     any;
}