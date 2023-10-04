export interface EvidentlySegment {
    resource: Resource[];
}

export interface Resource {
    evidently_segment: EvidentlySegmentClass;
}

export interface EvidentlySegmentClass {
    /** (Optional, Forces new resource) Specifies the description of the segment. */
    description?: any;
    /** (Required, Forces new resource) A name for the segment. */
    name?:        any;
    /** (Required, Forces new resource) The pattern to use for the segment. For more information about pattern syntax, see [Segment rule pattern syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax.html). */
    pattern?:     any;
    /** (Optional) Tags to apply to the segment. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}