export interface Instances {
    data: Datum[];
}

export interface Datum {
    instances: InstancesClass;
}

export interface InstancesClass {
    /** (Optional) Map of tags, each pair of which must */
    instance_tags?:        any;
    /** (Optional) List of instance states that should be applicable to the desired instances. The permitted values are: `pending, running, shutting-down, stopped, stopping, terminated`. The default value is `running`. */
    instance_state_names?: any;
    /** (Optional) One or more name/value pairs to use as filters. There are */
    filter?:               any;
}