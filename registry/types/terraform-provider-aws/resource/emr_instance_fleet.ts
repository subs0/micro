export interface EmrInstanceFleet {
    resource: Resource[];
}

export interface Resource {
    emr_instance_fleet: EmrInstanceFleetClass;
}

export interface EmrInstanceFleetClass {
    /** (Required) ID of the EMR Cluster to attach to. Changing this forces a new resource to be created. */
    cluster_id:                 any;
    /** (Optional) Configuration block for instance fleet */
    instance_type_configs?:     any;
    /** (Optional) Configuration block for launch specification */
    launch_specifications?:     any;
    /** (Optional)  The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision. */
    target_on_demand_capacity?: any;
    /** (Optional) The target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision. */
    target_spot_capacity?:      any;
    /** (Optional) Friendly name given to the instance fleet. */
    name?:                      any;
}