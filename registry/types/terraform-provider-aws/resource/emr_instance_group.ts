export interface EmrInstanceGroup {
    resource: Resource[];
}

export interface Resource {
    emr_instance_group: EmrInstanceGroupClass;
}

export interface EmrInstanceGroupClass {
    /** (Optional) If set, the bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances. */
    bid_price?:            any;
    /** (Optional) The autoscaling policy document. This is a JSON formatted string. See [EMR Auto Scaling](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html) */
    autoscaling_policy?:   any;
    /** (Optional) A JSON string for supplying list of configurations specific to the EMR instance group. Note that this can only be changed when using EMR release 5.21 or later. */
    configurations_json?:  any;
    /** (Optional) The number of I/O operations per second (IOPS) that the volume supports. */
    iops?:                 any;
    /** (Optional) The volume size, in gibibytes (GiB). This can be a number from 1 - 1024. If the volume type is EBS-optimized, the minimum value is 10. */
    size?:                 any;
    /** (Optional) The volume type. Valid options are 'gp2', 'io1' and 'standard'. */
    type?:                 any;
    /** (Optional) The number of EBS Volumes to attach per instance. */
    volumes_per_instance?: any;
}