export interface AutoscalingGroupTag {
    resource: Resource[];
}

export interface Resource {
    autoscaling_group_tag: AutoscalingGroupTagClass;
}

export interface AutoscalingGroupTagClass {
    /** (Required) Name of the Autoscaling Group to apply the tag to. */
    autoscaling_group_name: any;
    /** (Required) Tag to create. The `tag` block is documented below. */
    tag:                    any;
    /** (Required) Tag name. */
    key:                    any;
    /** (Required) Tag value. */
    value:                  any;
    /** (Required) Whether to propagate the tags to instances launched by the ASG. */
    propagate_at_launch:    any;
}