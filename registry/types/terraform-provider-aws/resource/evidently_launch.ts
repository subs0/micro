export interface EvidentlyLaunch {
    resource: Resource[];
}

export interface Resource {
    evidently_launch: EvidentlyLaunchClass;
}

export interface EvidentlyLaunchClass {
    /** (Optional) Specifies the description of the launch group. */
    description?:             any;
    /** (Required) One or up to five blocks that contain the feature and variations that are to be used for the launch. [Detailed below](#groups). */
    groups:                   any;
    /** (Optional) One or up to three blocks that define the metrics that will be used to monitor the launch performance. [Detailed below](#metric_monitors). */
    metric_monitors?:         any;
    /** (Required) Specifies the name for the metric. */
    name:                     any;
    /** (Required) The name or ARN of the project that is to contain the new launch. */
    project:                  any;
    /** (Optional) When Evidently assigns a particular user session to a launch, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and randomizationSalt. If you omit randomizationSalt, Evidently uses the launch name as the randomizationSalt. */
    randomization_salt?:      any;
    /** (Optional) A block that defines the traffic allocation percentages among the feature variations during each step of the launch. [Detailed below](#scheduled_splits_config). */
    scheduled_splits_config?: any;
    /** (Optional) Tags to apply to the launch. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                    any;
    /** (Required) Specifies the name of the feature that the launch is using. */
    feature:                  any;
    /** (Required) Specifies the feature variation to use for this launch group. */
    variation:                any;
    /** (Required) A block that defines the metric. [Detailed below](#metric_definition). */
    metric_definition:        any;
    /** (Required) Specifies the entity, such as a user or session, that does an action that causes a metric value to be recorded. An example is `userDetails.userID`. */
    entity_id_key:            any;
    /** (Required) Specifies The EventBridge event pattern that defines how the metric is recorded. */
    event_pattern:            any;
    /** (Optional) Specifies a label for the units that the metric is measuring. */
    unit_label?:              any;
    /** (Required) Specifies the value that is tracked to produce the metric. */
    value_key:                any;
    /** (Required) One or up to six blocks that define the traffic allocation percentages among the feature variations during each step of the launch. This also defines the start time of each step. [Detailed below](#steps). */
    steps:                    any;
    /** (Required) The traffic allocation percentages among the feature variations during one step of a launch. This is a set of key-value pairs. The keys are variation names. The values represent the percentage of traffic to allocate to that variation during this step. For more information, refer to the [AWS documentation for ScheduledSplitConfig groupWeights](https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ScheduledSplitConfig.html). */
    group_weights:            any;
    /** (Required) One or up to six blocks that specify different traffic splits for one or more audience segments. A segment is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users, users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects, such as age. [Detailed below](#segment_overrides). */
    segment_overrides:        any;
    /** (Required) Specifies the date and time that this step of the launch starts. */
    start_time:               any;
    /** (Required) Specifies a number indicating the order to use to evaluate segment overrides, if there are more than one. Segment overrides with lower numbers are evaluated first. */
    evaluation_order:         any;
    /** (Required) The name or ARN of the segment to use. */
    segment:                  any;
    /** (Required) The traffic allocation percentages among the feature variations to assign to this segment. This is a set of key-value pairs. The keys are variation names. The values represent the amount of traffic to allocate to that variation for this segment. This is expressed in thousandths of a percent, so a weight of 50000 represents 50% of traffic. */
    weights:                  any;
}