export interface AuditmanagerFramework {
    resource: Resource[];
}

export interface Resource {
    auditmanager_framework: AuditmanagerFrameworkClass;
}

export interface AuditmanagerFrameworkClass {
    control_sets:     ControlSets;
    /** (Optional) Compliance type that the new custom framework supports, such as `CIS` or `HIPAA`. */
    compliance_type?: any;
    /** (Optional) Description of the framework. */
    description?:     any;
    /** (Optional) A map of tags to assign to the framework. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:            any;
    /** (Required) List of controls within the control set. See [`controls`](#controls) below. */
    controls:         Controls;
}

export interface ControlSets {
    /** (Required) Name of the control set. */
    name:     any;
    /** (Required) List of controls within the control set. See [`controls`](#controls) below. */
    controls: any;
}

export interface Controls {
    /** (Required) Unique identifier of the control. */
    id: any;
}