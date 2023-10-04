export interface Ec2InstanceState {
    resource: Resource[];
}

export interface Resource {
    ec2_instance_state: Ec2InstanceStateClass;
}

export interface Ec2InstanceStateClass {
    /** (Required) ID of the instance. */
    instance_id: any;
    /** (Required) - State of the instance. Valid values are `stopped`, `running`. */
    state:       any;
    /** (Optional) Whether to request a forced stop when `state` is `stopped`. Otherwise (_i.e._, `state` is `running`), ignored. When an instance is forced to stop, it does not flush file system caches or file system metadata, and you must subsequently perform file system check and repair. Not recommended for Windows instances. Defaults to `false`. */
    force?:      any;
}