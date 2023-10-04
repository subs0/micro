export interface AppstreamFleetStackAssociation {
    resource: Resource[];
}

export interface Resource {
    appstream_fleet_stack_association: AppstreamFleetStackAssociationClass;
}

export interface AppstreamFleetStackAssociationClass {
    /** (Required) Name of the fleet. */
    fleet_name: any;
}