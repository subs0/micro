export interface EmrManagedScalingPolicy {
    resource: Resource[];
}

export interface Resource {
    emr_managed_scaling_policy: EmrManagedScalingPolicyClass;
}

export interface EmrManagedScalingPolicyClass {
    /** (Required) ID of the EMR cluster */
    cluster_id:     any;
    compute_limits: ComputeLimits;
}

export interface ComputeLimits {
    /** (Required) The unit type used for specifying a managed scaling policy. Valid Values: `InstanceFleetUnits` | `Instances` | `VCPU` */
    unit_type:                        any;
    /** (Required) The lower boundary of EC2 units. It is measured through VCPU cores or instances for instance groups and measured through units for instance fleets. Managed scaling activities are not allowed beyond this boundary. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration. */
    minimum_capacity_units:           any;
    /** (Required) The upper boundary of EC2 units. It is measured through VCPU cores or instances for instance groups and measured through units for instance fleets. Managed scaling activities are not allowed beyond this boundary. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration. */
    maximum_capacity_units:           any;
    /** (Optional) The upper boundary of On-Demand EC2 units. It is measured through VCPU cores or instances for instance groups and measured through units for instance fleets. The On-Demand units are not allowed to scale beyond this boundary. The parameter is used to split capacity allocation between On-Demand and Spot instances. */
    maximum_ondemand_capacity_units?: any;
    /** (Optional) The upper boundary of EC2 units for core node type in a cluster. It is measured through VCPU cores or instances for instance groups and measured through units for instance fleets. The core units are not allowed to scale beyond this boundary. The parameter is used to split capacity allocation between core and task nodes. */
    maximum_core_capacity_units?:     any;
}