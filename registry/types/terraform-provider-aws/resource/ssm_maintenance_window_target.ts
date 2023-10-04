export interface SsmMaintenanceWindowTarget {
    resource: Resource[];
}

export interface Resource {
    ssm_maintenance_window_target: SsmMaintenanceWindowTargetClass;
}

export interface SsmMaintenanceWindowTargetClass {
    /** (Required) The Id of the maintenance window to register the target with. */
    window_id:          any;
    /** (Optional) The name of the maintenance window target. */
    name?:              any;
    /** (Optional) The description of the maintenance window target. */
    description?:       any;
    /** (Required) The type of target being registered with the Maintenance Window. Possible values are `INSTANCE` and `RESOURCE_GROUP`. */
    resource_type:      any;
    /** (Required) The targets to register with the maintenance window. In other words, the instances to run commands on when the maintenance window runs. You can specify targets using instance IDs, resource group names, or tags that have been applied to instances. For more information about these examples formats see */
    targets:            any;
    /** (Optional) User-provided value that will be included in any CloudWatch events raised while running tasks for these targets in this Maintenance Window. */
    owner_information?: any;
}