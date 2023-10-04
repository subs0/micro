export interface LocationTracker {
    resource: Resource[];
}

export interface Resource {
    location_tracker: LocationTrackerClass;
}

export interface LocationTrackerClass {
    /** (Required) The name of the tracker resource. */
    tracker_name:        any;
    /** (Optional) The optional description for the tracker resource. */
    description?:        any;
    /** (Optional) A key identifier for an AWS KMS customer managed key assigned to the Amazon Location resource. */
    kms_key_id?:         any;
    /** (Optional) The position filtering method of the tracker resource. Valid values: `TimeBased`, `DistanceBased`, `AccuracyBased`. Default: `TimeBased`. */
    position_filtering?: any;
    /** (Optional) Key-value tags for the tracker. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
}